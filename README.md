### Setting up Webpack from scratch

- Initialize the npm project with `npm init`

- Important: Node 20 is needed for this example to work.

### Understanding the dependencies

    "@babel/core": "^7.23.9",
    "@babel/preset-env": "^7.23.9",
    "@babel/preset-react": "^7.23.3",
    "babel-loader": "^9.1.3",
    "css-loader": "^6.10.0",
    "file-loader": "^6.2.0",
    "sass": "^1.71.0",
    "sass-loader": "^14.1.0",
    "webpack": "^5.90.2",
    "webpack-cli": "^5.1.4"

- Webpack and the CLI do the bundling of code so it's ready for the browser.
- Sass loader and Sass will convert the Sass code into CSS
- File loader is to import an HTML file into the output
- Babel will convert the JSX into browser readable code.

### The webpack config

- The webpack config runs in a node server, not on the browser
- By default the browser will not understand "import" statements, this is where Webpack and Babel helps by transpiling.

`Uncaught SyntaxError: Cannot use import statement outside a module`

- We define the loaders for our JSX and for Styles with different `rules`

```
module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
    ],
  },
```

### Dev and Production

 - We have 2 scripts on package.json to run on dev / production

 #### Dev

 - Run with `npm run serve` and will start the Node server on the defined port.
 - Has "watch mode" enabled so changes are applied on the go.

 #### Prod
 - Running `npm run build` will build our app for production into the /dist directory
 - Without any extra plugins the styles will be pushed into our JS.
 - We can use Plugins like `mini-css-extract-plugin` to extract our styles to separate files

 ### Source

 Based on this tutorial: https://www.youtube.com/watch?v=WDpxqopXd9U