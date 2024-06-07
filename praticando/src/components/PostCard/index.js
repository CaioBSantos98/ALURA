import { Link } from "react-router-dom";
import styles from "./PostCard.module.css";
import BotaoPrincipal from "components/BotaoPrincipal";

export default function PostCard({ post }) {

    const rolarParaCima = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    return (
        <div className={styles.post}>
            <img 
                className={styles.capa}
                src={`/assets/posts/${post.id}/capa.png`}
                alt="Imagem de capa do post"
            />

            <h2 className={styles.titulo}>
                {post.titulo}
            </h2>
            
            <Link to={`/posts/${post.id}`} onClick={rolarParaCima}>
                <BotaoPrincipal>
                    Ler
                </BotaoPrincipal>
            </Link>
            

        </div>
    )
}