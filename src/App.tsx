import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import BookingPage from "./pages/BookingPage";
import LoginPage from "./pages/LoginPage";
import SongsPage from "./pages/SongsPage";
import HistoryPage from "./pages/HistoryPage";
import ListRoomPage from "./pages/ListRoomPage";
import ReviewBookingsPage from "./pages/ReviewBookingsPage";
import RulesPage from "./pages/RulesPage";
import DevPage from "./devFolder/devPages/DevPage";
import Header from "./components/Header";
import Registration from "./pages/Registration";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/booking" element={<BookingPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/songs" element={<SongsPage/>}/>
          <Route path="/history" element={<HistoryPage/>}/>
          <Route path="/rooms" element={<ListRoomPage/>}></Route>
          <Route path="/review-bookings" element={<ReviewBookingsPage/>}/>
          <Route path="/rules" element={<RulesPage/>}/> 
          <Route path="/register" element={<Registration/>}/> 

          <Route path="/dev" element={<DevPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
