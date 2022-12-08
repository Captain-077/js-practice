import logo from './logo.svg';
import './App.css';

function App() {
    return ( <

        <
        LoginButton / >
        <
        /div>
    )
}

function LoginButton() {
    return ( <
        div class = "container" >
        <
        label
        for = "uname" > < b > Username < /b></label >
        <
        input type = "text"
        placeholder = "Enter Username"
        name = "uname"
        required >

        <
        label
        for = "psw" > < b > Password < /b></label >
        <
        input type = "password"
        placeholder = "Enter Password"
        name = "psw"
        required >

        <
        button type = "submit" > Login < /button> <
        label >
        <
        input type = "checkbox"
        checked = "checked"
        name = "remember" > Remember me <
        /label> < /
        div >


    )
}




export default App;