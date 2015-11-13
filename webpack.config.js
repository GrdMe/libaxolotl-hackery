var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: "./src/entry.js",
  output: {
    path: path.join(__dirname, 'dist'),
    filename: "bundle.js"
  },
  resolve: {
    alias: {
      Long: __dirname + "/node_modules/long/dist/Long.js",
      ByteBuffer: __dirname + "/node_modules/bytebuffer/dist/ByteBufferAB.js",
      "traceur-runtime": __dirname + "/node_modules/traceur/bin/traceur-runtime.js",
    }
  },
  module: {
    noParse: [
      /node_modules\/traceur\/bin/,
    ],
  },
};
