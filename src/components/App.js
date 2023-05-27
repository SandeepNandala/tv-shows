import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ShowDetail from "./ShowDetail";
import Shows from "./Shows";

const App = () => {
  return (
      <Router>
        <Routes>
        <Route exact path="/" element={<Shows/>} />
        <Route path="/tv-shows/details/:id" element={<ShowDetail/>} />
        </Routes>
      </Router>
   
  );
};

export default App;
