import React from "react";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import './App.css';
import data from './data.json';
import SelectedBeast from './SelectedBeast.js'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hearts: '',
      isModalDisplaying: false,
      beastName: 'test',
      SelectedBeast: {}
    }
  }
  addHearts = () => {
    this.setState({
      hearts: this.state.hearts + <span role="img" aria-label="blackHeart">'🖤'</span>
    });
  }
  handleShowModal = (SelectedBeast) => {
    // SetState will only work inside the component that it is in
    // if in App.js we call setState, that will change the state of App only
    // this.setState is the way we change values in state
    this.setState({
      isModalDisplaying: true,
      SelectedBeast: SelectedBeast
    });
    console.log('modal was clicked');

  }

  handleCloseModal = () => {
    this.setState({
      isModalDisplaying: false
    })
  }

  render() {
    return (
      <>
        <Header
          hearts={this.state.hearts}
        />
        <Main
        // addHearts, data and handleShowModal can ONLY be accessed inside Main using this.props (ex: this.props.handleShowModal)
          addHearts={this.addHearts}
          data={data}
          handleShowModal={this.handleShowModal}
        />
        <Footer />
        <SelectedBeast
          show={this.state.isModalDisplaying}
          onHide={this.handleCloseModal}
          SelectedBeast={this.state.SelectedBeast}
        />
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
