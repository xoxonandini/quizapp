const path = require('path');

module.exports = {
  mode: 'development', // Specify the mode
  entry: './src/index.js', // Entry point of your application
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: 'bundle.js', // Output file
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader', // Use babel-loader to transpile JS files
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'], // Handle CSS files
      },
    ],
  },
  devServer: {
    static: path.join(__dirname, 'public'), // Replace contentBase with static
    compress: true,
    port: 8081,
  },
};
