import React, { useContext } from "react";
import Store from "../context";
import { TodoHeader } from "./TodoHeader";
import "./greyy.css"
export default function TodoList() {
  const { state, dispatch } = useContext(Store);

  

  let header =
    state.todos.length === 0 ? (
      <h4>Enter an item to display</h4>
    ) : (
      <TodoHeader>

      </TodoHeader>
    );
  return (
    <div className="row">
    
      <div className="col-md-12">
        <div className="row">
          <div className="col-md-12">
            <br />
            {header}
          </div>
        </div>
        <div className="row">

          <div className="col-md-12">
            <ul className="list-group">
            

              {state.todos.map(t => (
                <li key={t} className="list-group-item">
                 <span className="grey">
                  {t}
                   </span>
                  <button
                    className="float-right btn btn-danger btn-sm"
                    style={{ marginLeft: 10 }}
                    onClick={() => dispatch({ type: "COMPLETE", payload: t })}
                  >
                    X
                  </button>
                </li>
              ))}
                 
            </ul>
      
        </div>
      </div>
    </div>
       </div>
  );
}
