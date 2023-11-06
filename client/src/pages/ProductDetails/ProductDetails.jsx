import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import axios from "axios";
import { Navigate, useParams } from "react-router-dom";
import "./productDetails.css";

const ProductDetails = () => {
  const params = useParams();
  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);

  //detalles iniciales
  useEffect(() => {
    if (params?.slug) getProduct();
  }, [params?.slug]);

  //obtener productos
  const getProduct = async () => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/get-product/${params.slug}`
      );
      setProduct(data?.product);
      getRelatedProducts(data?.product?._id, data?.product?.category?._id);
    } catch (error) {}
  };

  //obtener productos relacionados
  const getRelatedProducts = async (pid, cid) => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/related-products/${pid}/${cid}`
      );
      setRelatedProducts(data?.products);
    } catch (error) {}
  };

  return (
    <Layout>
      <div className="row container mt-2">
        <div className="col-md-4">
          <img
            src={`/api/v1/product/product-photo/${product._id}`}
            className="card-img-top"
            alt={product.name}
            height="300"
            width={"350px"}
          />
        </div>
        <div className="col-md-6">
          <h1 className="text-center">Detalles</h1>
          <h4> {product.name}</h4>
          <h5>${product.price}</h5>
          <h6>{product.description}</h6>
          <h6>Categoría: {product.category?.name}</h6>
          <button className="btn btn-primary">Agregar al carrito</button>
        </div>
      </div>
      <hr />
      <div className="row container">
        <h4 className="m-2">También te podría gustar</h4>
        {relatedProducts?.length < 1 && (<p className="m-2">No hay más productos relacionados</p>)}
        <div className="d-flex flex-row flex-wrap justify-content-start">
          {relatedProducts?.map((p) => (
            <div
              key={p._id}
              className="card m-2"
              style={{ width: "18rem", minHeight: "350px" }}
            >
              <img
                src={`/api/v1/product/product-photo/${p._id}`}
                className="card-img-top"
                alt={p.name}
              />
              <div className="card-body d-flex flex-column justify-content-between">
                <h5 className="card-title">{p.name}</h5>
                <button className="btn btn-primary ms-1">
                  Agregar al carrito
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetails;
