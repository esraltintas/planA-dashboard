import { JSX } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./app.scss";
import Header from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import Home from "./pages/Home";

const App = (): JSX.Element => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" />
          </Routes>
        </div>
        <Home />
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
