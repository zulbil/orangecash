import Grid from './../Grid/Grid'
import AddNumber from './../AddNumber'
import { InitialGridItems } from './../Grid/initialGridItems'
import { useState } from 'react' 
import { helper } from './../../helpers'

const Content = () => {

	const [counter, setCounter]							=	useState(0)
	const [phoneNumbers, setPhoneNumbers] 				= 	useState(InitialGridItems)
	const [secretPhoneNumber]							=	useState(helper.initSecretPhoneNumber())

	const submitPhoneNumber  =	(phoneNumber) => {
		if (counter < 8) {
			const newPhoneNumber	=	helper.checkNumber(phoneNumber,secretPhoneNumber)
			const gridNumber 		= 	phoneNumbers
			gridNumber[counter] 	= 	newPhoneNumber
			setPhoneNumbers(gridNumber)
			setCounter(counter+1)
		} else {
			alert('Votre partie est terminé !!!')
		}
	}
	
    return (
        <div className="container main-content">
            <div className="row justify-content-around">
                <h1 className="text-center"><span className="montant">3000</span> <span>$</span></h1>
            </div>
		    <div className="row mt-5">
			<div className="col-lg-6">
				<div className="card mb-4">
					<div className="card-header">
						<h4>Bienvenu sur OrangeCash</h4>
					</div>

					<div className="card-body">
						<p>
							Le principe du jeu est simple. Le but de ce jeu est de trouver le numéro de téléphone secret Orange. Tout au long du jeu vous avez droit à 8 tentatives et à une somme d'argent qui diminue au fur et à mesure que le temps s'écoule. Lorsque vous tapez un numéro vous trouverez des différentes couleurs sur les cases selon des cas bien différents. 
						</p>
						<ul>
							Les différentes couleurs sont :
							<li>
								<strong className="text-right-position">Le bleu</strong>: indique que le chiffre que vous avez fourni existe dans le numéro secret et se trouve à la bonne position.
							</li>
							<li>
								<strong className="text-wrong-position">L'orange</strong>: indique que le chiffre que vous avez fourni existe dans le numéro secret mais n'est pas à la bonne position.
							</li>
							<li>
								<strong className="text-not-exist">Le gris</strong>:  indique que le chiffre que vous avez fourni n'existe pas dans le numéro secret.
							</li>
						</ul>
					
					</div>
				</div>
				<button className="btn btn-base btn-lg btn-start">Commencer le jeu</button>
			</div>
			<div className="col-lg-6 row justify-content-center">
				<AddNumber onAdd={submitPhoneNumber}/>
				<Grid phoneNumbers={phoneNumbers} />
			</div>
		</div>
	</div>
    )
}

export default Content
