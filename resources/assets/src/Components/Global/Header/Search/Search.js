import React from 'react'

const Search = props => {

 	return(
		<section className="Search">
			<button onClick={props.toggle}></button>
			<div className={props.addClass ? 'Search--wrp show' : 'Search--wrp' }>
				<form id="Search--form" className="Search--form">
					<div className="Search--input-and-results">
						<input className="Search--input" type="search" />
						<div className="Search--results">
							<p>UNLEASH Conference & Expo London 2018</p>
							<p>Fashion Companies Need to Rethink Their Lonesome HR Function</p>
							<p>Lonesome HR</p>
							<p>Stewart Brand: The Long Now</p>
						</div>
					</div>
				</form>
			</div>
		</section>
	)
}

export default Search