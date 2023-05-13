import React from 'react';
import HornedBeastAnimal from './HornedBeast';
import Row from 'react-bootstrap/Row';

class Main extends React.Component {
  constructor (props) {
    super (props)
  }


  render() {


  // We want each animal to be given a component in my HornedBeast array
  // Each item in the array will be called beasts
  // map acts as an array, pushing data through beasts, idx
  let HornedBeast =  this.props.data.map((beasts, idx) => {

      // key idx holds place
      // Col md={4} key={idx}>


    // We need return here because: the instance of 'HornedBeast' cannot return a value until we give it the command return
      return ( <HornedBeastAnimal 
        image_url={beasts.image_url}
        title={beasts.title}
        description={beasts.description}
        // We add a key for the _id in data.json
        key={idx}
        addHearts={this.props.addHearts}
        handleOpen={this.props.handleOpenModal}
      />);
  });



    return (
      // we sent 'data' array using props into main
      <main>
        <Row xs={1} sm={2} md={3} lg={6}>{HornedBeast}</Row>
      </main>
    );
  }
}
export default Main;