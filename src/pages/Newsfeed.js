import React, { useContext, useState } from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Myform from '../components/myForm/Myform';
import Nav from '../components/nav/Nav';
import RightNav from '../components/nav/RightNav';
import FormPost from '../components/formPost/FormPost';

import VideoContext from '../context/VideoContext';

const App = () => {
  const { data, addVideos, deleteVideos } = useContext(VideoContext);
  const [newVideo, setNewVideo] = useState({});

  const setVideo = e => {
    const { name, value } = e.target;
    console.log('form data', name, value);
    setNewVideo({ ...newVideo, [name]: value });
  };

  //addPost
  const addVideo = e => {
    //prevent Default
    e.preventDefault();
    console.log('new video', newVideo);
    addVideos(newVideo);
    e.target.reset();
  };

  const deleteVideo = i => {
    //
    console.log('Delete Post', i);
    deleteVideos(i);
  };

  //edit Video
  const editVideo = i => {
    //edit post
    console.log('Edit Post', i);
  };

  let items = data.map((video, i) => {
    return (
      // <p key={i}>{i} this is a really long string to see</p>
      <FormPost
        key={i}
        value={video}
        deleteVideo={() => deleteVideo(i)}
        editVideo={() => editVideo(i)}
      />
    );
  });

  return (
    <div style={styles.container}>
      <Header />
      <Nav />
      <main style={styles.main}>
        {/* <MyBtn /> */}
        <Myform addVideo={addVideo} setVideo={setVideo} />
        {items}
      </main>
      {/* {newAdd} */}
      <RightNav />
      <Footer footerText="copyright &copy; 2020 by john" />
    </div>
  );
};
//create state for binding

export default App;

const styles = {
  main: {
    border: '5px solid #fff',
    justifyContent: 'space-between',
    backgroundGround: '#ccc',
    marginLeft: '10rem',
    marginRight: '20rem',
  },
};
