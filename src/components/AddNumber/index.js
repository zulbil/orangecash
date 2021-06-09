import { useState } from 'react';

const AddNumber = ({ onAdd }) => {
    const [phoneNumber, setPhoneNumber] = useState('')
    const submitPhoneNumber = (e) => {
        e.preventDefault()
        if(!checkValidity(phoneNumber)) {
            alert('Invalid phone Number')
            return
        }
        onAdd(phoneNumber)
        setPhoneNumber('')
    }

    const checkValidity = (num) => {
        const regex = /^08(\d){8}$/gm;
        return num.match(regex);
    }

    return (
        <form className="form-number mb-4 col-12" onSubmit={submitPhoneNumber}>
            <input 
                type="text" 
                className="form-control custom-input-text" 
                placeholder="Entrez votre numéro" 
                value={phoneNumber} 
                onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <span className="invalid-feedback"> Veuiler remplir le champ par un numéro valide</span>
        </form>
    )
}

export default AddNumber
