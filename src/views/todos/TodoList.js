import React from "react";
import AddTodo from "./AddTodo";
import './StyleTodo.scss';

import { toast } from 'react-toastify';

class TodoList extends React.Component {
    state = {
        listtodo: [
            { id: 'todo1', title: 'task 1'},
            { id: 'todo2', title: 'task 2'},
            { id: 'todo3', title: 'task 3'},
        ]
        ,
        // mục đích để lưu tạm nội dung id nào cần edit
        editTodo : {}
    }

    addNewTodo = (todo) => {
        // let currentListTodo = this.state.listTodos;
        // currentListTodo.push(todo);

        this.setState({
            listtodo: [...this.state.listtodo, todo],
            // listTodos: currentListTodo
        })
        // cách sử dụng thư viện thông báo
        toast.success("Wow so easy!")
    }

    handleDeleteTodo = (todo_to_delete) => {
        let currentTodos = this.state.listtodo;
        currentTodos = currentTodos.filter(item => item.id !== todo_to_delete.id)
        this.setState({
            listtodo: currentTodos
        })
    }

    // bây giờ button này giữ 2 nhiệm vụ, là edit: lưu item cần sửa vào state.editTodo
    // save: update object js
    handleEditTodo = (item_to_edit) => {
        // handle save
        let {editTodo, listtodo} = this.state;

        let checkEmptyObj = Object.keys(editTodo).length === 0;

        let listtodoCopy = [...listtodo];

        if (checkEmptyObj === false && editTodo.id === item_to_edit.id) {


            //Find index of specific object using findIndex method.    
            let objIndex = listtodoCopy.findIndex((item => item.id === editTodo.id));

            //Log object to Console.
            console.log("Before update: ", listtodoCopy[objIndex])

            //Update object's name property.
            listtodoCopy[objIndex].title = editTodo.title

            //Log object to console again.
            console.log("After update: ", listtodoCopy[objIndex])


            //save that nay
            this.setState({
                listtodo:listtodoCopy,
                editTodo: ''
            })
            toast.success("Update so easy!")
            // return rồi thì sẽ ko đi xuống nữa
            return;
        }

        // lấy item cần edit
        this.setState({
            editTodo: item_to_edit
        })
    }

    //nếu ko có hàm onChange này thì ko thể edit input task được -> vì value nó đã gán cứng là state.editTodo rồi
    // nên lấy giá trị event.target.value gán cho state.editTodo thì nó mới thay đổi được value hiển thị của thẻ input này
    handleOnchangeEditTodo = (event) => {
        let editTodoCopy = {...this.state.editTodo};
        editTodoCopy.title = event.target.value;
        this.setState({
            editTodo: editTodoCopy
        })
    }

    render(){
        let {listtodo, editTodo} = this.state;
        // == voi let listtodo = this.state.listtodo;
        let checkEmptyObj = Object.keys(editTodo).length === 0;
        console.log("check edit to do : ", editTodo.title);
        return (
            <>
                <h3>Simple TODO App</h3>
                {/* cấu trúc chương trình gồm 3 class cha con  */}
                <div className="list-todo-container">
                    {/* class add todo đã đc tách ra  */}
                    <AddTodo
                    // tiếp tục truyền cho con AddTodo quyền đc thêm object vào state của cha TodoList
                        addNewTodo={this.addNewTodo}
                    />

                    {/* thêm sửa xóa giống với Example */}
                    <div className="list-todo">
                    {listtodo && listtodo.length > 0 &&
                        listtodo.map((item, index) => {
                            return (
                                <div className="todo-child" key={item.id}>

                                {/* câu lệnh if để check */}
                                {   checkEmptyObj === false && editTodo.id === item.id ?
                                        <span> {index + 1} - <input value={editTodo.title} 
                                                                    onChange={(event) => this.handleOnchangeEditTodo(event) } 
                                                            ></input> 
                                        </span>
                                    : 
                                        <span> {index + 1} - {item.title} </span>
                                    
                                }

                                    <button className="edit"
                                        onClick={() => this.handleEditTodo(item)}
                                    >
                                    {   checkEmptyObj === false && editTodo.id === item.id ?    
                                        'Save'
                                        :
                                        'Edit' 
                                    }
                                    </button>
                                    <button className="delete"
                                        onClick={() => this.handleDeleteTodo(item)}
                                    >Delete</button>
                                </div>
                            )
                        })

                    }
                    </div>
                </div>
            </>
        )
    }
}

export default TodoList;