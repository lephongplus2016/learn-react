import React from "react";
import AddComponent from "./AddComponent";
import ChildComponent from "./ChildComponent";

class Bai15_split_component extends React.Component {
    state = {
        arrJobs: [
            { id: "abcJob1", title: "Developers", salary: "500" },
            { id: "abcJob2", title: "Testers", salary: "400" },
            { id: "abcJob3", title: "Project managers", salary: "1000" },
        ],
    };
    render() {
        return (
            <>
                <AddComponent />
                <ChildComponent arrJobs={this.state.arrJobs} />
            </>
        );
    }
}
export default Bai15_split_component;
