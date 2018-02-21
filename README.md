# redux-namespace-actions

[![Build Status](https://travis-ci.org/0xc14m1z/redux-namespace-actions.svg?branch=master)](https://travis-ci.org/0xc14m1z/redux-namespace-actions) [![Coverage Status](https://coveralls.io/repos/github/0xc14m1z/redux-namespace-actions/badge.svg?branch=master)](https://coveralls.io/github/0xc14m1z/redux-namespace-actions?branch=master) [![Maintainability](https://api.codeclimate.com/v1/badges/71529a56fad691ed2c10/maintainability)](https://codeclimate.com/github/0xc14m1z/redux-namespace-actions/maintainability)

Add a namespace to redux actions in order to have leaner names.

## how to install

```
$ npm install --save redux-namespace-actions
```

## how to use it

The goal of this package is to allow shorter and leaner names for redux actions in different files.

```js
// file a.js

import namespace from "redux-namespace-actions"
// or var namespace = require("redux-namespace-actions")

const action = namespace("FIRST_NAMESPACE")

const ACTION_TYPE = action("ACTION_TYPE")

```

Using a name space, you will be able to define scoped action type constants and use them accross your project.

```js
// file b.js

import namespace from "redux-namespace-actions"

const action = namespace("SECOND_NAMESPACE")

const ACTION_TYPE = action("ACTION_TYPE")

```
