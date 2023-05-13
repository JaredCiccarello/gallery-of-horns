import React from 'react';
import { Modal, Button, Card } from 'react-bootstrap';


class SelectedBeast extends React.Component {

    render() {

        return (
            // Show is currently set to a boolean
            // handleClose is being triggered here and happening in the parent App.js
            <Modal show={this.props.show} onHide={this.props.handleCloseModal}>
                <Modal.Dialog>
                    <Modal.Header>
                        This is a Modal
                    </Modal.Header>
                    <Modal.Body>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    This is the title
                                </Card.Title>
                            </Card.Body>
                            <Card.Text>
                                This is the description
                            </Card.Text>
                        </Card>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.props.handleCloseModal}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </Modal>
        );
    }
}

export default SelectedBeast