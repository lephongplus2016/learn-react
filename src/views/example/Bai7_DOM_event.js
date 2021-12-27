import React from "react";

class Bai7_DOM_event extends React.Component {
    // cả hàm handle và hàm gọi ở onClick đều là arrow function
    handleClickMe = () => {
        alert("Click me");
    };
    state = {
        name: "phong",
        channel: "github.com",
    };
    handleOnChangeName = (event) => {
        console.log("event", event);
        // chính là giá trị nhập của event input
        console.log("event target value ", event.target.value);
        // hàm set giá trị cho state
        // chỉ ghi các giá trị thay đổi, các giá trị giữ nguyên sẽ auto merge
        // cái hay của state đó là khi có lệnh setState thì nó ngay lập tức cập nhật giá trị state
        // đồng thời gọi re-render
        //=> ko cần load lại page
        this.setState({
            // hàm của react nên phải có dấu {}
            name: event.target.value,
        });
        // chú ý state là 1 object có tính bao đóng, không bao giờ được vọc tay trực tiếp đổi giá trị của nó
        // phải thông qua setState
    };
    render() {
        console.log(">>> call render: ", this.state);

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
                <div className="second">
                    <input
                        type="text"
                        value={this.state.name}
                        // onchange sẽ lấy giá trị nhập từ bàn phím
                        onChange={(event) => this.handleOnChangeName(event)}
                    ></input>
                    My name is {this.state.name}
                </div>
            </>
        );
    }
}

export default Bai7_DOM_event;
