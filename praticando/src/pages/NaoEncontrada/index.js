import BotaoPrincipal from "components/BotaoPrincipal";
import styles from "./NaoEncontrada.module.css";
import fotoCao from "../../assets/erro_404.png";
import { useNavigate } from "react-router-dom";

export default function NaoEncontrada() {

    const navigate = useNavigate();

    return (
        <>
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h2>404</h2>
                <h3>Ops! Página não encontrada.</h3>
                <p>Tem certeza de que era isso que você estava procurando? </p>
                <p>Aguarde uns instantes e recarregue a página, ou volte para a página inicial.</p>
            </div>
            <div className={styles.itensContainer}>
                <div onClick={() => navigate(-1)}>
                    <BotaoPrincipal tamanho>
                        Voltar
                    </BotaoPrincipal>
                </div>
                <img src={fotoCao} alt="Foto de cachorro vestido como ser humano" />
            </div>
        </div>
        <div className={styles.whiteContainer}>

        </div>
        </>
    )
}