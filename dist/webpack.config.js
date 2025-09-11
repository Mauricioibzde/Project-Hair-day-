const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  target: "web", // Alvo da compilação: navegador
  mode: "development", // Modo de desenvolvimento

  entry: path.resolve(__dirname, "src", "main.js"), // Arquivo de entrada
  output: {
    filename: "main.js", // Nome do arquivo gerado
    path: path.resolve(__dirname, "dist"), // Pasta de saída
  },

  devServer: {
    static: {
      directory: path.join(__dirname, "dist"), // Servir arquivos estáticos da pasta dist
    },
    port: 3000, // Porta do servidor local
    open: true, // Abrir automaticamente no navegador
    liveReload: true, // Recarregamento automático ao salvar
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "index.html"), // Modelo HTML base
      favicon: path.resolve(__dirname, "src", "assets", "scissors.svg"),
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src", "assets"),
          to: path.resolve(__dirname, "dist", "src", "assets"),
        },
      ],
    }),
  ],

  module: {
    rules: [
      {
        test: /\.css$/, // Arquivos que terminam com .css
        use: ["style-loader", "css-loader"], // Loaders que processam o CSS
      },
      {
        test: /\.js$/, // Arquivos .js
        exclude: /node_modules/, // Ignora dependências
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};