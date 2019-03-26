const 
    path = require( 'path' ),
    HtmlWebPackPlugin = require( 'html-webpack-plugin' )

module.exports = {
  entry: path.resolve( __dirname, './src/index.tsx' ),
  output: {
    path: path.resolve( __dirname, 'dist' ),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      },
    ]
  },
  plugins: [
    new HtmlWebPackPlugin(),
  ],
  devServer: {
    historyApiFallback: true,
  },
  stats: {
    errorDetails: true
  },
  resolve: {
    extensions: [ '.js', '.jsx', '.json', '.tsx', '.ts' ]
  }
}