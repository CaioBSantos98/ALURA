import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import BarraNavegacao from './components/BarraNavegacao';
import Footer from './components/Footer';
import Cart from './pages/Cart';
import { CarrinhoProvider } from './context/CarrinhoContext';


function AppRoutes() {
  return (
    <BrowserRouter>
      <CarrinhoProvider>
        <BarraNavegacao />
        <Routes>
          <Route path='/'>
            <Route index element={<Home />} />
            <Route path='carrinho' element={<Cart />} />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </CarrinhoProvider>
      <Footer />
    </BrowserRouter>
  )
}

export default AppRoutes
