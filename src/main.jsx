import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import { Provider } from "react-redux";
// import { Store } from "./Store/store.js";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <BrowserRouter>
    {/* <Provider store={Store}> */}
      <App />
    {/* </Provider> */}
  </BrowserRouter>
  // </StrictMode>,
);
