import "./App.css";
import { useState } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import Header from "./Components/Header";
import Index from "./Pages/Index";
// import AlarmIcon from '@material-ui/icons/';
function App() {
  const [state, setState] = useState({
    open: false,
    vertical: "top",
    horizontal: "center",
    message: "",
  });
  const { vertical, horizontal, open, message } = state;

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  return (
    <div>
      <Header />
      <Index />
      {/* snackbar */}
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        message={message}
        key={vertical + horizontal}
      />
    </div>
  );
}

export default App;
