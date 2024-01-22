import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Navbar
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Features
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Pricing
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" aria-disabled="true">
                    Disabled
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <section id="home" className="banner">
        <div className="container">
          <div className="row">
            <div className="col-md-6  ">
              <h1>
                We Make
                <br />
                Your H<span>o</span>me <br />
                Better
              </h1>
              <p>
                We are tending to the thousands of details it takes
                <br />
                to create a custom home tailored to your lifestyle.
              </p>
              <button>to order &rarr;</button>
            </div>
            <div className="col-md-6 ">
              <img src="./img/hero.png" class="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
