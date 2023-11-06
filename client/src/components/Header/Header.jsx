import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./navBar.css";
import Logo from "../../assets/logo.png";
import { useAuth } from "../../context/auth";
import toast from "react-hot-toast";
import SearchInput from "../Form/SearchInput";
import useCategory from "../../hooks/useCategory";

const Header = () => {
  //Inicialización de hook para el contexto de autenticación
  const [auth, setAuth] = useAuth();
  const categories = useCategory();

  //Función para cerrar sesión
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Sesión cerrada con éxito");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-purple">
        <div className="container-fluid">
          <button
            className="nav-link navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link to={"/"} className="navbar-brand">
              <img src={Logo} alt="Geekraft Logo" className="logo" />
              Geekraft
            </Link>

            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <SearchInput />
              <li className="nav-item">
                <NavLink to={"/"} className="nav-link">
                  Home
                </NavLink>
              </li>

              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to={"/categories"}
                  data-bs-toggle="dropdown"
                >
                  Categories
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to={"/categories"}>
                      Todas las categorías
                    </Link>
                  </li>
                  {categories?.map((c) => (
                    <li>
                      <Link
                        className="dropdown-item"
                        to={`/category/${c.slug}`}
                      >
                        {c.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>

              {!auth?.user ? (
                <>
                  <li className="nav-item">
                    <NavLink to="/register" className="nav-link">
                      Registrarse
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/login" className="nav-link">
                      Iniciar Sesión
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li className="dropdown">
                    <NavLink
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {auth?.user?.name}
                    </NavLink>
                    <ul className="dropdown-menu">
                      <li>
                        <NavLink
                          to={`/dashboard/${
                            auth?.user?.role === 1 ? "admin" : "user"
                          }`}
                          className="dropdown-item"
                        >
                          Panel de control
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          onClick={handleLogout}
                          to="/login"
                          className="dropdown-item"
                        >
                          Cerrar Sesión
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item"></li>
                </>
              )}
              {/* Carrito */}
              <li className="nav-item">
                <NavLink to={"/cart"} className="nav-link" href="#">
                  Carrito (0)
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
