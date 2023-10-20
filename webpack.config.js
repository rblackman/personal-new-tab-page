const path = require("path");
const HTMLPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const mode = process.env.production ? "production" : "development";

module.exports = {
    entry: {
        index: "./src/index.tsx"
    },
    mode,
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 9000,
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: "ts-loader",
                        options: {
                            compilerOptions: { noEmit: false },
                        }
                    }],
                exclude: /node_modules/,
            },
            {
                exclude: /node_modules/,
                test: /\.css$/i,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            },
        ],
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                {
                    from: "public/**/*",
                    to: "./",
                    globOptions: {
                        dot: true,
                        gitignore: true,
                        ignore: [],
                    },
                },
                {
                    from: "manifest.json",
                    to: "./"
                }
            ],
        }),
        new HtmlWebpackPlugin()
    ],
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "[name].js",
        clean: true
    },
};

// function getHtmlPlugins(chunks) {
//     return chunks.map(
//         (chunk) =>
//             new HTMLPlugin({
//                 title: "React extension",
//                 filename: `${chunk}.html`,
//                 chunks: [chunk],
//             })
//     );
// }