# REDUX

https://redux.js.org/tutorials/essentials/part-1-overview-concepts

Tải redux tại https://www.npmjs.com/package/redux
và 1 dependencis: https://www.npmjs.com/package/react-redux

> Redux phải được cấu hình trong index.js của react

[Configuring Your Store](https://redux.js.org/usage/configuring-your-store)

Thư mục store quản lý redux

-   State của redux là nơi share data cho các component

-   Defining `mapDispatchToProps` As A Function​
    https://react-redux.js.org/using-react-redux/connect-mapdispatch

## công cụ hỗ trợ đắc lực `Redux DevTools` Do Redux DevTools cung cấp

https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd

config https://github.com/reduxjs/redux-devtools/tree/main/extension#installation

-   Trong index.js hãy cấu hình như này

```js
const reduxStore = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
```

> npm install @reduxjs/toolkit
