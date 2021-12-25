import React from "react";

class MyComponent extends React.Component {
    // render là bắt được nếu khai báo class component
    // sẽ đc tự hiển là  1 function
    // { gọi js trong JSX}
    // hàm return chỉ được trả về 1 thẻ div, hay thẻ html thôi
    render() {
        let name = "Phong";
        {
            console.log("my name ", name);
        }
        // return vẫn phải là kết thúc của hàm render(), nghĩa là nó ở cuối cùng
        return (
            <>
                {/* đây là 1 fragment, để làm code hợp lệ khi cần 1 thẻ trong suốt bọc ở bên ngoài */}
                <div className="first"></div>
                <div>Đây là {name}'s' component</div>{" "}
            </>
        );
    }
}

export default MyComponent;
