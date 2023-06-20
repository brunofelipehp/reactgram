import './Navbar.css'

//Components
import { BsHouseDoorFill, BsSearch } from "react-icons/bs"
import { Link, NavLink } from "react-router-dom"

export const Navbar = () => {
  return (
   <nav id="nav">
    <Link to="/">ReactBram</Link>
    <form>
      <BsSearch />
      <input type="text" />
      </form>
      <ul>
        <NavLink to="/">
          <BsHouseDoorFill />
        </NavLink>
        <NavLink to="/login">
          Entrar
        </NavLink>
        <NavLink to="/register">Cadastrar</NavLink>
      </ul>
   </nav>
  )
}
