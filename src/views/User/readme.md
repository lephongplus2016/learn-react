# AXIOS trong restful api

## GET METHOD

```js
const axios = require("axios");

// Make a request for a user with a given ID
axios
    .get("/user?ID=12345")
    .then(function (response) {
        // handle success
        console.log(response);
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .then(function () {
        // always executed
    });

// Optionally the request above could also be done as
axios
    .get("/user", {
        params: {
            ID: 12345,
        },
    })
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    })
    .then(function () {
        // always executed
    });

// Want to use async/await? Add the `async` keyword to your outer function/method.
async function getUser() {
    try {
        const response = await axios.get("/user?ID=12345");
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}
```

## POST METHOD

```js
axios
    .post("/user", {
        firstName: "Fred",
        lastName: "Flintstone",
    })
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
```

-   Các thông số của `response` là
    1. **status**
    2. **headers**
    3. **data.data**
-   Đều ở dạng object json

-   Luôn dùng `promise` hoặc `async`, `await` trong `axios` để đảm bảo đồng bộ
