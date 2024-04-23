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

  return (
    <div className="container-xl my-5">
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
