import Dotenv from "dotenv-webpack";

export const plugins = [new Dotenv()];
export const module = {
    rules: [
        {
            test: /\.(ts|tsx)$/,
            exclude: /node_modules/,
            use: "ts-loader",
        },
        // other rules...
    ],
};
export const resolve = {
    extensions: [".tsx", ".ts", ".js"],
};
