// reference YouTube video: https://youtu.be/SqcY0GlETPk?si=y1FKap_zdPvmRytS

import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";

// onClick={() => console.log("Clicked")}

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

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

  const submitForm = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const payload = Object.fromEntries(formData);

    console.log(payload);
    console.log("shit happened");
  };

  return (
    <div className="container-xl my-5">
      <div className="row">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src="https://res.cloudinary.com/dpeqsj31d/image/upload/v1707263738/avatar_4_4.png"
              alt="Logo"
              width="50"
              height="50"
              className="d-inline-block align-text-top"
            />
            Navbar
          </a>
          <ul className="nav justify-content-end">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Active Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link 1
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link 2
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col">
          {alertVisible && (
            <Alert onClose={() => setAlertVisibility(false)}>
              Hey you got a warning going on here!
            </Alert>
          )}
          <ListGroup
            items={items}
            title="Da Cities Here"
            onSelectItem={handleSelectItem}
          />
          <br />
          <form onSubmit={submitForm}>
            <div className="mb-3">
              <label className="form-label">Your Name:</label>
              <input
                type="text"
                className="form-control"
                id="formGroupExampleInput"
                placeholder="Enter your name here"
                name="yourname"
              />
            </div>
          </form>
        </div>
        <div className="col">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores
          consequuntur porro ea in debitis similique nihil blanditiis culpa! Sit
          a sed voluptas veniam nam, eveniet officia delectus. Molestiae, velit
          sunt!
          <br />
          <Button color="success" onClick={() => setAlertVisibility(true)}>
            Raise the Alert!
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
