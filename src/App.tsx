import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import FirstPage from "./pages/first-page";
import SecondPage from "./pages/second-page";

const App : React.ElementType = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<FirstPage />} />
          <Route path="/second-page" element={<SecondPage />} />
        </Routes>
      </BrowserRouter>
    </>
  ); 
}

export default App
