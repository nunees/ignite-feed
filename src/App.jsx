import {Header} from "./components/Header"
import {Post, posts} from "./components/Post";

import styles from "./App.module.css";
import "./global.css";
import { Sidebar } from "./components/Sidebar";


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
