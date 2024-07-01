import './App.css';
import Header from './Components/Header/Header';
import Dashboard from './Components/Dashboard/Dashboard';
import TicketBook from './Components/TicketBook/TicketBook';
import BookSeat from './Components/BookSeat/BookSeat';
import { Route, Routes } from 'react-router-dom';
import './responsive.css'
import ShowTickets from './Components/ShowTickets/ShowTickets';
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path="/TicketBook/:postId" element={<TicketBook />} />
        <Route path='/BookSeat/:postName' element={<BookSeat />} />
        <Route path='/showTickets' element={<ShowTickets />} />

      </Routes>


    </>
  );
}

export default App;
