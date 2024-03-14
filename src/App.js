import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import AnaSayfa from "./pages/AnaSayfa";
import Liste from "./pages/Liste";
import Icerik from "./pages/Icerik";
import Layout from "./layout/Layout";
import Table from "./pages/Table";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Layout />}>
                        <Route path="anasayfa" element={<AnaSayfa />}/>
                        <Route path="table" element={<Table />}/>
                        <Route path="icerik" element={<Icerik />}/>
                        <Route path='liste' element={<Liste />}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;