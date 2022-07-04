import {Header} from "./components/Header"
import {Post} from "./components/Post";

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
        <Post
          author="Felipe"
          content="primeiro post" 
        />
        <Post
          author="Felipe"
          content="primeiro segundo" 
        />
      </main>
    </div>
   </>
  )
}

export default App
