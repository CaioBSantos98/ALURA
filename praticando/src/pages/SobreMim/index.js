import styles from "./SobreMim.module.css";

import PostModelo from "components/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png"
import fotoSobreMim from "assets/minha_foto.jpg";

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou o Caio!
            </h3>

            <img 
                src={fotoSobreMim}
                alt="Foto do Caio Belchior"
                className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>
                TestePOSPAKDPOKASPODKASPODK
            </p>
            <p className={styles.paragrafo}>
                POSPAKDPOKASPODKASPODK
            </p>
            <p className={styles.paragrafo}>
                POSPAKDPOKASPODKASPODK
            </p>
            <p className={styles.paragrafo}>
                POSPAKDPOKASPODKASPODK
            </p>
            <p className={styles.paragrafo}>
                POSPAKDPOKASPODKASPODK
            </p>
        </PostModelo>
    )
}