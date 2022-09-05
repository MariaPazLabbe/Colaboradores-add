import 'bootstrap/dist/css/bootstrap.min.css';
import Colaboradores from "./components/Colaboradores";
import NavbarHeader from "./components/Navbar-Header/Navbar";


function Card() {
  return (
    <div>
      <NavbarHeader/>
      <Colaboradores/>
    </div>
  );
}

export default Card;