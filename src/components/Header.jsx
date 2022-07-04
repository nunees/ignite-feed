import styles from "./Header.module.css"

function Header(){
    return(
        <header className={styles.header}>
            <strong >Ignite Feed</strong>
        </header>
    );
}

export {Header};