import renderReactDOM from '../render'

const state = {
  profilePage: {
    posts: [
      { id: 1, message: 'Hi, how are you?', likeCount: 5, dislikeCount: 1 },
      { id: 2, message: 'I am fine.', likeCount: 4, dislikeCount: 2 },
      { id: 3, message: 'i am fine too', likeCount: 7, dislikeCount: 2 },
      { id: 4, message: 'Yo', likeCount: 3, dislikeCount: 1 },
    ],
    newPostText: '',
  },

  dialogsPage: {
    dialogs: [
      { id: 1, name: 'Andrew' },
      { id: 2, name: 'Oleh' },
      { id: 3, name: 'Sasha' },
      { id: 4, name: 'Sveta' },
      { id: 5, name: 'Victor' },
    ],

    messages: [
      { id: 1, message: 'Hi!!!', name: 'Sasha' },
      { id: 2, message: 'How are you?', name: 'Sasha' },
      { id: 3, message: 'I am fine.', name: 'I' },
      { id: 4, message: 'Yo', name: 'Sasha' },
      { id: 5, message: 'Yo', name: 'I' },
    ],
    newMessageText: ''
  },

  sidebar: {
    friends: [
      { id: 1, name: 'Andrew' },
      { id: 2, name: 'Oleh' },
      { id: 4, name: 'Sveta' },
    ],
  }

}

//* Add New Post
export let addPost = () => {
  if (state.profilePage.newPostText) {
    let newPost = {
      id: 5,
      message: state.profilePage.newPostText,
      likeCount: 0,
      dislikeCount: 0
    };

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    renderReactDOM(state);
  }
}

//* Change New Post
export let updatePostDate = (newText) => {
  state.profilePage.newPostText = newText;
  renderReactDOM(state);
}

export const addNewMessage = () => {
  if (state.dialogsPage.newMessageText) {
    let newMessage = {
      id: 6,
      message: state.dialogsPage.newMessageText,
      name: 'I'
    }

    state.dialogsPage.messages.push(newMessage)
    state.dialogsPage.newMessageText = '';
    renderReactDOM(state);
  }
}

export const updateMessageDate = (newText) => {
  state.dialogsPage.newMessageText = newText;
  renderReactDOM(state);
}

export default state;