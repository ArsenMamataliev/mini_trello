import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import SignUp from './Pages/SignUp';
import Dashboard from './Pages/Dashboard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<SignUp/>} />
          <Route path="dashboard" element={<Dashboard /> } />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
