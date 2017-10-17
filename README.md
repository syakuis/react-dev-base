# React 앱을 개발하기 위한 기본 개발 환경

본 프로젝트는 리액트 앱 개발을 위한 기본적인 개발환경을 구성하고 있다.

새로운 프로젝트마다 매번 개발환경을 구성하는 작업을 생략하기 위해 만들어졌다.

### 기본 라이브러리

```
webpack 3
webpack-dev-server 3

eslint 4
eslint-config-airbnb
stylelint 8

babel
React & ReactDOM 16
jest
```

### 패키지 구동

npm or yarn

```
$ yarn build:prod
$ yarn build:publish
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

### 개발시 필요한 추천 패키지

### 개발 팁

#### css classname 충돌 방지

spa 특성상 한번 로드된 css 용 classname 메모리에 저장된다. 그래서 동일한 이름이라면 충돌되어 디자인에 문제가 발생한 이를 해경하기 위해 css-loader 의 module 옵션을 사용한다.
그래서 충돌이 되는 클래스 이름만 `*.module.css` 파일로 분리하고 css-loader 는 해당 클래스 이름을 유일한 이름으로 재생성하게 되어 충돌을 방지한다.

```
import s from './style.module.css';

... skip ...

<div className={s.name}>
```

#### 추천 패키지

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