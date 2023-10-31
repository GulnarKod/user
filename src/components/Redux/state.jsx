let store={
_state: {
    profilePage:{
       posts:[
        {id:1, message:'Hi, how are you', likesCount:12},
        {id:2, message:'Its myfirst post', likesCount:3},
        {id:3, message:'where are you live', likesCount:15},
        {id:4, message:'whats your name', likesCount:8}
       ],
       newPostText:"It course"
    },
    dialogsPage:{
    dialogsData:[
            {id:1, name:"Ivan" },
            {id:2, name:"Aleksander" },
            {id:3, name:"Valera" },
            {id:4, name:"Mariya" }
        ],
    dialogsMessages: [
          {id:1, message:"Hi"},
          {id:2, message:"How are you"},
           {id:3, message:"When we will meeting"},
           {id:4, message:"dsasdasd"}
      
      ]
    },
    sideBar:
      [{id:1, name:"Nikolay"},
       {id:2, name:"Sergey"},
       {id:3, name:"Ekterina"}
      ]
},
_callSubscriber(){
  console.log('state was changed');
},
getState(){
  debugger;
  return this._state
},

addPosts(){
  debugger;
  let newPost={
    id:5,
    message:this._state.profilePage.newPostText,
    likesCount:2
  };
  this._state.profilePage.posts.push(newPost);
  this._state.profilePage.newPostText='';
  this._callSubscriber(this._state);
},
updateNewPostText(newText){
  this._state.profilePage.newPostText=newText;
  this._callSubscriber(this._state);
},
subscribe(observer){
 this._callSubscriber= observer;
},
dispatch(action){
if(action.type==='ADD-POSTS'){
  let newPost={
    id:5,
    message:this._state.profilePage.newPostText,
    likesCount:2
  };
  this._state.profilePage.posts.push(newPost);
  this._state.profilePage.newPostText='';
  this._callSubscriber(this._state);
} else {
if(action.type==='UPDATE-NEW-POST-TEXT'){
  this._state.profilePage.newPostText=action.newText;
  this._callSubscriber(this._state);
}
}
},
}
export default store;