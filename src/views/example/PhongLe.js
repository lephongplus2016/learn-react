import React from "react";
import { withRouter } from "react-router-dom";

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
            </div>
        );
    }
}

// HOC: higher order component:
// Tạo ra 1 class mới từ param là PL, có đầy đủ hàm nâng cao của withRouter
export default withRouter(PL);
