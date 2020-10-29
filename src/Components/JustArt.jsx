import React from 'react';
import ArtCall from './ArtCall';
import 'materialize-css';
import './JustArt.css';
import '../App.css';

const JustArt = (props) => {
	let { value } = props.match.params;

	return (
		<div className="App">
			<h1 className="blue-grey-text text-lighten-4">Art Match</h1>
			<button class="waves-effect waves-light btn cyan darken-3" onClick={() => window.location.reload(false)}>
				Click to reload!
			</button>
			<p className="blue-grey-text text-lighten-4">Welcome to the Art page</p>
			<p className="blue-grey-text text-lighten-4">This is all about the Art No Game</p>

			<div>
				<ArtCall value={value} />
			</div>

			<div class="preloader-wrapper big active">
				<div class="spinner-layer spinner-blue">
					<div class="circle-clipper left">
						<div class="circle" />
					</div>
					<div class="gap-patch">
						<div class="circle" />
					</div>
					<div class="circle-clipper right">
						<div class="circle" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default JustArt;
