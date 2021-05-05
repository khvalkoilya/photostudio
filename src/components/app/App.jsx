import React, { useState } from 'react';
import Context from '../context/Context';
import Header from '../header/Header';
import Main from '../main/Main';

const App = () => {
  const [page, setPage] = useState('home');
  const [isAuth, setIsAuth] = useState(false);
  const [role, setRole] = useState(null);
  return (
    <>
      <Context.Provider value={{
        page,
        setPage,
        isAuth,
        setIsAuth,
        role,
        setRole,
      }}
      >
        <Header isAuth={isAuth} />
        <Main />
      </Context.Provider>
    </>
  );
};

export default App;

// class App extends React.Component {

//   state = {
//     count: this.props.initialCount || 0,
//   }

//   static getDerivedStateFromProps(props, state) {
//     const { initialCount } = props;
//     if (initialCount) {
//       return {
//         ...state,
//         count: initialCount,
//       };
//     }
//   }

//   handleOnClick = () => {
//     this.setState((state) => ({ count: state.count + 1 }));
//     // console.log(this.getDelivedStateFromProps(this.props, this.state));
//   }

//   render() {
//     return (
//       <div>
//         { this.state.count }
//         <button onClick={this.handleOnClick} type="button">lol</button>
//       </div>
//     );
//   }
// }

// export default App;
