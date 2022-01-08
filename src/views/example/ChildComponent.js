import React from "react";

// khác với class, function component thì phải có parameter truyền vào
const ChildComponent = (props)=>{
    let { arrJobs } = props;
    let aList;
            return (
            <>
                <div className="job-lists">
                    {
                        (aList = arrJobs.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    {item.title} - {item.salary}
                                </div>
                            );
                        }))
                    }
                    {console.log("hàm map trả về cho ta cái gì", aList)}
                </div>
            </>
        );
}

export default ChildComponent;
