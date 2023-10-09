import { NavLink, useNavigate } from "react-router-dom";
import "../App.css";
import { useCookies } from "react-cookie";

const logo = require("../images/kasulogo.webp");

function Header() {
  const [cookies, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const logout = () => {
    setCookies("access_token", "");
    window.localStorage.removeItem("userId");
    navigate("/");
  };

  return (
    <header >
      <nav className="nav">
        <div className="logo">
          <img
            className="logo-img"
            src={logo}
            alt="kasulogo"
            style={{ width: "130px", padding: "8px" }}
          />
        </div>

        <div>
          <ul className="nav-items">
            {!cookies.access_token ? (
              <>
                <li className="li-1">
                  <NavLink
                    style={{ textDecoration: "none", color: "white" }}
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>

                <li className="li-1">
                  <NavLink
                    style={{ textDecoration: "none", color: "white" }}
                    to="login"
                  >
                    Login
                  </NavLink>
                </li>

                <li className="li-1">
                  <NavLink
                    style={{ textDecoration: "none", color: "white" }}
                    to="signup"
                  >
                    SignUp
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li className="li-2">
                  <NavLink
                    style={{ textDecoration: "none", color: "white" }}
                    to="/profile"
                  >
                    Profile
                  </NavLink>
                </li>

                <li className="li-2">
                  <NavLink
                    style={{ textDecoration: "none", color: "white" }}
                    to="result"
                  >
                    Result
                  </NavLink>
                </li>

                <li className="li-2">
                  <NavLink
                    style={{ textDecoration: "none", color: "white" }}
                    to="coursereg"
                  >
                    CourseReg
                  </NavLink>
                </li>

                <li className="li-2">
                  <button
                    onClick={logout}
                    className="btn"
                    style={{ color: "white" }}
                  >
                    Log Out
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export const Footer = () => {
  return (
    <div
      style={{ backgroundColor: "green", color: "white", fontStyle: "bold" }}
    >
      <footer>
        <center>
          {" "}
          <p>@ 2023 Kaduna State University Course Registration System.</p>
        </center>
      </footer>
    </div>
  );
};

export const Navbarr = () => {
  return (
    <div>
      <Header />
    </div>
  );
};
