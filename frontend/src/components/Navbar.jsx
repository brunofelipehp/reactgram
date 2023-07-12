import "./Navbar.css";

//Routes
import { Link, NavLink, useNavigate } from "react-router-dom";

//Components
import {
  BsFillCameraFill,
  BsFillPersonFill,
  BsHouseDoorFill,
  BsSearch,
} from "react-icons/bs";

//Hooks
import { useDispatch, useSelector } from "react-redux";
import { useAuth } from "../hooks/useAuth";

//Redux
import { logout, reset } from "../slices/authSlice";
import { useState } from "react";

export const Navbar = () => {
  const [query, setQuery] = useState("")
  const { auth } = useAuth();
  const { user } = useSelector((state) => state.auth);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    dispatch(reset());

    navigate("/login");
  };

  const handleSearch = (e) => {
    e.preventDefault()

    if(query) {
      return navigate(`/search?q=${query}`)
    }
  }

  return (
    <nav id="nav">
      <Link to="/">ReactGram</Link>
      <form id="search-form" onSubmit={handleSearch}>
        <BsSearch />
        <input type="text" placeholder="Pesquisar" onChange={(e) => setQuery(e.target.value)} />
      </form>
      <ul id="nav-links">
        {auth ? (
          <>
            <li>
              <NavLink to="/">
                <BsHouseDoorFill />
              </NavLink>
            </li>
            {user && (
              <li>
                <NavLink to={`/users/${user._id}`}>
                  <BsFillCameraFill />
                </NavLink>
              </li>
            )}

            <li>
              <NavLink to="/profile">
                <BsFillPersonFill />
              </NavLink>
            </li>

            <li>
              <span onClick={handleLogout}>Sair</span>
            </li>
          </>
        ) : (
          <>
            <li>
              <NavLink to="/login">Entrar</NavLink>
            </li>
            <li>
              <NavLink to="/register">Cadastrar</NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};
