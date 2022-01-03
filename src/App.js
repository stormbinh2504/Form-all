import logo from "./logo.svg";
import "./App.css";
import Form from "./components/Form";
import ValidateForm from "./components/formnormal/ValidateForm";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      {/* <Form></Form> */}
      <ValidateForm></ValidateForm>

      <ToastContainer />
    </div>
  );
}

export default App;
