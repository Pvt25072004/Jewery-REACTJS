import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/homepage";
import RingList from "../pages/ProductList/RingList";
import Collect from "../pages/Collect/collect";
import EarringList from "../pages/ProductList/earringList";
import BraceletList from "../pages/ProductList/braceletList";
import AccessoryList from "../pages/ProductList/accessoryList";
import NecklaceList from "../pages/ProductList/necklaceList";
import Whatnew from "../pages/ProductList/whatnew";
import Tip from "../pages/Tip/tip";
import Event from "../pages/Event/event";
import Conduct from "../pages/Conduct/conduct";
import Policy from "../pages/Policy/policy";
import Transport from "../pages/Transport/transport";
import About from "../pages/About/about";
import Guarantee from "../pages/Guarantee/guarantee";
import Register from "../pages/Register/register";
import Login from "../pages/Login/login";
import Contact from "../pages/Contact/contact";
import Instagram from "../pages/Instagram/instagram";
import NotFound from "../pages/notFound";
import Product from "../pages/ProductList/product";
import Shop from "../layouts/Shop";
import DesCollection from "../pages/ProductList/desCollection";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/trang-suc" element={<Shop />} />
      <Route path="/what-new" element={<Whatnew />}>
        <Route path="/what-new/su-tap" element={<DesCollection />} />
      </Route>
      <Route path="/nhan-bac" element={<RingList />} />
      <Route path="/bong-tai-bac" element={<EarringList />} />
      <Route path="/lac-bac" element={<BraceletList />} />
      <Route path="/day-chuyen-bac" element={<NecklaceList />} />
      <Route path="/phu-kien-roi" element={<AccessoryList />} />
      <Route path="/instagram" element={<Instagram />} />
      <Route path="/bo-suu-tap" element={<Collect />} />
      <Route path="/meo-nho" element={<Tip />} />
      <Route path="/su-kien" element={<Event />} />
      <Route path="/huong-dan-do-size" element={<Conduct />} />
      <Route path="/bao-hanh-bao-quan" element={<Guarantee />} />
      <Route path="/giao-hang-doi-hang" element={<Transport />} />
      <Route path="/ve-chung-toi" element={<About />} />
      <Route path="/chinh-sach" element={<Policy />} />
      <Route path="/lien-he" element={<Contact />} />
      <Route path="/dang-ky" element={<Register />} />
      <Route path="/dang-nhap" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
