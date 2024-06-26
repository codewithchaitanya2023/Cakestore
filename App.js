import "./App.css";
import { Provider } from "react-redux";
import cakestore from "./reduxContainer/Cakestore";
import Cakecontainer from "./reduxContainer/Cakecontainer";

function App() {
  return (
    <div className="App">
      <Provider store={cakestore}>
        <div className="App">
          <Cakecontainer />
        </div>
      </Provider>
    </div>
  );
}

export default App;
