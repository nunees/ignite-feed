import {Header} from "./components/Header"
import {Post} from "./components/Post";

import styles from "./App.module.css";
import "./global.css";
import { Sidebar } from "./components/Sidebar";

const posts = [
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


function App() {

  return (
    <>
    <Header />
    <div className={styles.wrapper}>
      <Sidebar />
      <main>
        {posts.map(post => {
          return (
          <Post 
          author={post.author} 
          content={post.content} 
          publishedAt={post.published_at}/>
          )
        })}
      </main>
    </div>
   </>
  )
}

export default App
