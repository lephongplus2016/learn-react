import React from "react";
// Để sử dụng HOC tất nhiên cần import
import { withRouter } from "react-router-dom";
import Color from "../HOC/Color";

class PL extends React.Component {
    // This method is called during the Mounting phase of the React Life-cycle i.e after the component is rendered.
    // thực thi sau hàm render
    componentDidMount() {
        setTimeout(() => {
            // 1 hàm chuyển redirect mà không cần load lại trang
            this.props.history.push("/todo");
        }, 3000);
    }

    render() {
        return (
            <div>
                <h3>Call me: Phong Le </h3>
                <h4>Click About or F5 for change color</h4>
            </div>
        );
    }
}

// HOC: higher order component:
// Tạo ra 1 class mới từ param là PL, có đầy đủ hàm nâng cao của withRouter
// export default withRouter(PL);
// Wrapping này chính là HOC function đang compose lại wrapping component
export default Color(PL);
