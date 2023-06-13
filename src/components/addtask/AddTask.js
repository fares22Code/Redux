import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react'
import "./AddTask.css";
import { addItem } from "../../store/item"
import { useDispatch,useSelector} from "react-redux";
import { useState } from "react";



function AddTask() {
  

  

  const dispatch = useDispatch();
  const [desc, setDesc] = useState("");
  const { globalList } = useSelector((state) => state.item.items);

  return (
    <div classename="add">
    <div classNamee="container">
    <div  className="center">
    {" "}
    <h1>
          <span className="badge bg-secondary">To-Do List</span>
        </h1>
        <div className="input-group mb-3 px-5 ">
          <span className="input-group-text" id="inputGroup-sizing-default">
            Descreption
          </span>
          <input
            type="text"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            placeholder="Write your Task"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
     
          <button
            type="button"
            className="btn"
          
            onClick={() => {
              dispatch(
                addItem({ id: globalList.length + 1, desc, isdone: false })
              );
              setDesc("");
            }}
          >
            Add Task
          </button>


          </div>
    </div>
</div>

    
  )
}

export default AddTask