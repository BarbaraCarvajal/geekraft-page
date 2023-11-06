import React from "react";
import Layout from "../../components/Layout/Layout";
import policy from "../../assets/politica-de-privacidad.jpg";


const Policy = () => {
  return (
    <Layout title={"Politica de provacidad"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
        <img src={policy} alt="Geekraft Logo" className="contacto" />

        </div>
        <div className="col-md-4">
          <p>add privacy policy</p>
          <p>add privacy policy</p>
          <p>add privacy policy</p>
          <p>add privacy policy</p>
          <p>add privacy policy</p>
          <p>add privacy policy</p>
          <p>add privacy policy</p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;