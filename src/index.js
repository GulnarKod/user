
import './index.css';
//import reportWebVitals from './reportWebVitals';
import store from './components/Redux/state';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

 let rerenderEntireTree=()=>{
    ReactDOM.render(
       <BrowserRouter>
        <App store={store.getState()} addPost={store.addPosts} updateNewPostText={store.updateNewPostText}/>
        </BrowserRouter>, document.getElementById("root"));
};
rerenderEntireTree(store.getState());
subscribe(rerenderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
