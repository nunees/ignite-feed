import {format, formatDistanceToNow} from "date-fns";
import ptBR from "date-fns/locale/pt-BR"
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

export const posts = [
  {
    id: 1,
    author:{
      avatarUrl: "https://avatars.githubusercontent.com/u/28915121?v=4",
      name: "Felipe Nunes",
      role: "Web developer"
    },
    content: [
      {type: "paragraph", content: "Fala galeraa 👋 Acabei de subir mais um projeto no meu portifa. É um"},
      {type: "paragraph", content:"projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
      {type: "link", content: "jane.design/doctorcare"},
    ],
    published_at: new Date('2022-07-06 20:00:00')
  },
  {
    id: 2,
    author:{
      avatarUrl: "https://avatars.githubusercontent.com/u/28915121?v=4",
      name: "Felipe Nunes",
      role: "Web developer"
    },
    content: [
      {type: "paragraph", content: "Fala galeraa 👋 Acabei de subir mais um projeto no meu portifa. É um"},
      {type: "paragraph", content:"projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
      {type: "link", content: "jane.design/doctorcare"},
    ],
    published_at: new Date('2022-07-07 19:00:00')
  },
]

export function Post({author, publishedAt, content}) {
  const publishedDateFormated = format(publishedAt, "d 'de' LLLL 'as' HH:mm'h'",{
    locale: ptBR
  })

  const publisheDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar
            src={author.avatarUrl}
          />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time title="11 de maio as 11:13" dateTime={publishedAt.toISOString()}>
         {publisheDateRelativeToNow}
        </time>
      </header>
      <div className={styles.content}>
        <p>
         {content.map(line => {
          if(line.type === "paragraph"){
            return <p>{line.content}</p>
          }else if(line.type === "link"){
            return <p><a href="#">{line.content}</a></p>
          }
         })}
        </p>
      </div>
      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe seu feedback"/>
        <footer>
        <button type="submit">Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
