<template>
  <a-entity>

    <!--
      オブジェクトの座標: マーカーを地面に配置
        x (-:左,   +:右)
        y (-:下,   +:上)
        z (-:手前, +:奥)

      オブジェクトの座標: 壁に貼る(rotation="-90 0 0")
        x (-:左, +:右)
        y (-:奥, +:手前)
        z (-:上, +:下)
    -->

    <!-- ナビゲーターキャラクター: ろっくん -->
    <a-image
      src="#rockn"
      position="-1 0 -1.5"
      scale="2.5 4 1"
      rotation="-90 0 0"
    ></a-image>

    <!-- メニュー背景 -->
    <a-plane
      color="#607D8B"
      width="3.2"
      height="4"
      position="1.3 -0.2 -1.5"
      rotation="-90 0 0"
    >
    </a-plane>
    <a-text
      value="AR特設サイトへようこそ!"
      color="white"
      font="ar/noto-sans-cjk-jp-msdf.json"
      font-image="ar/noto-sans-cjk-jp-msdf.png"
      negate="false"
      position="0 0.2 -3"
      rotation="-90 0 0"
    >
    </a-text>

    <!-- メニューボタン1: 動画を見る(ID:遷移先のVueコンポーネント名) -->
    <a-entity
      id="WatchVideo"
      click-event
    >
      <a-plane
        color="#455A64"
        width="2.4"
        height="0.5"
        position="1.2 0.2 -2.2"
        rotation="-90 0 0"
      ></a-plane>
      <a-text
        value="動画を見る"
        color="white"
        font="ar/noto-sans-cjk-jp-msdf.json"
        font-image="ar/noto-sans-cjk-jp-msdf.png"
        negate="false"
        position="0.2 0.3 -2.2"
        rotation="-90 0 0"
      >
      </a-text>
    </a-entity>

    <!-- メニューボタン2: 未定義 -->
    <a-entity
      id=""
      click-event
    >
      <a-plane
        color="#455A64"
        width="2.4"
        height="0.5"
        position="1.2 0.2 -1.5"
        rotation="-90 0 0"
      ></a-plane>
      <a-text
        value="..."
        color="white"
        font="ar/noto-sans-cjk-jp-msdf.json"
        font-image="ar/noto-sans-cjk-jp-msdf.png"
        negate="false"
        position="0.2 0.3 -1.5"
        rotation="-90 0 0"
      >
      </a-text>
    </a-entity>

    <!-- メニューボタン3: 未定義 -->
    <a-entity
      id=""
      click-event
    >
      <a-plane
        color="#455A64"
        width="2.4"
        height="0.5"
        position="1.2 0.2 -0.8"
        rotation="-90 0 0"
      ></a-plane>
      <a-text
        value="..."
        color="white"
        font="ar/noto-sans-cjk-jp-msdf.json"
        font-image="ar/noto-sans-cjk-jp-msdf.png"
        negate="false"
        position="0.2 0.3 -0.8"
        rotation="-90 0 0"
      >
      </a-text>
    </a-entity>

  </a-entity>
</template>

<script>
export default {
  name: 'WebARNavigation',
  components: {
  },
  props: {
  },
  data: () => ({
  }),
  methods: {
  }
}
</script>
