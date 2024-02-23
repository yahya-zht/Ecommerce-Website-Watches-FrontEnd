import "./App.css";
import SearchProvider from "./context/Search";
import ShoppingCartProvider from "./context/ShoppingCart";
import Routers from "./routes/Routers";

function App() {
  return (
    <>
      <ShoppingCartProvider>
        <SearchProvider>
          <Routers />
        </SearchProvider>
      </ShoppingCartProvider>
    </>
  );
}

export default App;
