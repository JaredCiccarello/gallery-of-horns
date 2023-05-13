// App.js is a class so we capitalize the file name

import React from 'react';
// We use ./ in order for the file to read properly. If the file was stored in another folder you would write ./folder/filename
import Header from './Header.js';
import Footer from './Footer.js';
import Main from './Main.js';
import data from "./data.json";
// We don't need to declare a variable. We don't have to use this anywhere so it automatically applies.
import './App.css'
import SelectedBeast from './SelectedBeast.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hearts: 0,
      beastName: 'test',
      clickedBeast: {},
      displayModal: false
      // beastName: ''
    }
  };

  addHearts = () => {
    this.setState({
      hearts: this.state.hearts + 1,
    });
  }
  // We need to use setState because it is the top most element passing down.
  handleCloseModal = () => {
    this.setState({
      displayModal: false
      // personName: Name;
    })
  }
  handleOpenModal = () => {
    this.setState({
      displayModal: true
    })
  }

  render() {

    return (
      // <> is called a frag or fractional element. We have to have this because react will only export jsx that is wrapped in one element.
      <>
        <Header />
        <Main
          addHearts={this.addHearts}
          data={data}
          handleOpenModal={this.handleOpenModal}
        />
        <SelectedBeast
          show={this.state.displayModal}
          handleCloseModal={this.handleCloseModal}
        />

          <Footer>
          &copy; 2023; Jared Ciccarello
          </Footer>
        </>
        );
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
