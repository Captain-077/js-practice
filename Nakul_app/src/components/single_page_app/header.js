import App from "../../App"
import { Home_screen, About_screen } from "./constants";

function Header(props) {

  const { title, onscreenchange } = props;

  function handleClick(event) {
    const id = event.target.id;
    onscreenchange(id);
  
  }
  return (
    <div>
      <header className="head">
        <section className="logo">Website</section>
        <section> <h3> {title} </h3></section>
        <section>
          <nav>
            <ul className="menu">
              <li><a id = {Home_screen} onClick= {handleClick} href="#">Home</a></li>
              
              <li><a id = {About_screen} onClick= {handleClick} href="#">About Us</a></li>
            </ul>
          </nav>
        </section>
      </header>
    </div>


  )

}
export default Header;