import React from "react";


class ChildComponent extends React.Component {
    state = {
        showJob: false
    }

    handleShow = () => {
        this.setState({
            showJob : !this.state.showJob 
        })
    }

    handleDelele = (job) => {
        // console.log("delete: >> ",job);
        this.props.deleteJob(job);
    }

    // chú ý: bản chất là dùng câu điều kiện if - {viết js trong jsx}
    //<> và </> để bao vô hình bao khối div lại thành 1 khối html để chạy điều kiện if showJob
    // react cho phép viết tắt if như vậy
    // gọn hơn nữa dùng tam đoạn luận
    render() {
        let { arrJobs } = this.props;
        let aList;
        let showJob = this.state.showJob;
        let check = showJob === true ? 'showJob === true' : 'showJob=== false';
        return (
            <>
                { showJob === false ? 
                        <div><button onClick={()=> { this.handleShow()}}>show</button></div>
                    :
                        <>
                            <div className="job-lists">
                            {
                                (aList = arrJobs.map((item, index) => {
                                        return (
                                            <div key={item.id}>
                                                {item.title} - {item.salary} $ &nbsp; &nbsp; 
                                                <span  
                                                onClick={()=>{ 
                                                    var result = window.confirm("Want to delete?");
                                                    if (result) {
                                                        this.handleDelele(item)} 
                                                    }
                                                }>
                                                x</span>
                                            </div>
                                        );
                                }))
                            }
                            </div>
                            <div><button  onClick={()=> { this.handleShow()}}>hide</button></div>
                        </>
                }

            </>
        );
    }
}

export default ChildComponent;
