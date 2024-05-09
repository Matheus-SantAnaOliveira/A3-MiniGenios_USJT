import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Questoes from './Pages/Questoes';
import Diciplinas from './Pages/Dicipinas';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/questoes" element={<Questoes />} />
        <Route path="/diciplinas" element={<Diciplinas />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
