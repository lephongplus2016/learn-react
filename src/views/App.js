import logo from "./logo.svg";
import "./App.scss";
import MyComponent from "./example/MyComponent";
import Bai5_state from "./example/Bai5_state";
import Bai7_DOM_event from "./example/Bai7_DOM_event";
import Bai9_form from "./example/Bai9_form";
import Bai15_split_component from "./example/Bai15_split_component";

function App() {
    // cái đống html mà function này trả về, giới mộ điệu gọi là JSX
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>Hello world</p>
                {/* sau khi import thì component được sử dụng như 1 thẻ html */}
                {/* <MyComponent></MyComponent> */}
                {/* <MyComponent /> */}
                {/* <Bai5_state /> */}
                {/* <Bai7_DOM_event /> */}
                {/* <Bai9_form /> */}
                <Bai15_split_component />
            </header>
        </div>
    );
}

export default App;
