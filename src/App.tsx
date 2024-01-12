import { JSX } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./app.scss";
import Header from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";

/* const Description = `Plan A helps companies monitor, reduce, and offset their carbon footprint,
  based on the data they input about their emissions. Though this gives individual companies visibility
  on their own emissions, it doesn't give us a clear idea on our progress on a country level. This task
  addresses the other side of the problem; using satellite data to estimate the amount of GHG emissions
  in the atmosphere over time to measure our actual impact.`;
 */
const App = (): JSX.Element => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" />
          </Routes>
          <h1>
            <a href="https://plana.earth/" target="_blank">
              There is no Plan B
            </a>
          </h1>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
