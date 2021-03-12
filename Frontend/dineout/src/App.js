import "./App.css";
import Bookatablenew from "./Components/Bookatable/Bookatablenew";
import { DetailPage } from "./Components/Resturant_detail_page/DetailPage";
import Landing from "./Components/Landing";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
        <Navbar />
        <Landing />
        <Footer />
        <Bookatablenew />
        {/* <DetailPage /> */}
    </div>
  );
}

export default App;
