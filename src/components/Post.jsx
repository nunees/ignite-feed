import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://avatars.githubusercontent.com/u/28915121?v=4"
          />
          <div className={styles.authorInfo}>
            <strong>Felipe Nunes</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time title="11 de maio as 11:13" dateTime="2022-05-11 08:13:00">
          Publicado há 1h atrás
        </time>
      </header>
      <div className={styles.content}>
        <p>
          <p>Fala galeraa 👋 Acabei de subir mais um projeto no meu portifa. É um</p>
          <p>projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto</p>
          <p>é DoctorCare 🚀 </p>
          <p>👉 <a href="#">jane.design/doctorcare</a></p>
          <p>
            <a href="#">#novoprojeto</a>{' '}
            <a href="#">#nlw</a>{' '} 
            <a href="#">#rocketseat</a>{' '}
            </p>
        </p>
      </div>
      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentario"/>
        <footer>
        <button type="submit">Publicar</button>
        </footer>
      </form>
    </article>
  );
}
