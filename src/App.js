// App.js is a class so we capitalize the file name

import React from 'react';
// We use ./ in order for the file to read properly. If the file was stored in another folder you would write ./folder/filename
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import data from "./data.json";
// We don't need to declare a variable. We don't have to use this anywhere so it automatically applies.
import './App.css'
import SelectedBeast from './SelectedBeast.js';


// We need to put beastinfo in state
// -beastinfo the data about the beast that was clicked on

// We have to have a boolean value for if the modal is displaying
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hearts: '',
      beastName: 'test',
      selectedBeast: {},
      displayModal: false
    }
  };

  addHearts = () => {
    // setState will only work inside the component that it is in
    // if in App we call setState, that will change the state of App only
    // this.setState is the way we change values in state
    this.setState({
      hearts: this.state.hearts + <span role="img" aria-label="blackHeart">'🖤'</span>,
    });
  }
  // We need to use setState because it is the top most element passing down.
  // These handles are METHODS
  // We still need a click event which invokes these methods from hornedBeast.js
  // displayModal is the STATE
  handleOpenModal = (SelectedBeast) => {
    this.setState({
      displayModal: true,
      SelectedBeast: SelectedBeast
    });
    console.log('modal was clicked');
    
  }
  handleCloseModal = () => {
    this.setState({
      displayModal: false
    })
  }

  render() {

    return (
      // <> is called a frag or fractional element. We have to have this because react will only export jsx that is wrapped in one element.
      <>
        <Header 
          hearts={this.state.Hearts}
        />
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
