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

    addNewJob = (job) => {
        this.setState({
            //thêm job vào state này
            // ... toán tử copy, ,job thêm job vào đuôi của array []
            arrJobs: [...this.state.arrJobs, job]
            // arrJobs: currenJobs
        })
    }

    deleteJob = (job)=>{
        let currentJob = this.state.arrJobs;
        // lọc bỏ các item có id là job
        currentJob = currentJob.filter(item => item.id != job.id);
        this.setState({
            arrJobs:currentJob
        })
    }

    render() {
        return (
            <>
            {/* do function addNewJob có parameter job nữa, nên chỉ truyền không () */}
                <AddComponent addNewJob={this.addNewJob}/>
                <ChildComponent arrJobs={this.state.arrJobs} deleteJob={this.deleteJob} />
            </>
        );
    }
}
export default Bai15_split_component;
