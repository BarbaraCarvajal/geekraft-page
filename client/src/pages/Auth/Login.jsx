import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import toast from 'react-hot-toast';

import Layout from "../../components/Layout/Layout";
import "./estilos-register-login.css";
import { useAuth } from "../../context/auth";

const Login = () => {
  //Inicialización de estados para el formulario de inicio de sesión
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //Inicialización de hook para redireccionar
  const navigate = useNavigate();

  //Inicialización de hook para obtener la ruta actual
  const location = useLocation();

  //Inicialización de hook para el contexto de autenticación
  const [auth, setAuth] = useAuth();

  //Función para enviar el formulario de inicio de sesión
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/v1/auth/login', {
        email,
        password,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate(location.state || "/");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Algo ha salido mal :c");
    }
  };



  return (
    <Layout title={"Iniciar Sesión"}>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <h1>Iniciar Sesión</h1>

          <div className="mb-3">
            <label htmlFor="exampleInputMail" className="form-label">
              Correo electrónico
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="mail"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="geekraft@mail.com"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Contraseña
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="contraseña123"
              required
            />
          </div>
          <div className="mb-3">
          <button type="submit" className="btn btn-primary">
            Iniciar Sesión
          </button>
          <br /><br />
          <button type="button" className="btn btn-secondary" onClick= {()=> {navigate('/forgot-password')}}>
            ¿Olvidaste tu contraseña?
          </button>
          </div>
          
        </form>
      </div>
    </Layout>
  );
};

export default Login;
