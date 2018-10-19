# React Development Environment

## 설명

리액트 기반으로 프로그램을 개발하기 위한 기본적인 개발 환경을 구성을 제공한다. 바벨 설정은 ie 11 이상으로 설정하였다.

## 설치

```
$ wget https://github.com/syakuis/react-dev-base/archive/master.zip
or
$ git clone https://github.com/syakuis/react-dev-base.git

$ npm install

# 멀티 프로젝트 사용시
$ sudo npm -i -g lerna@latest
$ lerna init
$ lerna bootstrap
```

## 사용된 라이브러리 설명
- webpack & webpack-dev-server
- babel
- react & react-dom
- editorconfig  
  에디터 파일 타입에 따라 간격이나 언어셋등을 설정한다.  `.editorconfig` 파일에 설정한다.
  vscode 플러그인 : `EditorConfig for VS Code`
- eslint  
  vscode 플러그인 : ESLint
  설정에서 아래의 소스 이외에 설정은 제거해도 된다.
  ```
  rules: {
    'prettier/prettier': ['error'],
    'import/no-unresolved': ['error', { commonjs: true, amd: true }],
    'import/extensions': ['error', 'never', { packages: 'always' }],
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: true, peerDependencies: true },
    ],
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
  }
  ```
- prettier  
  vscode 플러그인 : `Prettier - Code formatter` 단축키 `option + command + l` 자동으로 코드를 정리합니다.
- eslint-config-airbnb
- jest  
  vscode 플러그인 : Jest
- stylelint  
  vscode 플러그인 : stylelint
- lerna
- vscode Debug
  vscode 플러그인 : [Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome)

## 패키지 구동

```
$ npm install

$ npm run build  // 소스 빌드
$ npm run start   // 서버 구동
```

## 다중 프로젝트 관리

packages 폴더에 프로젝트를 생성하면 된다.

```
$ sudo npm install -g lerna@latest

$ lerna init
$ lerna bootstrop

$ lerna build
$ lerna exec -- npm run dev
```
자세한 설명은 lerna 사이트에서 확인하기.

## 할일
- [x] babel lerna 의 멀티 프로젝트에서도 정상적으로 작동하기
  - leran success
- [x] 다양한 환경에서 빌드되도록 webpack 설정 세분화 하기
  - webpack success
  - leran success
- [x] webpack.resolve.alias eslint 에서 `import/no-unresolved` 오류가 발생되지 않게 구현.
  - webpack success
  - leran success
- [ ] jest test 구현
- [ ] vscode Debug 환경 구현하기
  - webpack success
  - lerna wait
- [ ] 다양한 패키지 배포 설정하기

## 문제점 정리

- [x] lerna 다중 프로젝트 관리 설정 추가하기.
  - packages 에서 `webpack.resolve.alias` 사용하여 import 하면 eslint 의 `import/no-unresolved` 오류가 발생됨.
  - `.eslintrc.js` 설정에서 prod 설정을 제거하여 문제 해결됨. `eslint-plugin-import` 어떤 방식으로 작동되는 지 이해해야 함. 현재로서 근본적인 문제의 원인과 왜 이렇게 하면 문제가 해결되는지 짐작하기 어려움.
  ```
  settings: {
    'import/parser': 'babel-eslint',
    'import/resolver': 'webpack',
    'import/resolver': {
      webpack: { 
        config: './webpack.config.dev.js',
      },
    },
    --- 제거
    'import/resolver': {
      webpack: { 
        config: './webpack.config.prod.js',
      },
    },
    ---
  },
  ```
- [x] `webpack.resolve.alias` 설정을 사용하면 eslint 에서 `import/no-unresolved` 오류가 발생됨.
  - `eslint-import-resolver-webpack` 에서 설정된 webpack.config.js 를 찾지 못해서 발생한 문제.
  - 웹팩에서 사용한 설정 파일을 직접 넣어줘야 한다. 아니면 기본 설정 `webpack.config.js` 파일을 사용하면 된다.
  ```js
  // 참고 .eslintrc.js
  // 프로젝트 경로에서 시작된다. 결국 웹팩 설정 파일을 설정해주면 해결 된다.
  settings: {
    // 'import/resolver': 'webpack',
    'import/resolver': {
      webpack: { 
        config: './build/webpack.config.dev.js'
      },
    },
    'import/resolver': {
      webpack: { 
        config: './build/webpack.config.prod.js'
      },
    },
    'import/parser': 'babel-eslint',
  },

  ```
- [x] sudo 없이 npm 접근할 수 없는 문제. 시스템 영역이기 때문에 sudo 를 사용해야 하고 어떤 경우에 의해 root 권한으로 폴더나 파일이 생성된 문제로 그럴 수 있음.
- [ ] test 환경 설정 추가하기.
- [ ] 배포 방법 정리 및 설정 개선. es, umd 등등 
- [ ] webpack.config.js 같은 설정에서 env. 사용하면 빌드시 오류가 발생하는 데 이유를 찾지 못했다.
  ```js
  // 파일 ./build/webpack.config.js
  // 여기서 env.development 사용할 수 없었다.
  if (development === true) {
    return dev(env, newArgs);
  }

  return prod(env, newArgs);
  ```

