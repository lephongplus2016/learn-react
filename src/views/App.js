import logo from "./logo.svg";
import "./App.scss";
import MyComponent from "./example/MyComponent";
import Bai5_state from "./example/Bai5_state";
import Bai7_DOM_event from "./example/Bai7_DOM_event";

function App() {
    // cái đống html mà function này trả về, giới mộ điệu gọi là JSX
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>Hello world</p>
                {/* <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a> */}
                {/* sau khi import thì component được sử dụng như 1 thẻ html */}
                {/* <MyComponent></MyComponent> */}
                {/* <MyComponent /> */}
                {/* <Bai5_state /> */}
                <Bai7_DOM_event />
            </header>
        </div>
    );
}

export default App;
