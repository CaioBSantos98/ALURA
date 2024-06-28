import { SetterOrUpdater } from "recoil";
import { ModalInternoStyled, ModalPadraoStyled } from "./styled";
import CloseIcon from '@mui/icons-material/Close';

interface Props {
    children: any,
    setModal: SetterOrUpdater<boolean>
}

const ModalPadrao = ({ children, setModal }: Props) => {
    return (
        <ModalPadraoStyled>
            <ModalInternoStyled>
                {children}
                <CloseIcon sx={{ cursor: "pointer" }} onClick={() => setModal(false)}/>
            </ModalInternoStyled>
        </ModalPadraoStyled>
    )
}

export default ModalPadrao;