import Styledbtn from './styledbtn';

function ListItemComponent(props) {
    const { imgURL,heading, description } = props;
    return (
      <li className='listInner'>
        <a href="/" tabIndex="-1">
          <section className='listimg'> <img src={imgURL} /></section>
          <h1 className='listheading'>{heading}</h1>
          <p className='listtext'>{description}</p>
          <Styledbtn type= "danger" label = "red"/>
          <Styledbtn type= "primary" label = "blue"/>
          <Styledbtn type= "normal" label = "white"/>
        </a> 
      </li>
    )
  }
  
  export default ListItemComponent