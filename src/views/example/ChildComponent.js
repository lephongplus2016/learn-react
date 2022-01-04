import React from "react";

class ChildComponent extends React.Component {
    state = {
        firstName: "",
        lastName: "",
    };

    handleChangeFirstName = (event) => {
        this.setState({
            firstName: event.target.value,
        });
    };
    handleChangeLastName = (event) => {
        this.setState({
            lastName: event.target.value,
        });
    };
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(">>> check data input: ", this.state);
    };
    //re-render
    render() {
        console.log(">>> call render: ", this.state);
        console.log(">>> props at child: ", this.props);
        // let name = this.props.name;
        // let age = this.props.age;
        // cách viết tắt
        let { name, age, arrJobs } = this.props;

        // Line 32:9:   'printLst' is not defined  no-undef
        // let printLst = () => {
        //     let xhtml = "";
        //     arrJobs.array.forEach((item) => {
        //         xhtml += `<div key=${item.id}>
        //                 ${item.title} - ${item.salary}
        //             </div>`;
        //     });
        //     return xhtml;
        // };

        // ko khai báo thì lỗi, mà khai báo ở dưới thì ko đc
        // ở JSX chỉ dùng thôi, ko có let hay var gì cả
        let aList;
        return (
            <>
                <div className="job-lists">
                    {/* hàm map đơn giản là copy array cũ, trả về array mới */}
                    {
                        (aList = arrJobs.map((item, index) => {
                            return (
                                // cần định nghĩa thêm id cho các thẻ div
                                <div key={item.id}>
                                    {item.title} - {item.salary}
                                </div>
                            );
                        }))
                    }
                    {console.log("hàm map trả về cho ta cái gì", aList)}
                </div>
            </>
        );
    }
}

export default ChildComponent;
