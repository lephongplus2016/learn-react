import React from "react";
class AddComponent extends React.Component {
    state = {
        titleJob: "",
        salary: "",
    };
    handleOnchangetitleJob = (event) => {
        this.setState({
            titleJob: event.target.value,
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
    };
    render() {
        return (
            <>
                <form>
                    <label for="fname">Title Job:</label>
                    <br />
                    <input
                        type="text"
                        value={this.state.titleJob}
                        onChange={(event) => {
                            this.handleOnchangetitleJob(event);
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
