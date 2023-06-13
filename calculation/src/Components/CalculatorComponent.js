import { useState } from "react";

const actions = [
    { text: '1', type: 'number' },
    { text: '2', type: 'number' },
    { text: '3', type: 'number' },
    { text: '+', type: 'symbol' },
    { text: '4', type: 'number' },
    { text: '5', type: 'number' },
    { text: '6', type: 'number' },
    { text: '-', type: 'symbol' },
    { text: '7', type: 'number' },
    { text: '8', type: 'number' },
    { text: '9', type: 'symbol' },
    { text: '*', type: 'symbol' },
    { text: '/', type: 'number' },
    { text: '0', type: 'symbol' },
    { text: '=', type: 'symbol' }

]


function CalculatorComponent() {
    const [result, setResult] = useState('');

    function handleClick(event) {
        const { id } = event.target;
        const [text, type] = id.split('-');
        if (type === 'number') {
            console.log(text);
            setResult(result+text);
        }
    }

    return (
        <div>
            <div>
                <span></span>
            </div>

            <div>
                {
                    actions.map(item => {
                        const { text, type } = item;
                        return (
                            <button id={`${text}-${type}`} key={text} onClick={handleClick}>{text}</button>
                        )
                    })
                }
            </div>

        </div>

    )

}

export default CalculatorComponent;