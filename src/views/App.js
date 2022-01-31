import logo from "./logo.svg";
import "./App.scss";
import MyComponent from "./example/MyComponent";
import Bai5_state from "./example/Bai5_state";
import Bai7_DOM_event from "./example/Bai7_DOM_event";
import Bai9_form from "./example/Bai9_form";
import Bai15_split_component from "./example/Bai15_split_component";
import TodoList from "./todos/TodoList";
import Nav from "./Nav/Nav";
import PL from "./example/PhongLe";

// thu vien
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
    BrowserRouter,
    Switch,
    Route,
    Link,
    useRouteMatch,
} from "react-router-dom";
function App() {
    // cái đống html mà function này trả về, giới mộ điệu gọi là JSX
    return (
        <BrowserRouter>
            <div className="App">
                <header className="App-header">
                    <Nav />
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>Hello Mr Phong Le</p>
                    {/* sau khi import thì component được sử dụng như 1 thẻ html */}
                    {/* <MyComponent></MyComponent> */}
                    {/* <MyComponent /> */}
                    {/* <Bai5_state /> */}
                    {/* <Bai7_DOM_event /> */}
                    {/* <Bai9_form /> */}
                    {/* <Bai15_split_component /> */}
                    {/* <TodoList/> */}

                    <Switch>
                        <Route exact path="/">
                            <Bai15_split_component />
                        </Route>
                        <Route path="/todo">
                            <TodoList />
                        </Route>
                        <Route path="/about">
                            <PL />
                        </Route>
                    </Switch>
                </header>

                {/* cần thêm toast container vào nữa*/}
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />

                <ToastContainer />
            </div>
        </BrowserRouter>
    );
}

export default App;
