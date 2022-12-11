import { useState } from "react";
import Title from "./components/Title";
import Button from "./components/Button";
function App() {
  const [isOpened, setOpen] = useState(false);
  const toggleComponent = () => {
    setOpen((prevState) => !prevState);
  };
  return (
    <div className="container">
      <Button onClick={toggleComponent}>
        {isOpened ? "Close Title" : "Open Title"}
      </Button>
      {isOpened && <Title name="Products" type="bold" />}
    </div>
  );
}

export default App;
