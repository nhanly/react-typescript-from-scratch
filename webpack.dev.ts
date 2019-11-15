import * as webpack from "webpack";
import * as HtmlWebPackPlugin from "html-webpack-plugin";

const htmlPlugin: any = new HtmlWebPackPlugin({
  template: "./src/index.html"
});

const config: webpack.Configuration = {
  mode: "development",
  entry: "./src/index.tsx",
  resolve: {
    // add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json"]
  },

  module: {
    rules: [
      // all files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
      {
        test: /\.scss$/,
        loaders: [
          require.resolve("style-loader"),
          require.resolve("css-loader"),
          require.resolve("sass-loader")
        ]
      }
      // {
      //   exclude: [/\.(js|jsx|mjs|ts|tsx)$/, /\.html$/, /\.json$/, /\.scss$/],
      //   loader: require.resolve("file-loader"),
      //   options: {
      //     name: "static/media/[name].[hash:8].[ext]"
      //   }
      // }
    ]
  },
  plugins: [htmlPlugin]
};

export default config;
