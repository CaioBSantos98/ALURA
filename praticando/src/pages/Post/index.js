import PostModelo from "components/PostModelo";
import posts from "json/posts.json";
import PaginaPadrao from "components/PaginaPadrao";
import { useParams } from "react-router-dom";
import PostCard from "components/PostCard";
import styles from "./Post.module.css";
import NaoEncontrada from "pages/NaoEncontrada";

export default function Post() {

    const parametrosURL = useParams();

    const post = posts.find(post => post.id === Number(parametrosURL.id))

    if(!post) {
        return (
            <NaoEncontrada />
        )
    }

    const postsFiltrados = posts.filter(postFilter => postFilter.id !== post.id)


    return (
        <PaginaPadrao>
            <PostModelo
            fotoCapa={`/assets/posts/${post.id}/capa.png`}
            titulo={post.titulo}
            >
                {post.texto}
            </PostModelo>
            <div className={styles.otherPostsContainer}>
                <h3>Outros posts que você pode gostar:</h3>
                <div className={styles.otherPosts}>
                    {postsFiltrados.map(post => 
                        <PostCard key={post.id} post={post} />
                    )}
                </div>
            </div>
        </PaginaPadrao>
        
    )
}