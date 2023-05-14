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