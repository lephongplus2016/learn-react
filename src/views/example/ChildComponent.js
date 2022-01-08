import React from "react";

// khác với class, function component thì phải có parameter truyền vào
// const ChildComponent = (props) => {
//     let { arrJobs } = props;
//     let aList;
//     return (
//         <>
//             <div className="job-lists">
//                 {
//                     (aList = arrJobs.map((item, index) => {
//                         if (item.salary >= 500) {
//                             return (
//                                 <div key={item.id}>
//                                     {item.title} - {item.salary} $
//                                 </div>
//                             );
//                         }
//                     }))
//                 }
//                 {console.log("hàm map trả về cho ta cái gì", aList)}
//             </div>
//         </>
//     );
// };

class ChildComponent extends React.Component {
    state = {
        showJob: false
    }

    handleShow = () => {
        this.setState({
            showJob : !this.state.showJob 
        })
    }

    // chú ý: bản chất là dùng câu điều kiện if - {viết js trong jsx}
    //<> và </> để bao vô hình bao khối div lại thành 1 khối html để chạy điều kiện if showJob
    // react cho phép viết tắt if như vậy
    render() {
        let { arrJobs } = this.props;
        let aList;
        let showJob = this.state.showJob;
        return (
            <>
                { showJob=== false && <div><button onClick={()=> { this.handleShow()}}>show</button></div>}
                { showJob === true &&
                    <>
                        <div className="job-lists">
                        {
                            (aList = arrJobs.map((item, index) => {
                                    return (
                                        <div key={item.id}>
                                            {item.title} - {item.salary} $
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
