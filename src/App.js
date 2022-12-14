import { Routes, Route } from "react-router-dom";
import { NavBar } from "./components";
import { HomePage, DetailsPage, ShopPage } from "./pages";

function App() {
  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/details/:id" element={<DetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
