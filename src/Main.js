import React from 'react';
import HornedBeastCard from './HornedBeast';
import Row from 'react-bootstrap/Row';
import data from './data.json'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allHorns: data,
      filteredBeast: data,
    }
  }

  filter = (event) => {
    let numHorns = parseInt(event.target.value);
    let allBeast = this.state.allHorns;
    if (numHorns) {
      allBeast = this.state.allHorns.filter(beast => beast.horns === numHorns);
    }
    this.setState({ filteredBeast: allBeast })
  };



  render() {
    // We want each animal to be given a component in my HornedBeast array
    // Each item in the array will be called beasts
    // map acts as an array, pushing data through beasts, idx

    let HornedBeast = this.state.filteredBeast.map((beasts, idx) => {

      // key idx holds place
      // Col md={4} key={idx}>

      // We need return here because: the instance of 'HornedBeast' cannot return a value until we give it the command return
      return (<Col key={idx} className="mt-4">
      
      <HornedBeastCard
        image_url={beasts.image_url}
        title={beasts.title}
        description={beasts.description}
        // We add a key for the _id in data.json
        key={idx}
        addHearts={this.props.addHearts}
        handleOpen={this.props.handleOpenModal}
      />
      </Col>);
    });



    return (
      // we sent 'data' array using props into main
      <main>
        <Form>
          <Form.Group>
            <Form.Label>Number of Horns</Form.Label>
            <Form.Control as="select" onChange={this.filter}>
             <option value="">All</option>
             <option value="1">1</option>
             <option value="2">2</option>
             <option value="3">3</option>
             <option value="100">100</option>
             </Form.Control>
          </Form.Group>
        </Form>
        <Row xs={1} sm={2} md={3} lg={6}>{HornedBeast}
        </Row>
      </main>
    );
  }
}
export default Main;