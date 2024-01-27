import "./App.css";
import ShoppingCartProvider from "./context/ShoppingCart";
import Routers from "./routes/Routers";

function App() {
  return (
    <>
      <ShoppingCartProvider>
        <Routers />
      </ShoppingCartProvider>
    </>
  );
}

export default App;
