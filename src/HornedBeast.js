import React from "react";
// This file is not used anywhere and therefore is automatically applied. Similiar to app.css
import './HornedBeast.css'
// Creating a button as simple as importing the specific COMPONENT from 
// https://react-bootstrap.github.io/getting-started/introduction 
// and then implementing the code to render below
// import Button from 'react-bootstrap/Button';
// import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';




// hornedBeast needs access to handleModal open

// When we invoke handleModalOpen we need to send the beast information as an argument
// We will need this.props.handleModalOpen(beastifno)

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
  
  getHornedBeast = () => {
    return {
      title: this.props.title,
      imageURL: this.props.imageURL,
      alt: this.props.alt,
      description: this.props.description,
      horns: this.props.horns

    }
  }
  
//   render() {
//     return (
//       // <article className = "horned-beast" onClick={() => this.props.handleModal(this.getHornedBeast())}>
//         <h2> {this.props.title}</h2>
//         <p> {this.props.description}</p>
//         <p> This thing has {this.props.horns} horn(s)!</p>
//         <p> {this.state.likes} ♥️s:</p>
//         <Button onClick={this.handleLikes}> handlikes </Button>
//         <img 
//         src={this.props.imageURL} 
//         alt={this.alt}
//         title={this.props.title} 
//         />
//         {/* <Button> Vote for this one! </Button> */}
//       </article> 
//     );
//   }
// }

  render() {
    return (
      <>
      <Card 
      style={{width: "20rem"}}
      onClick={this.handleLikes}>
        <Card.Img src={this.props.image_url} onClick={this.props.handleOpen}/>
        <Card.Body>
          <Card.Title>
            {this.props.Title}
          </Card.Title>
        </Card.Body>
      </Card>
      </>
    )
  }
};

export default HornedBeast 




      // <Col className="mt-4">
      //   <article className="hornedbeast h-100">
      //     {/* Things that look like HTML like we have here are our JSX content */}
      //     <h2>{this.props.title}</h2>
      //     {/* p tag keeps track of how many times a beast has been liked. This needs to be listed right after the title or name of the beasts. */}
      //     {/* this.state helps to note the particular number zero inside this.state above*/}
      //     <p>{this.state.likes} likes</p>
      //     {/* We will need this to invoke a function(handleLikes). This refers to HornedBeast. Specifically this particular instance of person. */}
      //     <p onClick={this.handleLikes}>Click here to like!</p>
      //     <img
      //       src={this.props.image_url}
      //       alt={this.props.alt}
      //       title={this.props.title}
      //     />
      //     {/* We implement this in here like so once we have imported the bootstrap button code. */}
      //     <Button variant="danger">Danger</Button>
      //     <button>regular HTML button</button>
      //     <p>{this.props.alt}</p>
      //   </article>
      // </Col>