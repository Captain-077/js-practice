import Item from "./item";

function List(props) {

    const {todos,handlemarkdone,handleMarkEdit} = props;
    return (
        <ul>
            {
                todos.map((hello) => {
                    const {id,text,status,editing} =  hello;
                    return (
                        <Item id={id} text={text} status = {status} handlemarkdone ={handlemarkdone} handleMarkEdit={handleMarkEdit} editing = {editing} />
                    )
                })
            }
        </ul>
    )
}

export default List;