import { Link } from "react-router-dom";

const Links = () => {
  return (
    <section className="navigation">
      <span className="navigation-links">
        <Link to="/">
          <img src="../../../public/logo512.png" alt="" className="Proprica-Logo" />
        </Link>
      </span>
      <span className="navigation-links">
        <Link to="/production" style={{ textDecoration: "none", color: "#f5f4f3" }}>
          Home
        </Link>
      </span>
      <span className="navigation-links">
        <Link to="/users/product" style={{ textDecoration: "none", color: "#f5f4f3" }}>
          Product
        </Link>
      </span>
      <span className="navigation-links">
        <Link to="/about" style={{ textDecoration: "none", color: "#f5f4f3" }}>
          About
        </Link>
      </span>
    </section>
  )
}

export default Links