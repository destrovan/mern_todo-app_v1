import axios from 'axios'

const baseUrl = "http://localhost:5000"
const getAllTodo = (setToDo) => {
    axios
    .get(baseUrl)
    .then(({data}) => {
        console.log('data ---> , data');
        setToDo(data)
    })
}

const addTodo = (text, setText, setToDo)=>{
    axios
    .post(`${baseUrl}/save`, {text})
    .then((data) => {
        console.log(data)
        setText("")
        getAllTodo(setToDo)
    })
    .catch((err) => console.log(err))
}


const updateTodo = (toDoId, text, setToDo, setText, setisUpdating)=>{
    axios
    .post(`${baseUrl}/update`, {_id:toDoId, text})
    .then((data) => {
        setText("")
        setisUpdating(false)
        console.log(data)
        setText("")
        getAllTodo(setToDo)
    })
    .catch((err) => console.log(err))
}

const deleteToDo = (_id, setToDo) => {
    axios
    .post(`${baseUrl}/delete`, {_id})
    .then(({data}) => {
        console.log(data)
        getAllTodo(setToDo)
    })
    .catch((err) => console.log(err))
}


export{getAllTodo, addTodo, updateTodo, deleteToDo}