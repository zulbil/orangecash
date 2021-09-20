import { useState, useRef } from 'react';

const AddNumber = ({ onAdd, start }) => {
    const [ error, setError ]       =   useState('')
    const phoneNumber               =   useRef('')

    const submitPhoneNumber = (e) => {
        e.preventDefault()
        setError('')
        if(!checkValidity(phoneNumber.current.value)) {
            setError('invalid phone number')
            return
        }
        onAdd(phoneNumber.current.value)
        phoneNumber.current.value = ''
    }

    const checkValidity = (num) => {
        const regex = /^(089|085|084|080)(\d){7}$/gm;
        return num.match(regex);
    }

    return (
        <form className="form-number mb-4 col-12" onSubmit={submitPhoneNumber}>
            <input 
                type="text" 
                className="form-control custom-input-text" 
                placeholder="Entrez votre numéro" 
                disabled={!start}
                ref={phoneNumber}
            />
            {error && <span className="invalid-feedback" style={{display: 'block'}}> Veuiler remplir le champ par un numéro orange valide</span>}
        </form>
    )
}

export default AddNumber
