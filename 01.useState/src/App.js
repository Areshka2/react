import React, { useState } from 'react';
import './App.scss';
import Form from './components/Form/Form';
import FormInfo from './components/Form/FormInfo';

// class App2 extends React.Component {
//   constructor() {
//     super();
//     this.state = { counter: 1 }
//   }

//   handleSetCounter() {
//     this.setState({
//       ...this.state,
//       counter: this.state.counter + 1
//     })
//   }

//   render() {
//     const { counter } = this.state;
//     return (
//       <>
//         <h1>Hello</h1>
//         <p>{counter}</p>
//         <button type="button" onClick={this.handleSetCounter.bind(this)}>Count +1</button>
//         <Child />
//       </>
//     );
//   }
// }

// const Child = (props) => {
//   console.log(props)
//   return (
//     <>
//       <p>{props.name + " " + props.surname}</p>
//     </>
//   )
// }
const user = {
  name: 'Vasya'
}

const App = () => {
  // const [counter, setcounter] = useState(0);
  // const handleSetCounter = () => setcounter(counter + 1)

  // const [isOpenWindow, setOpenWindow] = useState(false);
  // const handleOpenWindow = () => setOpenWindow(!isOpenWindow)

  const [user, setUser] = useState({ name: "vasya" })
  const handleSetUser = (field, value) => {
    setUser({
      [field]: value
    })
  }

  return (
    <>
      <Form user={user} handleSetUser={handleSetUser} />
      <FormInfo user={user} />
    </>
    // <>
    //   <h1>Hello</h1>
    //   {isOpenWindow && <p>{counter}</p>}
    //   <button type="button" onClick={handleSetCounter}>Count +1</button>
    //   <button type="button" onClick={handleOpenWindow}>{isOpenWindow ? 'Open' : 'Close'}</button>
    //   <Child {...user} />
    // </>
  );
}

export default App;
