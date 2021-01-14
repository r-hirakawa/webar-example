module.exports = {
  /**
   * [Workaround]
   *  概要   : GitHub Pages にデプロイすると　app.js/app.css などが 404 Not Found となる.
   *  原因   : vue.config.js の publicPath の既定値がドメインのルート直下へのデプロイを想定した設定になっている.
   *  回避策 : publicPath の設定を相対パスに設定する.
   *  補足   : assetDir は既定値が相対パス.
   * @see https://cli.vuejs.org/config/#publicpath
   */
  assetsDir: '',
  publicPath: '',

  transpileDependencies: [
    'vuetify',
  ],
}
