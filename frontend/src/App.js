import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Utility/Header";
import HomePage from "./Page/HomePage";
import Footer from "./Components/Utility/Footer";
import DocPage from "./Page/DocPage";
import ClientPage from "./Page/ClientPage";
import RegisterPage from "./Page/Auth/RegisterPage";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route index element={<HomePage/>}/>
          <Route path='/doc' element={<DocPage/>}/>
          <Route path='/client' element={<ClientPage/>}/>
          <Route path='/register' element={<RegisterPage/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
