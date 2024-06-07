import styled from "styled-components";
import Imagem from "../Galeria/Imagem";

const Overlay = styled.div`
    background-color: rgba(0, 0, 0, 0.7);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
`

const DialogEstilizado = styled.dialog`
    position: absolute;
    top: 294px;
    width: 80%;
    max-width: 1156px;
    max-height: 740px;
    padding: 0;
    background: transparent;
    border: none;
`

const BotaoFecharModal = styled.button `
    position: absolute;
    right: 12px;
    top: 24px;
    background: transparent;
    background-image: url("../../../public/icones/fechar.png");
    background-repeat: no-repeat;
    background-size: 70%;
    border: none;
    width: 32px;
    height: 32px;
    cursor: pointer;
`

const ModalZoom = ({ foto, aoFechar }) => {
    return (
        <>
            {foto && <>
                <Overlay />
                <DialogEstilizado open={!!foto} onClose={aoFechar}>
                    <Imagem foto={foto} expandida={true}/>
                    <form method="dialog">
                        <BotaoFecharModal type="submit"></BotaoFecharModal>
                    </form>
                </DialogEstilizado>
                </>}
        </>
    )
}

export default ModalZoom;