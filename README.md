# React 앱을 개발하기 위한 기본 개발 환경

리액트 패키지를 개발하기 위한 기본 개발 환경을 구성하고 있다.

바벨 설정은 ie 11 이상으로 되어있다. 필요하다면 직접 변경하여 사용한다.

### Built-in package

```
webpack
webpack-dev-server

eslint
eslint-config-airbnb
stylelint

babel
React & ReactDOM
jest
```

### 패키지 구동

npm or yarn

```
$ yarn build  // 배포소스 빌드
$ yarn demo   // 데모소스 빌드
$ yarn dev    // 개발서버 구동

$ yarn jest
```

### yarn 로컬 패키지 생성 및 배포하기

```
// 빌드한다.
$ yarn build

// npm 서버 패키지 배포하기
$ yarn publish

// 로컬 패키지 생성하기
$ yarn pack

// 로컬 패키지 설치하기.
$ yarn add ./packName.tgz
```

### 패키지 install

```
$ yarn add react-dev-base
```

```js
<script src="https://cdnjs.cloudflare.com/ajax/libs/react/16.2.0/umd/react.production.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.2.0/umd/react-dom.production.min.js"></script>
<script src="./dist/react-dev-base.min.js"></script>

<script>
  // python -m SimpleHTTPServer 8000
  console.log(ReactDevBase);
  ReactDevBase.ConsoleLog();
</script>
```

or

```js
import ReactDevBase from 'react-dev-base';
```

### 개발 환경 설정 설명

#### css classname 충돌 방지

SPA 는 한번 로드된 css 의 class name 계속 유지되므로 같은 이름이 있으면 디자인에 문제가 생긴다. 이를 해결하기 위해 css-loader 의 module 옵션을 사용한다.
하지만 이 기능은 코딩시 매우 불편하므로 무조건 사용하는 것보다 충돌이 생기는 곳에만 사용한다.

충돌이 생기는 css class name 를 `*.module.css` 로 분리하여 코딩하고 사용할때는 아래와 같이 사용한다.

```
import s from './style.module.css';

... skip ...

<div className={s.name}>
```

충돌이 되지 않는 클래스는 그래도 사용하면 된다. `<div className="clas"></div>`

webpack 설정에 `*.module.css` 에 대해 모듈로 처리되게 설정되어 있다.
