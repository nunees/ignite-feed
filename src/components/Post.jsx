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
          Publicado 1h atras
        </time>
      </header>
      <div className={styles.content}>
        <p>
          <p>Fala galeraa 👋 Acabei de subir mais um projeto no meu portifa. É um</p>
          <p>projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto</p>
          <p>é DoctorCare 🚀 </p>
          <p>👉 <a href="#">jane.design/doctorcare</a></p>
          <p><a href="#">#novoprojeto #nlw #rocketseat</a></p>
        </p>
      </div>
    </article>
  );
}
