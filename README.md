# React 앱을 개발하기 위한 개발 환경 구성

본 프로젝트는 리액트 앱 개발을 위한 기본적인 개발환경을 구성하고 있다.

새로운 프로젝트마다 매번 개발환경을 구성하는 작업을 생략하기 위해 만들어졌다.

### 기본 구성

```
webpack 2
webpack-dev-server 2

eslint 3
eslint-config-airbnb
stylelint

babel
React & ReactDOM 15
jest
```

### 구동

npm or yarn

```
$ yarn run build:prod
$ yarn run build:publish
$ yarn run serv:demo
$ yarn run stats:prod

$ yarn run jest
```

### 배포

```
$ yarn run build:publish
$ yarn pack
$ yarn add pack...

$ yarn publish
```
