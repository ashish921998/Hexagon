
import './App.css';
import Bookatablenew from "./Components/Bookatable/Bookatablenew"
import { Footer } from './Components/Footer/Footer';
import { DetailPage } from "./Components/Resturant_detail_page/DetailPage";
function App() {
  return (
    <div className="App">
      
       <Bookatablenew/>
       <Footer/>
       {/* <DetailPage /> */}
      </div>
  );
}

export default App;
