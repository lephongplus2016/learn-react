import React from "react";
class AddComponent extends React.Component {
    state = {
        title: "",
        salary: "",
    };
    handleOnchangetitle = (event) => {
        this.setState({
            title: event.target.value,
        });
    };
    handleOnchangesalary = (event) => {
        this.setState({
            salary: event.target.value,
        });
    };
    handleClick = (event) => {
        // ngăn mặc định sẽ tải lại trang mỗi khi thực hiện submit form
        event.preventDefault();

        console.log("check input data", this.state);
        if (!this.state.title || !this.state.salary) {
            alert('Missing required params')
            return;
        }
        console.log('>>> check data input: ', this.state)
        // trả về props function này 1 object là được
        this.props.addNewJob({
            // đảm bảo id là 
            id: Math.floor(Math.random() * 1001),
            title: this.state.title,
            salary: this.state.salary
        })

        //reset lại
        this.setState({
            title: '',
            salary: ''
        })
    };
    render() {
        return (
            <>
                <form>
                    <label for="fname">Title Job:</label>
                    <br />
                    <input
                        type="text"
                        value={this.state.title}
                        onChange={(event) => {
                            this.handleOnchangetitle(event);
                        }}
                    />
                    <br />
                    <label for="lname">Salary:</label>
                    <br />
                    <input
                        type="text"
                        value={this.state.salary}
                        onChange={(event) => {
                            this.handleOnchangesalary(event);
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
            </>
        );
    }
}
export default AddComponent;
