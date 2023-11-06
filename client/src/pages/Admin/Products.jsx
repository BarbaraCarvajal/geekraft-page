import React, { useState, useEffect } from "react";
import AdminMenu from "../../components/AdminMenu/AdminMenu";
import axios from "axios";
import toast from "react-hot-toast";
import Layout from "../../components/Layout/Layout";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);

  //obtener todos los productos
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get("/api/v1/product/get-product");
      setProducts(data.products);
    } catch (error) {
      console.log(error);
      toast.error("Error al obtener los productos");
    }
  };

  //Ciclo de vida
  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <Layout title={"Productos"}>
    <div className="row">
      <div className="col-md-3">
        <AdminMenu />
      </div>
      <div className="col-md-9">
        <h1 className="text-center">Productos</h1>
        <div className="row"> {/* Agrega una fila para las tarjetas */}
          {products?.map((producto) => (
            <div className="col-lg-3 col-md-4 col-sm-6 mb-3"> {/* Define el ancho de la columna para cada tarjeta */}
              <Link
                key={producto._id}
                to={`/dashboard/admin/product/${producto.slug}`}
                className="product-link"
              >
                <div className="card">
                  <img
                    src={`/api/v1/product/product-photo/${producto._id}`}
                    className="card-img-top img-fluid"
                    alt={producto.name}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{producto.name}</h5>
                    <p className="card-text">{producto.description}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  </Layout>
  );
};

export default Products;
