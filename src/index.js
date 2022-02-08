import React from "react";
import ReactDOM from "react-dom";
import "./styles/global.scss";
import App from "./views/App";
import reportWebVitals from "./reportWebVitals";

// các thư viện của react-redux và redux
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./store/reducers/rootReducer";

const reduxStore = createStore(rootReducer);

ReactDOM.render(
    <React.StrictMode>
        {/* app sẽ được bọc bởi provider, khi đó đã sử dụng được redux cho react */}
        {/* ép song song redux và react */}
        {/* store để nạp dữ liệu cho react */}
        <Provider store={reduxStore}>
            <App />
        </Provider>
    </React.StrictMode>,
    // nôm na ta hiểu là
    // nó gọi 1 cái component là app, rồi nhúng component đó vào 1 cái thẻ div, mà thẻ div đó có id là root
    // rồi nó in thẻ div root đó ở index.html
    // keywork là inject
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
