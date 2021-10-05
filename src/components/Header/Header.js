import './Header.css'

const Header = () => {
    return (
        <header className="App-header">
			<nav className="navbar navbar-expand-md mb-4">
				<div className="container">
					<a className="navbar-brand" href="/"><span className="orange">Orange</span>Cash</a>
					<button 
						className="navbar-toggler" 
						type="button" 
						data-bs-toggle="collapse" 
						data-bs-target="#navbarCollapse" 
						aria-controls="navbarCollapse" 
						aria-expanded="false" 
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
				</div>
			</nav>
		</header>
    )
}


export default Header
