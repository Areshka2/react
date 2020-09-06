import renderReactDOM from '../render'

const state = {
  profilePage: {
    posts: [
      { id: 1, message: 'Hi, how are you?', likeCount: 5, dislikeCount: 1 },
      { id: 2, message: 'I am fine.', likeCount: 4, dislikeCount: 2 },
      { id: 3, message: 'i am fine too', likeCount: 7, dislikeCount: 2 },
      { id: 4, message: 'Yo', likeCount: 3, dislikeCount: 1 },
    ],
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
  },

  sidebar: {
    friends: [
      { id: 1, name: 'Andrew' },
      { id: 2, name: 'Oleh' },
      { id: 4, name: 'Sveta' },
    ],
  }

}

export let addPost = (postMessage) => {
  let newPost = {
    id: 5,
    message: postMessage,
    likeCount: 0,
    dislikeCount: 0
  };

  state.profilePage.posts.push(newPost);
  renderReactDOM(state);
}

export default state;