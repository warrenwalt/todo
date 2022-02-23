import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import List from "./List";
import { nanoid } from "nanoid";
// import Confetti from "react-confetti/dist/types/Confetti";

export default function ToDoList({toDoList, deleteItem}){

    const allList = toDoList.map(list => (
        <List 
            key={nanoid()}
            list={list}
            deleteList={deleteItem}
        />
    ))

    return (
        <div>
            {allList}
        </div>
    )
}