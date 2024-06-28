import { Outlet } from "react-router-dom";
import NavMenu from "../../components/NavMenu";
import { PaginaPadraoStyled } from "./styled";

const PaginaPadrao = () => {
    return (
        <PaginaPadraoStyled>
            <NavMenu />
            <div className="bodyContainer">
                <Outlet />
            </div>
        </PaginaPadraoStyled>
    )
}

export default PaginaPadrao;