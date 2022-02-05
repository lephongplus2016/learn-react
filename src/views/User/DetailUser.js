import React from "react";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
// có withRouter mới sử dụng được các hàm liên quan params
import axios from "axios";

class DetailUser extends React.Component {
    state = {
        user: {},
    };
    async componentDidMount() {
        // console.log(this.props.match.params.id);
        if (
            this.props.match &&
            this.props.match.params &&
            this.props.match.params.id
        ) {
            let id = this.props.match.params.id;
            let res = await axios.get(`https://reqres.in/api/users/${id}`);
            console.log("res ", res);

            this.setState({
                user: res && res.data && res.data.data ? res.data.data : {},
            });
        }
    }

    // ma thuật của redirect này nằm ở withRouter
    // các đường link này luôn là đường link gốc
    handleBackButton = () => {
        this.props.history.push("/user");
    };

    render() {
        let { user } = this.state;
        let isEmptyObj = Object.keys(user).length === 0;

        return (
            <>
                <div>
                    hello world from detail user with id:{" "}
                    {this.props.match.params.id}
                </div>
                {/* check xem id này có trả về object nào ko, nếu ko thì isEmptyObj là true */}
                {isEmptyObj === false && (
                    <>
                        <div>
                            User's name: {user.first_name} - {user.last_name}
                        </div>
                        <div>User's email: {user.email}</div>
                        <div>
                            <img src={user.avatar} />
                        </div>
                        <div>
                            <button
                                type="button"
                                onClick={() => this.handleBackButton()}
                            >
                                Back
                            </button>
                        </div>
                    </>
                )}
            </>
        );
    }
}

export default withRouter(DetailUser);
