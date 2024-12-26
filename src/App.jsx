import PostList from './components/PostList';
import MainHeader from './components/MainHeader';
import { useState } from 'react';


function App() {
  const [modelIsVisible, setModelIsVisible] = useState(false);

  function showModalHandler() {
    setModelIsVisible(true);
  }

  function hideModalHandler() {
    setModelIsVisible(false);
  }

  return (
    <>
      <MainHeader onCreatePost={showModalHandler}></MainHeader>
      <main>
        <PostList isPosting={modelIsVisible} onStopPosting={hideModalHandler} />
      </main>
    </>
  )
}

export default App
