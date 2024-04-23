// reference YouTube video: https://youtu.be/SqcY0GlETPk?si=y1FKap_zdPvmRytS

import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";

function App() {
  let items = [
    "New York",
    "Los Angeles",
    "Philadelphia",
    "Chicago",
    "Tokyo",
    "Berlin",
    "Paris",
    "London",
  ];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div className="container-xl my-5">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar w/ text
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
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
            </ul>
          </div>
        </div>
      </nav>{" "}
      <div className="row">
        <div className="col">
          <Alert>Hey you got a warning going on here!</Alert>
          <ListGroup
            items={items}
            title="Da Cities Here"
            onSelectItem={handleSelectItem}
          />
        </div>
        <div className="col">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores
          consequuntur porro ea in debitis similique nihil blanditiis culpa! Sit
          a sed voluptas veniam nam, eveniet officia delectus. Molestiae, velit
          sunt!
          <br />
          <button type="button" className="btn btn-outline-primary">
            Primary
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
