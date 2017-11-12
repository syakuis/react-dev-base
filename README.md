# React 앱을 개발하기 위한 기본 개발 환경

본 프로젝트는 리액트 앱 개발을 위한 기본적인 개발환경을 구성하고 있다.

새로운 프로젝트마다 매번 개발환경을 구성하는 작업을 생략하기 위해 만들어졌다.

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
$ yarn build:prod
$ yarn build:publish
$ yarn serv:dev
$ yarn serv:demo
$ yarn stats:prod

$ yarn jest
```

### npm 저장소에 배포하기

```
// 바벨로 빌드하여 최종 소스를 생성한다.
$ yarn build:publish

// npm 에 배포하기전에 배포 소스를 만들어 설치해본다. *.tgz
$ yarn pack
$ yarn add ./packName.tgz

// npm 서버 패키지를 배포한다.
$ yarn publish
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


### 추천 패키지

- axios: ajax request
- qs: json to parameter type trans
- attr-accept: mimetype check
- classnames: css classname appender
- file-saver: file save
- filesize: file size
- flatpickr: datetime picker
- moment: date util
- shortid: 유니크 key 생성.
- store: local storage. cookie and session support
- styled-components: inline style created.