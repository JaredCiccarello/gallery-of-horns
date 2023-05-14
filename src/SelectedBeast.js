import React from 'react';
import { Modal } from 'react-bootstrap';
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"


class SelectedBeast extends React.Component {

  // Renamed values will be important to remember, follow the logical flow of data
    render() {
        console.log(this.props.popUpBeast)
        return (
            // Show is currently set to a boolean
            // handleClose is being triggered here and happening in the parent App.js
            <Modal show={this.props.show} onHide={this.props.handleCloseModal}>
                <Modal.Dialog>
                    <Modal.Header>
                        <Modal.Title>
                        {this.props.title}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    This is the title
                                </Card.Title>
                            </Card.Body>
                            <Card.Text>
                              {/* THIS WAS CHANGED */}
                            <Card.Img src={this.props.popUpBeast.image_url}></Card.Img>
                            </Card.Text>
                        </Card>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.props.handleCloseModal}>
                            {/* this.state.personName. Where would we find something similar? */}
                        </Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </Modal>
        );
    }
}

export default SelectedBeast