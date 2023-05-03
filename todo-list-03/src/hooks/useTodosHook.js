import { useState } from "react";


const todoListArray = [
    {id: '001', text: 'Todo item one 107', status:'active'},
    {id: '002', text: 'Todo item Two', status:'active'},
    {id: '003', text: 'Todo item Three', status:'active'}

  ]

export function useTodosHook(){
const[list, updateList] = useState(todoListArray)


function markDone(event){
const id = event.target.id.split('-')[0]
const index = list.findIndex((item) => item.id === id); //Doubt: why not work with id directy
// console.log('index',index);
const cloneList = [...list];
cloneList[index] = {...cloneList[index], status:'done'}
updateList(cloneList);
}

function addItem(text){
// console.log('text',text);
const todo =  {
id: ''+Date.now(),
text,
status:'active'
}
const cloneList = [todo,...list];
updateList(cloneList)

}

function deleteItem(id){
const cloneList = list.filter((item) => item.id !== id); //doubt
// console.log('ID',id)

updateList(cloneList);

}

function updateText(id,updatedText){
  const index = list.findIndex((item) => item.id === id); //Doubt: why not work with id directy
  // console.log('index',index);
  const cloneList = [...list];
  cloneList[index] = {...cloneList[index],text:updatedText}
  updateList(cloneList);
}

return{ 
    list,
    markDone,
    addItem,
    deleteItem,
    updateText
}


}