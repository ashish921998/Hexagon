
import './App.css';
import Bookatable from "./Components/Bookatable/Bookatable"
import { DetailPage } from "./Components/Resturant_detail_page/DetailPage";
function App() {
  return (
    <div className="App">
      
       <Bookatable/>
       <DetailPage />
      </div>
  );
}

export default App;
