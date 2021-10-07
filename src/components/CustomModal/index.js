import React, { useEffect, useState, useRef } from 'react'
import { Button, Modal } from 'react-bootstrap';
import PropTypes from 'prop-types'
import './index.css'


const CustomModal = ({ display, message }) => {

    const btnEl             =   useRef(null) 
    const [show, setShow]   =   useState(false) 

    const handleClose   =   () => setShow(false);
    const handleShow    =   () => setShow(true);
    const restartGame   =   () => window.location.reload();
    
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

        <Modal show={show} backdrop="static" onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>
                    {(message === 'success') ? 'Vous avez gagné' : 'Vous avez perdu'}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {
                    (message === 'success') ?
                    (<p>Vous pouvez repartir avec un montant de <strong className>2000$</strong></p>) :
                    (   
                        <>
                            <p>La partie est terminée! Vous n'avez pas pu trouver le numéro secret.</p>
                            <p>Le numéro secret orange à trouver était : <strong className=''>0892043469</strong></p>
                        </>
                    )
                }
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Fermer
                </Button>
                <Button className="btn-custom-secondary" variant="primary" onClick={restartGame}>
                    Rejouer la partie
                </Button>
            </Modal.Footer>
        </Modal>
    </>
  );
}

CustomModal.propTypes = {
    display: PropTypes.bool,
    message: PropTypes.string
}

export default CustomModal
