<template>
  <a-entity>

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
      value="花火動画を掲載中..."
      color="white"
      font="ar/noto-sans-cjk-jp-msdf.json"
      font-image="ar/noto-sans-cjk-jp-msdf.png"
      negate="false"
      position="0 0.2 -3"
      rotation="-90 0 0"
    >
    </a-text>

    <!-- 動画コンテンツ -->
    <a-video
      src="#fireworks"
      width="2.4"
      height="2.0"
      position="1.2 0.2 -1.6"
      rotation="-90 0 0"
    ></a-video>

    <!-- メニューボタン1: Navigation に戻る -->
    <a-entity
      id="Navigation"
      click-event
    >
      <a-plane
        color="#455A64"
        width="0.8"
        height="0.5"
        position="0.4 0.2 -0.1"
        rotation="-90 0 0"
      ></a-plane>
      <a-text
        value="<<戻る"
        color="white"
        font="ar/noto-sans-cjk-jp-msdf.json"
        font-image="ar/noto-sans-cjk-jp-msdf.png"
        negate="false"
        position="0.1 0.3 -0.1"
        rotation="-90 0 0"
      >
      </a-text>
    </a-entity>

    <!-- メニューボタン2: 動画再生 -->
    <a-entity
      id=""
      video-play
    >
      <a-plane
        color="white"
        width="0.5"
        height="0.5"
        position="1.3 0.2 -0.1"
        rotation="-90 0 0"
      ></a-plane>
      <a-image
        src="#play"
        position="1.3 0.2 -0.1"
        rotation="-90 0.2 0"
        scale="0.5 0.5 1"
      ></a-image>
    </a-entity>

    <!-- メニューボタン2: 動画一時停止 -->
    <a-entity
      id="Navigation"
      video-pause
    >
      <a-plane
        color="white"
        width="0.5"
        height="0.5"
        position="2.0 0.2 -0.1"
        rotation="-90 0 0"
      ></a-plane>
      <a-image
        src="#pause"
        position="2.0 0.2 -0.1"
        rotation="-90 0 0"
        scale="0.5 0.5 1"
      ></a-image>
    </a-entity>

  </a-entity>
</template>

<script>
export default {
  name: 'WebARWatchVideo',
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
