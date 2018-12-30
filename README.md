# nodejs-boilerplates

Bunch of boilerplates for variant structures of Node.js

## Boilerplate List

* [Webpack + Express + React(Redux, SSR) + Mongoose](https://github.com/3jin/nodejs-boilerplates/tree/master/express-react-redux-ssr-mongodb/)

* To be added more...

## Common Structure

There are common points that all boilerplates in this repo share.

### Babel

Using [env](https://babeljs.io/docs/en/babel-preset-env) and [react](https://babeljs.io/docs/en/babel-preset-react) presets.

### ESLint

Decided to follow [Airbnb Javascript Style Guide](https://github.com/airbnb/javascript) basically, but modify some rules like this.

```json
{
  "parser": "babel-eslint",
  "extends": "airbnb",
  "rules": {
    "linebreak-style": 0,
    "no-console": 0,
    "react/jsx-filename-extension": 0,
    "no-shadow": [2, { "allow": ["err"] }],
    "no-plusplus": [2, { "allowForLoopAfterthoughts": true }],
  },
  "env": {
    "node": true,
    "browser": true
  }
}
```

#### excluded rules

* [linebreak-style](https://eslint.org/docs/rules/linebreak-style)

    Before making a commit, linbreak tokens aren't important at all, so it can be a very annoying rule for Windows users. As Git offers [a way to modify linebreaks automatically](https://git-scm.com/book/id/v2/Customizing-Git-Git-Configuration#_formatting_and_whitespace), I considered this rule meaningless.

* [no-console](https://eslint.org/docs/rules/no-console)

    Check this: https://eslint.org/docs/rules/no-console#when-not-to-use-it

* [react/jsx-filename-extension](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md)

    I prefer `.js` to `.jsx`.

#### modified rules

* [no-shadow](https://eslint.org/docs/rules/no-shadow)

    It's hard to give different names for error variables in nested `try ~ catch` phrases.

* [no-plusplus](https://eslint.org/docs/rules/no-plusplus)

    It's awkward not to use `++` in `for` phrases. 

### Stylesheets

All stylesheets in this repository are written in [Sass](https://sass-lang.com/).