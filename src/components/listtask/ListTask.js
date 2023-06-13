import React from 'react'
import "./ListTask.css"
import {  reset } from "../../store/item";

import { useDispatch } from "react-redux";

function ListTask() {
    
        
        const dispatch = useDispatch();
        
  return (
    <div classename="listtask">
<div className='container'>
    <div className="center">
          <button type="button" class="btn" 
          onClick={() => dispatch( reset())}>Show All Tasks</button>
          </div>
        </div>
        </div>
        
        
  )
}

export default ListTask