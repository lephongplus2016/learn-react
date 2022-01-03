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
        let { name, age } = this.props;

        return (
            <>
                {/* gọi props sẽ tự hiểu là lấy của cha truyền */}
                <div>
                    child component: {name} - {age}
                </div>
            </>
        );
    }
}

export default ChildComponent;
