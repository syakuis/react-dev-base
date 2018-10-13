# React Development Environment

## 설명

리액트 기반으로 프로그램을 개발하기 위한 기본적인 개발 환경을 구성을 제공합니다.
바벨 설정은 ie 11 이상으로 되어있습니다.

## 패키지 구동

```
$ npm install
$ npm run build  // 소스 빌드
$ npm run start   // 서버 구동
```

## 할일

- [ ] 배포 방법 정리 및 설정 개선. es, umd 등등 
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
- [ ] sudo 없이 npm 접근할 수 없는 문제.
- [ ] webpack.config.js 같은 설정에서 env. 사용하면 빌드시 오류가 발생하는 데 이유를 찾지 못했다.
  ```js
  // 파일 ./build/webpack.config.js
  // 여기서 env.development 사용할 수 없었다.
  if (development === true) {
    return dev(env, newArgs);
  }

  return prod(env, newArgs);
  ```

