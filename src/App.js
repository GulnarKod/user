import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Nav from './components/Nav/Nav.jsx';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import { Routes, Route } from "react-router-dom"

const App = (props) => {
  return (
    
      <div className='app-wrapper'>
        <Header />
        <Nav />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path="/profile" element={ <Profile profilePage={props.state.profilePage} 
                                                      addPosts={props.addPosts}
                                                      updateNewPostText={props.updateNewPostText}/>} />
            <Route exact path="/messages" element={<Dialogs dialogsPage={props.state.dialogsPage}/>} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    
  )
}
export default App;

