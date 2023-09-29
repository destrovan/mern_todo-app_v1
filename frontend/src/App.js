import { useEffect, useState } from "react";
import ToDo from "./components/ToDo";
import { addTodo, getAllTodo, updateTodo, deleteToDo} from "./Utilities/HandleApi";


function App() {

  const [toDO, setToDo] = useState([])
  const [text, setText] = useState("")
  const [isUPdating, setisUpdating] = useState(false)
  const [toDoId, setToDoId] = useState("")
  

  useEffect(() => {
    getAllTodo(setToDo)
  }, [])

  const updateMode = (_id, text) => {
    setisUpdating(true)
    setText(text)
    setToDoId(_id)
  }




  return (
    <div className="App">
<div className="container">

<h1> ToDo App </h1>
<div className="top">
  <input 
  type="text" 
  placeholder="AddToDo..."
  value={text}
  onChange={(e) => setText(e.target.value) }
  />

<div className="add" 
  onClick={isUPdating ? () => updateTodo(toDoId, text, setToDo, setText, setisUpdating) 
  : () => addTodo(text, setText, setToDo)}> 
{isUPdating? "Update" : "Add"}
  </div>
</div>

<div className="list"></div>
{toDO.map((item) => 
<ToDo 
  key={item._id}
  text={item.text} 
  updateMode={() => updateMode(item._id, item.text)}
  deleteToDo={() => deleteToDo(item._id, setToDo)}
  /> )}

</div>


    </div>
  );
}

export default App;
