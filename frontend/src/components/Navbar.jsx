import './Navbar.css'

//Components
import { BsHouseDoorFill, BsSearch } from "react-icons/bs"
import { Link, NavLink } from "react-router-dom"

export const Navbar = () => {
  return (
   <nav id="nav">
    <Link to="/">ReactGram</Link>
    <form id='search-form'>
      <BsSearch />
      <input type="text" placeholder='Pesquisar'/>
      </form>
      <ul id='nav-links'>
        <li>
        <NavLink to="/">
          <BsHouseDoorFill />
        </NavLink>
        </li>
        <li>
        <NavLink to="/login">
          Entrar
        </NavLink>
        </li>
        <li>
        <NavLink to="/register">Cadastrar</NavLink>
        </li>
      </ul>
   </nav>
  )
}
