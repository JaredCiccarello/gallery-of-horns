// App.js is a class so we capitalize the file name

import React from 'react'
// We use ./ in order for the file to read properly. If the file was stored in another folder you would write ./folder/filename
import Header from './Header.js'
import Footer from './Footer.js'
import Main from './Main.js'
// We don't need to declare a variable. We don't have to use this anywhere so it automatically applies.
import './App.css'

class App extends React.Component{
  render(){
      return (
        // <> is called a frag or fractional element. We have to have this because react will only export jsx that is wrapped in one element.
          <>
          <Header/>
          <Main/>
          <Footer/>
          </>
      )
  }
};

export default App;











// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
