import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./layouts/header";
import HomePage from "./pages/HomePage/homepage";
import NavLayout from "./layouts/nav";
import Footer from "./layouts/footer";
import { useSelector, useDispatch } from "react-redux";
import { fetchRingThunk } from "./redux/actionThunk";
import { useEffect } from "react";

function App() {
  const rings = useSelector((state) => state.ring.ringList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRingThunk());
  }, []);

  return (
    <div className="App">
      <Header />
      <NavLayout />
      <HomePage />
      <Footer />
    </div>
  );
}
{
  /* <main>
<AppRouter />
</main> */
}
export default App;
