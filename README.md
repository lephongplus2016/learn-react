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

## TODO APP GUI
![TODO APP GUI](https://user-images.githubusercontent.com/67221611/152325878-383c7eea-caaa-4003-8c53-c88e898631c3.png)

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

-   trong 1 function hay class jsx thì viết js, muốn viết html thì viết trong return (html).
-   trong html muốn gọi hàm hay biến js đã định nghĩa ở ngoài return () thì viết trong {js variable, or function}
-   chú ý ở ngoài render thì chỉ có state({}) và các function js thôi, ko đc có biến js.
-   Chủ yếu ngoài render là các hàm tương tác với state như:

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

-   `Stateless`: là dạng function component trong react, 1 function chỉ nhận data- props từ cha và thay đổi hiển thị của nó, nó không quan tâm đến state. Function chỉ có `return` ko có `render`
-   `Statefull`: là class component trong react, sau này trở thành hook
    Chú ý: function ko có `state`

## Props

```
Cha truyền dữ liệu cho con thông qua props, không chỉ là state, mà còn là function
```

Nếu không muốn hiển thị gì cả thì có thể dùng thẻ span

## Onlick()

```js
onChange={(event) => { this.handleOnchangesalary(event);
```

ngoài event ko được truyền gì khác ở () => cả, vì nó tự hiểu là truyền vào event.
Nếu muốn truyền giá trị khác thì phải viết bên ngoài hàm, rồi truyền vào ở () thứ hai

## Virtual DOM

-   Real DOM: là toàn bộ element thật của trang web.
-   Virtual DOM : là 11 bộ DOM ảo, được react tạo ra, nó tạo ra dựa trên previous và current DOM, mỗi khi gọi hàm render().
-   React sẽ so sánh virtual dom và real dom, và nó chỉ chỉnh sửa thành phần khác biệt của 2 cái, tức chỉ thay đổi ít trên real DOM cho giống Virtual DOM.
    -> tạo ra sự khác biệt hiệu suất.
    -> real time ko cần refresh trang.

## SCSS

-   Để dùng inline style trong react xem hướng dẫn tại [đây](https://www.w3schools.com/react/react_css.asp)

-   Để dùng class trong React, thì từ khóa là `className`

https://reactjs.org/docs/react-component.html

## Nhớ là Dev tool cũng có debug

## Thư viện xịn xò , toastify

https://www.npmjs.com/package/react-toastify
[DEMO](https://fkhadra.github.io/react-toastify/introduction/)

## Về vấn đề if else trong JSX

> Tại sao không thể dùng if else trong JSX mà cứ phải dùng toán tử 3 ngôi?

Theo DOC :

> các câu lệnh if-else không hoạt động bên trong JSX. Điều này là do JSX chỉ là đường cú pháp cho các lệnh gọi hàm và xây dựng đối tượng.

Quy tắc cơ bản:

> JSX về cơ bản là `đường cú pháp` . Sau khi biên dịch, các biểu thức JSX trở thành các lệnh gọi hàm JavaScript thông thường và đánh giá thành các đối tượng `JavaScript`. Chúng ta có thể nhúng bất kỳ biểu thức JavaScript nào vào JSX bằng cách đặt nó trong dấu ngoặc nhọn.

-   Nhưng chỉ có các biểu thức không phải là câu lệnh, có nghĩa là trực tiếp chúng ta không thể đặt bất kỳ câu lệnh nào ( `if-else` / `switch` / `for` ) bên trong `JSX` .

-   Nếu bạn muốn hiển thị phần tử có điều kiện thì hãy sử dụng ternary operator, như sau:

```JS
render() {
    return (
        <View style={styles.container}>
            {this.state.value == 'news'? <Text>data</Text>: null }
        </View>
    )
}
```

-   Một tùy chọn khác là, gọi một hàm từ `jsx` và đặt tất cả `if-elselogic` bên trong nó, như thế này:

```JS
renderElement(){
   if(this.state.value == 'news')
      return <Text>data</Text>;
   return null;
}

render() {
    return (
        <View style={styles.container}>
            { this.renderElement() }
        </View>
    )
}
```

## Update object in JS

[here](https://stackoverflow.com/questions/4689856/how-to-change-value-of-object-which-is-inside-an-array-using-javascript-or-jquer)

It is quite simple

Find the index of the object using findIndex method.
Store the index in variable.
Do a simple update like this: `yourArray[indexThatyouFind]`

```js
//Initailize array of objects.
let myArray = [
        { id: 0, name: "Jhon" },
        { id: 1, name: "Sara" },
        { id: 2, name: "Domnic" },
        { id: 3, name: "Bravo" },
    ],
    //Find index of specific object using findIndex method.
    objIndex = myArray.findIndex((obj) => obj.id == 1);

//Log object to Console.
console.log("Before update: ", myArray[objIndex]);

//Update object's name property.
myArray[objIndex].name = "Laila";

//Log object to console again.
console.log("After update: ", myArray[objIndex]);
```

Tham khảo tại link [stackoverflow](https://stackoverflow.com/questions/44046037/if-else-statement-inside-jsx-reactjs)

## React routers

https://www.npmjs.com/package/react-router-dom
Để sử dụng router react hỗ trợ chạy mà ko cần tải lại trang, ta tải modules sau.
Trang [document](https://reactrouter.com/)

chú ý có 2 phiên bản: v5 và v6.
Ở đây a eric sử dụng code v5 : https://reactrouter.com/docs/en/v6/upgrading/v5

Phiên bản v6: https://reactrouter.com/docs/en/v6/getting-started/tutorial

## ======================================================================================

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
