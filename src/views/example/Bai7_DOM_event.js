import React from "react";

class Bai7_DOM_event extends React.Component {
    // cả hàm handle và hàm gọi ở onClick đều là arrow function
    handleClickMe = () => {
        alert("Click me");
    };
    render() {
        return (
            <>
                <div>
                    <button
                        className="click-first"
                        onClick={() => {
                            this.handleClickMe();
                        }}
                    >
                        Click me
                    </button>
                </div>
            </>
        );
    }
}

export default Bai7_DOM_event;
