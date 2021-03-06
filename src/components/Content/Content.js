import Grid from './../Grid/Grid'
import AddNumber from './../AddNumber'
import { InitialGridItems } from './../Grid/initialGridItems'
import { useState, useRef, useEffect } from 'react' 
import { helper } from './../../helpers'
import CustomModal from '../CustomModal'

const Content = () => {

	const [counter, setCounter]							=	useState(0)
	const [amount, setAmount]							=	useState(5000)
	const [start, setStart]								=	useState(false)
	const [winGame, setWinGame]							=	useState(false)
	const [phoneNumbers, setPhoneNumbers] 				= 	useState(InitialGridItems)
	const [secretPhoneNumber]							=	useState(helper.initSecretPhoneNumber())
	const [message, setMessage]							=	useState('')
	const [showModal, setShowModal]						=	useState(false)
	const amountRef 									= 	useRef(0)

	
	amountRef.current 	= amount

	const submitPhoneNumber  =	(phoneNumber) => {
		setCounter(counter+1)
		const newPhoneNumber	=	helper.checkNumber(phoneNumber,secretPhoneNumber)
		const gridNumber 		= 	phoneNumbers
		gridNumber[counter] 	= 	newPhoneNumber
		setPhoneNumbers(gridNumber)
		setWinGame(checkResult(newPhoneNumber))
	}

	const checkResult = (newPhoneNumber) => {
		return helper.checkIfPhoneNumberIsFound(newPhoneNumber)
	}

	const startGame = () =>  {
		setStart(true)
		changeAmount()
	}

	const changeAmount = () => {
		let timerAmount = setInterval(function () {
			setAmount(amountRef.current-50)
			if(amount === 0 || counter === 7 || winGame) {
				setTimeout(() => {
					clearInterval(timerAmount);
				}, 1000);
			}
		}, 1000)
	}

	const showMessage = () => {
		if(winGame) {
			setMessage('success')
			setShowModal(true)
		}
		if( counter === 7 || amount === 0) {
			setMessage('fail')
			setShowModal(true)
		}
	}


	useEffect(() => {
		showMessage()
	}, [counter, amount, winGame])


    return (
		<div className="container main-content">
			<div className="row justify-content-around">
				<h1 className="text-center amount"><span className="text-right-position">{amount}</span><span className="text-wrong-position">$</span></h1>
			</div>
			<div className="row mt-5">
				<div className="col-lg-6">
					<div className="card mb-4">
						<div className="card-header">
							<h4>Bienvenu sur OrangeCash</h4>
						</div>

						<div className="card-body">
							<p>
								Le principe du jeu est simple. Le but de ce jeu est de trouver le num??ro de t??l??phone secret Orange. Tout au long du jeu vous avez droit ?? 8 tentatives et ?? une somme d'argent qui diminue au fur et ?? mesure que le temps s'??coule. Lorsque vous tapez un num??ro vous trouverez des diff??rentes couleurs sur les cases selon des cas bien diff??rents. 
							</p>
							<ul>
								Les diff??rentes couleurs sont :
								<li>
									<strong className="text-right-position">Le bleu:</strong> indique que le chiffre que vous avez fourni existe dans le num??ro secret et se trouve ?? la bonne position.
								</li>
								<li>
									<strong className="text-wrong-position">L'orange:</strong> indique que le chiffre que vous avez fourni existe dans le num??ro secret mais n'est pas ?? la bonne position.
								</li>
								<li>
									<strong className="text-not-exist">Le gris:</strong> indique que le chiffre que vous avez fourni n'existe pas dans le num??ro secret.
								</li>
							</ul>
						
						</div>
					</div>
					<button className="btn btn-base btn-lg btn-start" onClick={() => startGame()}>Commencer le jeu</button>
				</div>
				<div className="col-lg-6 row justify-content-center">
					<AddNumber onAdd={submitPhoneNumber} start={start} />
					<Grid phoneNumbers={phoneNumbers} />
				</div>
				<CustomModal display={showModal} message={message} secret={secretPhoneNumber} amount={amount} />
			</div>
		</div>
    )
}

export default Content
