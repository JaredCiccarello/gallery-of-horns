import React from "react";
// This file is not used anywhere and therefore is automatically applied. Similiar to app.css
import './HornedBeast.css'
// Creating a button as simple as importing the specific COMPONENT from 
// https://react-bootstrap.github.io/getting-started/introduction 
// and then implementing the code to render below
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';






class HornedBeast extends React.Component {
  // Starting with the constructor after creating a class, we can build state like this.
  constructor(props) {
    super(props);
    this.state = {
      likes: 0
    }
  }

  handleLikes = () => {
    //  increase the number of likes in the value in state
    this.setState({
      likes: this.state.likes + 1
    })
    // setState basically causes render to be invoked again
  }


  render() {
    return (
      <Col className="mt-4">
        <article className="hornedbeast h-100">
          {/* Things that look like HTML like we have here are our JSX content */}
          <h2>{this.props.title}</h2>
          {/* p tag keeps track of how many times a beast has been liked. This needs to be listed right after the title or name of the beasts. */}
          {/* this.state helps to note the particular number zero inside this.state above*/}
          <p>{this.state.likes} likes</p>
          {/* We will need this to invoke a function(handleLikes). This refers to HornedBeast. Specifically this particular instance of person. */}
          <p onClick={this.handleLikes}>Click here to like!</p>
          <img
            src={this.props.image_url}
            alt={this.props.alt}
            title={this.props.title}
          />
          {/* We implement this in here like so once we have imported the bootstrap button code. */}
          <Button variant="danger">Danger</Button>
          <button>regular HTML button</button>
          <p>{this.props.alt}</p>
        </article>
      </Col>
    )
  }
};

export default HornedBeast 