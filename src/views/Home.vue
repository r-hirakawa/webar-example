<template>
  <div class="container">
    <a-scene
      id="scene"
      vr-mode-ui="enabled: false;"
      loading-screen="enabled: true;"
      arjs="trackingMethod: best; sourceType: webcam; debugUIEnabled: false;"
      embedded
    >

      <!-- a-assets: preload/cache するアセットの定義 -->
      <a-assets>
        <!-- ろっくん画像 -->
        <img
            id="rockn"
            src="assets/rockn.png"
        />
        <!-- DigiComロゴ画像 -->
<!--
        <img
            id="digicom-logo"
            src="assets/digicom-logo.png"
        />
-->
      </a-assets>

      <!-- a-marker: マーカーを検知してオブジェクトをレンダリング -->
      <a-marker
        id="rockn-marker"
        type="pattern"
        preset="custom"
        url="assets/marker.patt"
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
        url="assets/item.jpg"
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
  name: 'Home',
  components: {
  }
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
