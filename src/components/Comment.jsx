import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";

export function Comment(){
    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/28915121?v=4" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Felipe Nunes</strong>
                            <time title="11 de maio as 11:13" dateTime="2022-05-11 08:13:00">Cerca de 1 hora atras</time>
                        </div>

                        <button title="Deletar comentario">
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>Muito bom Devon!!!</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}