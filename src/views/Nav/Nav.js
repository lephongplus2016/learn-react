import React from "react";
import "./Nav.scss";

class Nav extends React.Component {
    render() {
        return (
            <div>
                <div className="topnav">
                    <a className="active" href="/">
                        Home
                    </a>
                    <a href="/todo">Todos</a>
                    <a href="/about">About</a>
                    <a href="/user">User</a>
                </div>
            </div>
        );
    }
}

export default Nav;
