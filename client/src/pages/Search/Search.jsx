import Layout from "../../components/Layout/Layout";
import React from 'react'
import { useSearch } from "../../context/search";
import { Navigate } from "react-router-dom";

const Search = () => {
  const [values, setValues] = useSearch();


  return (
    <Layout title={"Resultados de la busqueda"}>
      <div className="container">
        <div className="text-center">
          <h1>Resultados de la busqueda</h1>
          <h6>{values?.results.length < 1 
            ? 'Producto no encontrado'
            : `Se han encontrado: ${values?.results.length} productos`}
          </h6>
          <div className="d-flex flex-wrap mt-4">
            {values?.results.map((p) => (
              <div className="card m-2" key={p._id}>
                <img
                  src={`/api/v1/product/product-photo/${p._id}`}
                  className="card-img-top"
                  alt={p.name}
                />
                <div className="card-body">
                  <div className="card-name-price">
                    <h5 className="card-title">{p.name}</h5>
                    <h5 className="card-title card-price">
                      {p.price.toLocaleString("es-CL", {
                        style: "currency",
                        currency: "CLP",
                      })}
                    </h5>
                  </div>
                  <p className="card-text ">
                    {p.description.substring(0, 60)}...
                  </p>
                  <div className="card-name-price">
                    <button
                      className="btn btn-primary ms-1"
                      onClick={() => Navigate(`/product/${p.slug}`)}
                    >
                      Más detalles
                    </button>
                    <button className="btn btn-primary ms-1">
                      Agregar al carrito
                    </button>
                    {/*                     <button
                      className="btn btn-dark ms-1"
                      onClick={() => {
                        setCart([...cart, p]);
                        localStorage.setItem(
                          "cart",
                          JSON.stringify([...cart, p])
                        );
                        toast.success("Item Added to cart");
                      }}
                    >
                      ADD TO CART
                    </button> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Search