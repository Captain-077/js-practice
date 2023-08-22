import { useState } from "react"



const todoListArray = [
    {id:'001',text:'todo Item one',status:'active'},
    {id:'002',text:'todo Item two',status:'active'},
    {id:'003',text:'todo Item three',status:'active'}
]


export function TodoHooks() {

    const[list,updateList] = useState(todoListArray);


function addItem(text){
const todo = {
id:''+Date.now(),
text,
status:'active'
}
const cloneList = [todo,...list]
updateList(cloneList);

}

function markdone(event){
const id = event.target.id.split('-')[0];
const index = list.findIndex((item) => item.id == id);
const cloneList = [...list];
cloneList[index] = {...cloneList[index],status:'done'}
updateList(cloneList) ;
}

function deleteItem(id){
    const cloneList = list.filter((item) => item.id !== id);
    updateList(cloneList);
}

// function editItem(text){
//     const index = list.findIndex((item) => item.id == id);
//     const cloneList = [...list];
//     cloneList[index] = {...cloneList[index],text}
//     updateList(cloneList) ;
//     }



return {
    list,
    addItem,
    markdone,
    deleteItem
}
}






    

