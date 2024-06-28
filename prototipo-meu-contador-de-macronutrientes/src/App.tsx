import { BrowserRouter, Route, Routes } from "react-router-dom"
import PaginaPadrao from "./pages/PaginaPadrao"
import Home from "./pages/Home"
import { RecoilRoot } from "recoil"
import MinhasRefeicoes from "./pages/MinhasRefeicoes"

function AppRoutes() {

  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<PaginaPadrao />}>
            <Route index element={<Home />} />
            <Route path="refeicoes" element={<MinhasRefeicoes />} />
            <Route path="login" element={<h2>Login</h2>} />
            <Route path="*" element={<h2>Pagina não encontrada</h2>} />
          </Route>
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  )
}

export default AppRoutes;
