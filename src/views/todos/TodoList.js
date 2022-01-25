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

    render(){
        let {listtodo} = this.state;
        // == voi let listtodo = this.state.listtodo;

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
                                    <span> {index + 1} - {item.title} </span>
                                    <button className="edit">Edit</button>
                                    <button className="delete">Delete</button>
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