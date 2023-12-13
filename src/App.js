import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./layouts/header";
import NavLayout from "./layouts/nav";
import Footer from "./layouts/footer";
import AppRouter from "./routes";
import { useSelector, useDispatch } from "react-redux";
import { fetchRingThunk } from "./redux/actionThunk";
import { useEffect } from "react";
import earringApi from "./api/earringApi";
import ringApi from "./api/ringApi";
import necklaceApi from "./api/necklaceApi";
import braceletApi from "./api/braceletApi";
import axios from "axios";

function App() {
  // const rings = useSelector((state) => state.ring.ringList);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchRingThunk());
  // }, []);
  useEffect(() => {
    const fetchEarring = async () => {
      const earringList = await earringApi.getAll();
      console.log(earringList);
    };
    const fetchRing = async () => {
      const ringList = await ringApi.getAll();
      console.log(ringList);
    };
    const fetchNecklace = async () => {
      const necklaceList = await necklaceApi.getAll();
      console.log(necklaceList);
    };
    const fetchBracelet = async () => {
      const braceletList = await braceletApi.getAll();
      console.log(braceletList);
    };
    fetchRing();
    fetchEarring();
    fetchNecklace();
    fetchBracelet();
  }, []);
  async function getUser() {
    try {
      let data = await axios.get(" http://localhost:3000/products_ring");
      console.log("hello");
      console.log(data.data);
    } catch {
      console.log("Error");
    }
  }
  return (
    <div className="App">
      <Header />
      <NavLayout />
      <main>
        <AppRouter />
      </main>
      <Footer />
    </div>
  );
}

export default App;
