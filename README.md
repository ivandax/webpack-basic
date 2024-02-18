### Setting up Webpack from scratch

 - Initialize the npm project with `npm init`

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

 - 