<template>
  <div class="container">

    <a-scene
      vr-mode-ui="enabled: false;"
      loading-screen="enabled: false;"
      arjs="trackingMethod: best; sourceType: webcam; debugUIEnabled: false;"
      embedded
      id="scene"
    >

      <!-- a-assets: preload/cache するアセットの定義 -->
      <a-assets>
        <!-- ろっくん画像 -->
        <img
          id="rockn"
          src="ar/rockn.png">
        <img
          id="play"
          src="ar/play.png">
        <img
          id="pause"
          src="ar/pause.png">
        <!-- 花火動画 -->
        <video
          id="fireworks"
          src="https://cdn.aframe.io/videos/fireworks.mp4"
          preload="none"
          loop="true"
          crossOrigin="anonymous"
          webkit-playsinline
          playsinline
        ></video>
      </a-assets>

      <!-- a-camera: 視点カーソル -->
      <a-camera>
        <a-entity
          position="0 0 -1.0"
          geometry="primitive: ring"
          scale="0.01 0.01 0.01"
          material="color: yellow; shader: flat"
          cursor="fuse: true; fuseTimeout: 1000"
          >
        </a-entity>
      </a-camera>

      <!-- a-marker: マーカーを検知してオブジェクトをレンダリング -->
      <a-marker
        id="rockn-marker"
        type="pattern"
        preset="custom"
        url="ar/marker.patt"
      >
        <component :is="this.currentComponent"></component>
      </a-marker>

    </a-scene>

  </div>
</template>

<script>
import Navigation from '../components/webar/Navigation.vue'
import WatchVideo from '../components/webar/WatchVideo.vue'

export default {
  name: 'WebAR',
  components: {
    Navigation,
    WatchVideo,
  },
  props: {
  },
  data: () => ({
    // WebAR コンテンツの表示状態
    //   Navigation : トップ(ろっくんナビゲーション)
    //   WatchVideo : メニュー選択後のコンテンツ（動画を見る）
    currentComponent: 'Navigation',
  }),
  methods: {
    initAR: function() {

      /**
       * [Workaround]
       *  概要   : CI環境で `'AFRAME' is not defined` エラーが発生する.
       *  原因   : 未確認.
       *  回避策 : AFRAMEをグローバル変数として宣言する.
       * @see https://stackoverflow.com/questions/46254011/aframe-react-writing-new-component-error
       */
      const AFRAME = window.AFRAME;

      // クリックイベントハンドラを登録
      let me = this;
      AFRAME.registerComponent('click-event', {
        init: function () {
          var button = this.el;
          button.addEventListener('click', function() {
            console.log('*** ', button.id, ' clicked');
            if (button.id) {
              me.changeComponent(button.id);
            }
          });
        }
      });
      // 動画再生ボタンのイベントハンドラを登録
      AFRAME.registerComponent('video-play', {
        init: function () {
          var button = this.el;
          button.addEventListener('click', function() {
            console.log('*** play clicked');
            var video = document.querySelector('#fireworks');
            if (video) {
              video.play();
            }
          });
        }
      });
      // 動画一時停止ボタンのイベントハンドラを登録
      AFRAME.registerComponent('video-pause', {
        init: function () {
          var button = this.el;
          button.addEventListener('click', function() {
            console.log('*** pause clicked');
            var video = document.querySelector('#fireworks');
            if (video) {
              video.pause();
            }
          });
        }
      });
    },
    // ARで表示するVueコンポーネントを変更する
    changeComponent: function(componentName) {
      this.currentComponent = componentName;
    },
  },
  mounted () {
    // コンポーネント初期化時にARの初期化処理を行う
    this.initAR();
    // [Workaround] DOM のレンダリング後に <video> 要素から z-index を削除
    setTimeout(() =>
      {
        var arVideo = document.querySelector('#arjs-video');
        if (arVideo) {
          var style = arVideo.getAttribute('style');
          arVideo.setAttribute('style', style.replace('z-index: -2;', ''));
          console.info('[workaround] delete z-index from <video id="arjs-video">')
        }
      }
      ,3000
    );
  },

  /**
   * [Workaround]
   *  概要   : Vue Router で A-Frame の Vue コンポーネントから離れてもカメラ+AR映像が表示されたままになる.
   *  原因   : A-Frame が Vue.js の制御外で <body> 配下に <video> 要素を挿入するため Vue コンポーネントと一緒にアンロードされない.
   *  回避策 : Router イベントでコンポーネントから離れるときに <video> 要素を DOM 上から削除する.
   *  補足   : <video> 以外に挿入される要素も一緒にクリアする必要がある.
   * @see https://router.vuejs.org/ja/guide/advanced/navigation-guards.html#%E3%82%B3%E3%83%B3%E3%83%9D%E3%83%BC%E3%83%8D%E3%83%B3%E3%83%88%E5%86%85%E3%82%AC%E3%83%BC%E3%83%89
   */
  beforeRouteLeave (to, from, next) {
    // <a-scene> の再生を停止
    var scene = document.querySelector('a-scene');
    if (scene) {
      scene.pause();
      console.info('[workaround] <a-scene> paused')
    }
    // <video> 要素の削除
    var arVideo = document.querySelector('#arjs-video');
    if (arVideo) {
      arVideo.remove();
      console.info('[workaround] delete element <video id="arjs-video">')
    }
    // DebugUI 要素の削除
    var arDebugUI = document.querySelector('#arjsDebugUIContainer');
    if (arDebugUI) {
      arDebugUI.remove();
      console.info('[workaround] delete element <div id="arjsDebugUIContainer">')
    }
    next();
  },
}
</script>

<style>
/**
 * [Workaround]
 *  概要   : A-Frame を Vue.js に組み込むと <a-scene> がレンダリングされなくなる.
 *  原因   : <a-scene> のスタイルが heigth: 0 となっている.
 *  回避策 : <a-scene> の上位要素に対して height: 100% を指定する.
 *  補足   : Vuetify 適用時の上位要素(#app, .v-application--wrap, .v-main, .v-main__wrap)はデフォルトで height: 100% となるため不要.
 */
.container {
  height: 100%;
}

/**
 * [Workaround]
 *  概要   : A-Frame を導入したアプリケーションに Vuetify を組み込むと <video> と <a-scene> がレンダリングされなくなる.
 *  原因   : A-Frame と Vuetify の間で z-index スタイルの利用指針における不整合が発生する.
 *  回避策 : <video> と <a-scene> が Vuetify の要素より前段に表示されるよう z-index を調整する.
 *          <video> 要素は Vue.js のライフサイクルイベント外で A-Frame により直接 DOM に挿入されるため updated から timer を起動して削除を図る...
 *  補足   : z-index 値の状態と変更方針
 *  ------------------------------
 *  A-Frame
 *    z-index
 *         -2 : <video id="arjs-video"> -> 0 に変更
 *          0 : <a-scene>               -> 1 に変更
 *
 *  Vuetify
 *    z-index
 *          0 : <v-main>
 *          0 : <v-bottom-navigation>   -> 4 に変更
 *          5 : <v-app-bar>
 *  ------------------------------
 */
#scene {
  z-index: 1;
}

</style>
