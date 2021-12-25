import React from "react";

class Bai5_state extends React.Component {
    // state đảm bảo dữ liệu được cập nhật ngay mà không yêu cầu refresh lại page
    state = {
        name: "phong",
        channel: "github.com",
    };

    render() {
        return (
            <>
                {/* sử dụng từ khóa this để lấy các object nằm bên trong class */}
                <div>Đây là {this.state.name}'s' component</div>{" "}
                <div className="next">
                    My favorite channel is {this.state.channel}
                </div>
            </>
        );
    }
}

export default Bai5_state;
