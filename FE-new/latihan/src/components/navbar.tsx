import { useState } from "react";

const Headers = () => {
  const [searchQuery, setSearchQuery] = useState("");
  // const navigate = useNavigate();
  
  // const handleSearch = (e: any) => {
  //   e.preventDefault();
  //   console.log("Searching for:", search);
  //   navigate(`/search/${search}`);
  // };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            MI Store
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false">
                  Dropdown link
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/category/Handphone">
                      Handphone
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/category/Powerbank">
                      Power Bank
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/cart">
                  cart
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="btn btn-outline-success" type="submit">
                <p>
                  <a
                    className="link-offset-2 link-underline link-underline-opacity-0"
                    href={`/search/${searchQuery}`}>
                    Search
                  </a>
                </p>
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Headers;
