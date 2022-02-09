import React from "react";
// Để sử dụng HOC tất nhiên cần import
import { withRouter } from "react-router-dom";
import Color from "../HOC/Color";
import image from "./../../assets/images/pl.png";

import { connect } from "react-redux";

class PL extends React.Component {
    // This method is called during the Mounting phase of the React Life-cycle i.e after the component is rendered.
    // thực thi sau hàm render
    componentDidMount() {
        setTimeout(() => {
            // 1 hàm chuyển redirect mà không cần load lại trang
            this.props.history.push("/todo");
        }, 3000);
    }

    handleDeleteUser = (user) => {
        console.log(">>> check user delete: ", user);
        this.props.deleteUserRedux(user);
    };

    handleCreateUser = () => {
        this.props.addUserRedux();
    };

    render() {
        // với kết nối connect thì props là cách lấy trực tiếp data từ state redux
        let listUsers = this.props.dataRedux;
        return (
            <>
                <div>
                    <h3>Call me: Phong Le </h3>
                    <h4>Click About or F5 for change color</h4>
                    <img src={image} />
                </div>

                <div>
                    {listUsers &&
                        listUsers.length > 0 &&
                        listUsers.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    {index + 1} - {item.name}
                                    &nbsp;{" "}
                                    <span
                                        onClick={() =>
                                            this.handleDeleteUser(item)
                                        }
                                    >
                                        x
                                    </span>
                                </div>
                            );
                        })}
                    <button onClick={() => this.handleCreateUser()}>
                        Add new
                    </button>
                </div>
            </>
        );
    }
}

// đổ dữ liệu của state cho props
// state này là state trong file index.js
const mapStateToProps = (state) => {
    return {
        dataRedux: state.users,
    };
};

// dispatch : gửi action từ react sang để redux xử lý
// type là label để rootRedux nhận biết action
// chú ý là luôn phải connect vào dưới
const mapDispatchToProps = (dispatch) => {
    return {
        deleteUserRedux: (userDelete) =>
            dispatch({ type: "DELETE_USER", payload: userDelete }),
        addUserRedux: () => dispatch({ type: "CREATE_USER" }),
    };
};

// kết nối redux và react trong component này

// HOC: higher order component:
// Tạo ra 1 class mới từ param là PL, có đầy đủ hàm nâng cao của withRouter
// export default withRouter(PL);
// Wrapping này chính là HOC function đang compose lại wrapping component
export default connect(mapStateToProps, mapDispatchToProps)(Color(PL));

// Về hình ảnh ko thể sử dụng đường link trực tiếp được.
// Do cơ chế của react, cần phải import hình ảnh như 1 biến trước, đến cả tên của ảnh cũng đã được hash
