const path = require('path')

module.exports = {
  chainWebpack: config => {
    config.plugin('copy')
      .tap(args => {
        args[0].push({
          // assets 配下の画像をビルドディレクトリ配下にコピーする
          from: path.resolve(__dirname, 'src/assets'),
          to: path.resolve(__dirname, 'dist/assets'),
          toType: 'dir',
          ignore: ['.DS_Store']
        })
        return args
      })
  }
}
