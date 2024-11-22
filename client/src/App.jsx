import Navbar from "./Components/Navbar";
import Routing from "./Layout/Routing";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Navbar />
      <ToastContainer position="top-right" autoClose={5000} />
      <Routing />
    </>
  );
}

export default App;