import { BotaoPadraoStyled } from "./styled";

interface BotaoPadraoProps {
    children?: any
    onClick?: () => void
}

const BotaoPadrao = ({children, onClick}: BotaoPadraoProps) => {
    return (
        <BotaoPadraoStyled onClick={onClick}>
            {children}
        </BotaoPadraoStyled>
    )
}

export default BotaoPadrao;