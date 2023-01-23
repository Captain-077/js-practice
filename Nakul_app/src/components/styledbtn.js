import { FaAngellist } from "react-icons/fa";



function Styledbtn (props){
const {type, label} = props;

return(
<div>

<button className={type}>{label}<FaAngellist/></button>

</div>

)

}

export default Styledbtn