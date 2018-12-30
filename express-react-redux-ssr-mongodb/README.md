# webpack4-express4-react-mongodb

Node.js + Webpack4 + Express4 + React + MongoDB



## Installation

Install packages with the `npm` command.

```
$ npm install
```



## Start

### Create distribution files 

To create bundle files(`server.bundle.js`, `client.bundle.js`), run one of these two commands depending on use.

* development mode

  ```
  $ npm run dev
  ```

* production mode

    ```
    $ npm run prod
    ```

### Start the server bundle file

The command below will start `server.bundle.js`.

```
$ npm start
```



## Structure

If you want to read description about the common structure of all boilerplates, see [this](https://github.com/3jin/nodejs-boilerplates#common-structure).

### React(SSR + Redux)

[The server](https://github.com/3jin/nodejs-boilerplates/blob/master/express-react-redux-ssr-mongodb/src/server.js) renders first, and [the client](https://github.com/3jin/nodejs-boilerplates/blob/master/express-react-redux-ssr-mongodb/src/index.js) hydrates elements. So both the server and the client needs to use all React files(actions, reducers, components). So I didn't separate the server codes and the client codes in different directories.

### Configuration

#### Webpack

* It uses two entries: `src/server.js` for the server, and `src/index.js` for the client. 
* It makes `client.bundle.js` and `server.bundle.js` in `dist` directory.
* Uses loaders for Babel, ESLint, Sass and CSS, and other ordinary files.

#### ESLint

* no-underscore-dangle

    MongoDB make a key named '\_id' in default. So I allowed '\_id' as an exception of this rule.