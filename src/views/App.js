import logo from "./logo.svg";
import "./App.scss";
import MyComponent from "./example/MyComponent";

function App() {
    // cái đống html mà function này trả về, giới mộ điệu gọi là JSX
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>Hello world</p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                {/* sau khi import thì component được sử dụng như 1 thẻ html */}
                {/* <MyComponent></MyComponent> */}
                <MyComponent />
            </header>
        </div>
    );
}

export default App;
