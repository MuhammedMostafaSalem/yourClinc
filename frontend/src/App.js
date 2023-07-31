import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Utility/Header";
import HomePage from "./Page/HomePage";
import Footer from "./Components/Utility/Footer";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route index element={<HomePage/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
