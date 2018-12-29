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
  $ npm dev
  ```

* production mode

    ```
    $ npm prod
    ```

### Start the server bundle file

The command below will start `server.bundle.js`.

```
$ npm start
```



## Structure

If you want to read description about the common structure of all boilerplates, see [this](https://github.com/3jin/node-boilerplates#common-structure).

### SSR + Redux

### Configuration

#### ESLint

* no-underscore-dangle

    MongoDB make a key named '\_id' in default. So I allowed '\_id' as an exception of this rule.