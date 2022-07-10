import React from "react";
import './ListItems.css';


function ListItems(props)
{
    return (
        <>
            <ul >
                {
                    
                    props.todo.map(function (todoo) {
                        {/* console.log(todoo) */}
                        return (
                            <>
                            <div className="listliItems">
                                <li style={ {textDecoration: todoo.isComplete ? "line-through" : ""} } key={todoo.id}>{todoo.title}</li>
                                <div className="allButtons">
                                    <button className="completeBtn" onClick={()=> props.completeTask(todoo.id)}><i className="fa-solid fa-circle-check fa-xl"></i></button>

                                    <button className="deleteBtn" onClick={()=> props.deleteTask(todoo.id)}><i className="fa-solid fa-trash fa-xl"></i> </button>
                                    
                                </div>
                            </div>
                            <hr/>
                            </>
                        )
                    })
                }
            </ul>

        </>
    )
}

export default ListItems;