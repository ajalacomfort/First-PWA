module.exports = {
  entry:"./src/index.js",
  output:{
    filename:"bundle.js",
    path:"./app"
  },
  module:{
    loaders:[
      {
        test:/\.jsx?$/,
        loader:"babel-loader",
        exlude:/node_modules/
      },
      {
        test:/\.css$/,
        loader:"style-loader!css-loader"
      },
      {
        test:/\.html$/,
        loader:"raw-loader"
      }
    ]
  },
  resolve:{
    extensions:["",".js",".sass",".json",".css",".html"]
  },
  devServer:{
    contentBase:"./app",
    publicPath:"./app"
  }
}
