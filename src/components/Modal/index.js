import React from 'react'

const Modal = ({ success, amount }) => {
    return (
        <div>
            <p>NOTIFICATION ALERT</p>
        </div>
    )
}

Modal.propTypes = {
    success: PropTypes.Boolean,
    amount: PropTypes.string
}

export default Modal
