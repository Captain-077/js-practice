export function TodoItemComponent(props) {

    const { text, id, status, onMarkDone, onDelete } = props;


    function renderButtons() {

        if (status == 'active') {
            return (
                <>
                    <button id={`${id}-edit`} >Edit</button>
                    <button id={`${id}-done`} onClick={onMarkDone}>Done</button>
                </>
            )
        }
        else {
            return null;
        }

    }

    function handleDelete(event) {

        const id = event.target.id.split('-')[0]
        onDelete(id)

    }

    return (
        <li>
            <p>{text}</p>
            <div>
                {renderButtons()}
                <button id={`${id}-delete`} onClick={handleDelete}>Delete</button>
            </div>
        </li>
    )
}