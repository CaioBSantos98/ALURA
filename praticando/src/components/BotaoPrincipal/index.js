import styles from "./BotaoPrincipal.module.css";

export default function BotaoPrincipal({ children, tamanho }) {
    return (
        <button className={`${styles.botaoPrincipal} ${tamanho ?styles.lg : ''}`}>
            {children}
        </button>
    )
}