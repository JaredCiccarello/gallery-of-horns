import React from "react";
import HornedBeast from './HornedBeast';
import data from './data.json';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';

class Main extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      allBeast: data,
      filteredBeast: data,
    }
  }

  filter = (event) => {
    let numHorns = parseInt(event.target.value);
    let everyBeast = this.state.allBeast;
    if (numHorns) {
      everyBeast = this.state.allBeast.filter(beast => beast.horns === numHorns);
    }
    this.setState({filteredBeast: everyBeast})
  }

  render() {

    let hornedOne = this.state.filteredBeast.map((horn, idx) => {

      return (<Col key={idx} className="mt-4">
        
        <HornedBeast
          imageURL={horn.image_url}
          title={horn.title}
          alt={horn.alt}
          description={horn.description}
          key={horn.keyword}
          horns={horn.horns}
          addHearts={this.props.addHearts}
          handleShowModal={this.props.handleShowModal}
          beast={horn}
          />
          </Col>)
      });

    return (
      <main>
        <Form>
          <Form.Group>
            <Form.Label>Horned Picker</Form.Label>
              <Form.Control as="select" onChange={this.filter}>
                <option value="">All</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="100">100</option>
              </Form.Control>
          </Form.Group>
        </Form>
        <Row xs={1} sm={2} md={3} lg={4}>
        {hornedOne}
        </Row>
      </main>
    );
  }
}

export default Main;