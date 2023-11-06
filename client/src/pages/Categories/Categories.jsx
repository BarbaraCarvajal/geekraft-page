import useCategory from "../../hooks/useCategory";
import Layout from "../../components/Layout/Layout";
import { Link } from "react-router-dom";

const Categories = () => {
  const categories = useCategory();

  return (
    <Layout title={"Todas las categorías"}>
      <h1>Todas las categorías</h1>
      <div className="container">
        <div className="row">
          {categories.map((c) => (
            <div className="col-md-6">
              <button>
                <Link to="/">{c.name}</Link>
              </button>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Categories;
