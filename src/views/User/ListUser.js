import React from "react";
import axios from "axios";

class ListUser extends React.Component {
    state = {
        listUser: [],
    };

    // cách làm cũ mới promise
    // componentDidMount() {
    //     axios.get("https://reqres.in/api/users?page=1").then((res) => {
    //         console.log("res.data tra ve tu axios ", res.data);
    //     });
    // }

    // hiện tại ES7 người ta sử dụng async, await
    async componentDidMount() {
        let res = await axios.get("https://reqres.in/api/users?page=1");

        console.log("res.data tra ve tu axios ", res.data);
        // nhớ là if else ko dùng được trong JSX
        this.setState({
            listUser: res && res.data && res.data.data ? res.data.data : [],
        });
    }

    render() {
        let { listUser } = this.state;
        return (
            <div className="list-user-container">
                <div className="title">Fetch all list users</div>
                <div className="list-user-content">
                    {listUser &&
                        listUser.length > 0 &&
                        listUser.map((item, index) => {
                            return (
                                <div className="child" key={item.id}>
                                    {index + 1} - {item.first_name}{" "}
                                    {item.last_name}
                                </div>
                            );
                        })}
                </div>
            </div>
        );
    }
}

export default ListUser;
