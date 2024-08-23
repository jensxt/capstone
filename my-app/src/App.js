import Footer from "./components/Footer"
import Main from './components/Main'
import Nav from './components/Nav'
import Header from "./components/Header";
import './App.css';
import { Route, Routes } from "react-router-dom";
import ConfirmedBooking from "./components/ConfirmedBooking";


function App() {
  return (
   <>
   <Nav />
   <Header />
    <main>
      <Routes>
        <Route path="/booking" element={<Main/>}/>
        <Route path="/confirmed" element={<ConfirmedBooking/>}/>
    </Routes>
   </main>
   <Footer />
   </>
  );
}

export default App;
