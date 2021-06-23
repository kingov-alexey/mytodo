
import React from "react";
import TodoList from "./TodoList/TodoList";

const Content = (props) => {
    return (
        <div>
                <input type="text" name="name" />
                <input type="submit" value="send" />
            <TodoList />
        </div>
    )
}

export default Content;