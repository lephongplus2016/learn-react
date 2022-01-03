import React from "react";
import ChildComponent from "./ChildComponent";

class Bai9_form extends React.Component {
    // form không cần id, name vì quản lý qua state
    // form không cần action vì thực hiện qua api
    state = {
        firstName: "",
        lastName: "",
    };
    handleOnchangeFirstname = (event) => {
        this.setState({
            firstName: event.target.value,
        });
    };
    handleOnchangeLastname = (event) => {
        this.setState({
            lastName: event.target.value,
        });
    };
    handleClick = (event) => {
        // ngăn mặc định sẽ tải lại trang mỗi khi thực hiện submit form
        event.preventDefault();
        console.log("check input data", this.state);
    };
    // mọi hàm gọi trong render đều phải qua this
    render() {
        return (
            <>
                {/* đối với form của react thì không cần action
                yêu cầu mỗi thẻ br, label phải có / ở cuối */}
                <form>
                    <label for="fname">First name:</label>
                    <br />
                    <input
                        type="text"
                        value={this.state.firstName}
                        onChange={(event) => {
                            this.handleOnchangeFirstname(event);
                        }}
                    />
                    <br />
                    <label for="lname">Last name:</label>
                    <br />
                    <input
                        type="text"
                        value={this.state.lastName}
                        onChange={(event) => {
                            this.handleOnchangeLastname(event);
                        }}
                    />
                    <br />
                    <br />
                    <input
                        type="submit"
                        value="Submit"
                        onClick={(event) => this.handleClick(event)}
                    />
                </form>

                {/* gọi component con với data truyền vào */}
                <ChildComponent name={"child one"} />
                <ChildComponent name={"child two"} />
                <ChildComponent name={"child three"} />
            </>
        );
    }
}

export default Bai9_form;
