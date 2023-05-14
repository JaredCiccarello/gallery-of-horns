import React from "react";
import Card from 'react-bootstrap/Card';
import './HornedBeast.css';

class HornedBeast extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        likes: 0
      }
    }

    handleLikes = () => {
      this.setState({
        likes: this.state.likes + 1
      });
    }
    
  render() {
    return (
      <>
      <Card className="card"
        onClick={() => {
          this.handleLikes();
          this.props.addHearts();
          this.props.handleShowModal(this.props.beast);
        }}
        >
        <Card.Img 
        src={this.props.imageURL} 
        alt={this.props.title} 
        title={this.props.title} 
        />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text><span role="img" aria-label="blackHeart">🖤</span>{this.state.likes}</Card.Text>
          <Card.Text>{this.props.alt}</Card.Text>
          <Card.Text>{this.props.text}</Card.Text>
          <Card.Text>{this.props.horns} horns! A dangerous foe...or a brave ally?</Card.Text>
          {/* <button className="btn btn-primary" onClick={this.handleClicks}>Pierce the Veil</button> */}
        </Card.Body>
        </Card>
        </>



      //     <h5 className="card-title">{this.props.title}</h5>
      //     <p className="card-text">{this.props.description}</p>
      //     <p><span role="img" aria-label="blackHeart">🖤</span> Favorite <span role="img" aria-label="blackHeart">🖤</span>: {this.state.clicks}</p>
      //     <button className="btn btn-primary" onClick={this.handleClicks}>Pierce the Veil</button>
      //   />
      // </Card>
      // </div>
    );
  }
}

export default HornedBeast;




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