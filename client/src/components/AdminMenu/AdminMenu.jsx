import React from "react";
import { NavLink } from "react-router-dom";
import "./AdminMenu.css";

const AdminMenu = () => {
  return (
    <>
      <div className="text-center">
        <ul className="list-group">
          <h1>Panel de Administrador</h1>
          <NavLink
            to="/dashboard/admin/create-category"
            className="list-group-item purple-link"
            aria-current="true"
          >
            Categorías
          </NavLink>
          <NavLink
            to="/dashboard/admin/create-product"
            className="list-group-item purple-link"
          >
            Crear Producto
          </NavLink>
          <NavLink
            to="/dashboard/admin/products"
            className="list-group-item purple-link"
          >
            Productos
          </NavLink>
          <NavLink
            to="/dashboard/admin/users"
            className="list-group-item purple-link"
          >
            Usuarios
          </NavLink>
        </ul>
      </div>
    </>
  );
};

export default AdminMenu;
