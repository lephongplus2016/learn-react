## Các document

https://reactjs.org/docs/create-a-new-react-app.html
https://create-react-app.dev/docs/getting-started/

## Khởi tạo

```
npx create-react-app my-app
```

## Cấu trúc

-   File html thuần là public/index
-   File main là src/index.js
-   services: api
-   components: reuse code
-   store: cho redux
-   utils: function js

## SCSS

Thay cho css thông thường

## Component

```
Chính là viên gạch xây dựng web,
mỗi cụm object của web sẽ là 1 component.
Bản chất là các function js, return mã html về
Độc lập và tái sử dụng
```

-   Class component
-   Function component

## JSX

-   JSX chính là việc gán 1 biến js có giá trị là 1 thẻ, hay 1 đoạn html
-   Mục đích: viết logic xử lý ngay trong html

```js
something in js
return (
    something in html
    { function by js}
)
```
- trong 1 function hay class jsx thì viết js, muốn viết html thì viết trong return (html).
- trong html muốn gọi hàm hay biến js đã định nghĩa ở ngoài return () thì viết trong {js variable, or function}
- chú ý ở ngoài render thì chỉ có state({}) và các function js thôi, ko đc có biến js. 
- Chủ yếu ngoài render là các hàm tương tác với state như:
```js
handleOnchangeFirstname = (event) => {
        this.setState({
            firstName: event.target.value,
        });
    };
```

## State

-   Là các dữ liệu có sự thay đổi liên tục
-   Yêu cầu không cần load lại page, mà vẫn phải cập nhật hiển thị giá trị mới.
-   Đây cũng là điểm mà chỉ frameworks frontend mới làm được
-   Bí mật là khi state thay đổi giá trị, thì ngay lập tức component đó sẽ gọi re-render -> real time

## Child component `Nest component`

-   Các component có tính chất của tree
-   component được gọi trong component khác được gọi là con
-   conponent cha truyền data cho con qua prop
-   chỉ có thể truyền 1 chiều

## Lỗi

https://stackoverflow.com/questions/47616355/foreach-in-react-jsx-does-not-output-any-html

> Ta thấy rằng forEach không trả về html nên ko dùng đc.
> Thay vì đó, JSX dùng hàm map để tạo và trả về 1 array mới

## Exchange sang commit cũ

```bash
git checkout ma_so_commit
// tro ve
git checkout dev
```


## Tool react dev tools

## `Stateless` & `Statefull`
+ `Stateless`: là dạng function component trong react, 1 function chỉ nhận data- props từ cha và thay đổi hiển thị của nó, nó không quan tâm đến state. Function chỉ có `return` ko có `render`
+ `Statefull`: là class component trong react, sau này trở thành hook
Chú ý: function ko có `state`

## Props
```
Cha truyền dữ liệu cho con thông qua props, không chỉ là state, mà còn là function
```


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
