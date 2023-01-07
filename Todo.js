import React from "react";
import { useState }  from 'react'




const TodoList = ()=>{
    const [activity, setActivity] =  useState("");
    const [listData, setListData] =   useState([]);

    const addActivity = ()=>{
        //it work Asynchronous
        // setListData([...listData, activity])
        // console.log(listData)

        // for Working Synchronous or fast do this way
        setListData((listData)=>{
            const updatedList = [...listData,activity]
            console.log(updatedList)
            setActivity('')/// for empty filed empty
            return updatedList
        })
    }
    return(
        <>
        <div clasName="container">
            <div className="header">TODO LIST</div>

            <input  type="text" placeholder="Add Activity"  value={activity} onChange={(e)=> setActivity(e.target.value)}/>
            <button  onClick={addActivity}>ADD</button>
            <p className="List-heading">Here is your List</p>
            {listData!=[]  && listData.map((data, i)=>{
                return(
                    <>

                  <p key={i} >
                    <div className="listData">{data}</div>
                  </p>
                    </>
                )
            })}

        </div>
        </>
    )
}
export default TodoList