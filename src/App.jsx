import "./App.css";
import Navbar from "./Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";

function App() {
  // by taking a look into window.location, we can find the current pathname:
  // console.log(window.location);

  // Alternatively get only the name of the current path:
  // console.log(window.location.pathname);

  // We can just take this pathname and use a simple switch state over it
  let component;
  switch (window.location.pathname) {
    case "/":
      component = <Home />;
      break;
    case "/pricing":
      component = <Pricing />;
      break;
    case "/about":
      component = <About />;
      break;
  }
  return (
    <>
      <Navbar />
      <div className="container">{component}</div>
    </>
  );
}

export default App;
