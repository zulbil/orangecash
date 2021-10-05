import React, { useEffect, useState, useRef } from 'react'
import { Button, Modal } from 'react-bootstrap';
import PropTypes from 'prop-types'


const CustomModal = ({ display, message }) => {

    const btnEl             =   useRef(null) 
    const [show, setShow]   =   useState(false) 

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const triggerClick = () => {
        if(display) {
            btnEl.current.click()
        }
    }

    useEffect(() => {
        triggerClick()
    }, [display])

  return (
    <>
        <Button ref={btnEl} className="d-none" variant="primary" onClick={handleShow}>
            Launch demo modal
        </Button>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>{message}</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    </>
  );
}

Modal.propTypes = {
    display: PropTypes.bool,
    message: PropTypes.string
}

export default CustomModal
