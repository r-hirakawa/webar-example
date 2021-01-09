<template>
  <div class="container">
    <a-scene
      id="scene"
      vr-mode-ui="enabled: false;"
      loading-screen="enabled: true;"
      arjs="trackingMethod: best; sourceType: webcam; debugUIEnabled: true;"
      embedded
    >

      <!-- a-assets: preload/cache するアセットの定義 -->
      <a-assets>
        <!-- ろっくん画像 -->
        <img
            id="rockn"
            src="ar/rockn.png"
        />
        <!-- DigiComロゴ画像 -->
<!--
        <img
            id="digicom-logo"
            src="ar/digicom-logo.png"
        />
-->
      </a-assets>

      <!-- a-marker: マーカーを検知してオブジェクトをレンダリング -->
      <a-marker
        id="rockn-marker"
        type="pattern"
        preset="custom"
        url="ar/marker.patt"
        raycaster="objects: .clickable"
        emitevents="true"
        cursor="fuse: false; rayOrigin: mouse;"
        custom-marker-events
      >
        <a-image
            src="#rockn"
            position="0 0 0"
            scale="3 3 3"
            class="clickable"
            rotation="-90 0 0"
        ></a-image>
      </a-marker>

      <!-- a-nft: マーカーではなく画像を検知してオブジェクトをレンダリング -->
<!--
      <a-nft
        type="nft"
        url="ar/item.jpg"
        smooth="true"
        smoothCount="10"
        smoothTolerance=".01"
        smoothThreshold="5">

        <a-image
            src="#digicom-logo"
            position="0 0 0"
            scale="3 3 3"
            class="clickable"
            rotation="-90 0 0"
        ></a-image>
      </a-nft>
-->

      <a-entity camera></a-entity>
    </a-scene>

  </div>
</template>

<script>
export default {
  name: 'WebAR',
  components: {
  },
  methods: {
  },
  // Vue コンポーネントから離れるとき、A-Frame コンテンツをアンロードする.
  // https://router.vuejs.org/ja/guide/advanced/navigation-guards.html#%E3%82%B3%E3%83%B3%E3%83%9D%E3%83%BC%E3%83%8D%E3%83%B3%E3%83%88%E5%86%85%E3%82%AC%E3%83%BC%E3%83%89
  beforeRouteLeave (to, from, next) {
    // <a-scene> の再生を停止
    var scene = document.querySelector('a-scene');
    if (scene) {
      scene.pause();
      console.log('AR Scene paused.');
    }
    // <video> 要素の削除
    var arVideo = document.querySelector('#arjs-video');
    if (arVideo) {
      arVideo.remove();
      console.log('AR <video> element removed.');
    }
    // DebugUI 要素の削除
    var arDebugUI = document.querySelector('#arjsDebugUIContainer');
    if (arDebugUI) {
      arDebugUI.remove();
      console.log('AR DebugUI removed.');
    }
    next();
  },
}
</script>

<style>
/**
 * [Workaround] Vue.js で <a-seene> がレンダリングされない問題.
 * @see https://note.com/saifunakusu/n/n3988595305b9
 *
 *  - <a-scene> の上位要素に対して height: 100% を指定する.
 */
#app, .container {
  height: 100%;
}
</style>
