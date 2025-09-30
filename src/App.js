import Checkout from "./Checkout";
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import Layout from "./Component/Layout";
import Home from "./Home";

function App() {
  return (
    <div >
      <BrowserRouter>
     <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="/payment" element= {<Checkout/>}/>
      </Route>
     </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
