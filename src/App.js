import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Home from './Components/Home';
import Game from './Components/Game';
import JustArt from './Components/JustArt';

import M from 'materialize-css';
import './App.css';

function App() {
	document.addEventListener('DOMContentLoaded', function() {
		var elems = document.querySelectorAll('select');
		var instances = M.FormSelect.init(elems);
	});

	return (
		<div className="App">
			<Router>
				<nav>
					<div className="nav-wrapper indigo darken-2">
						<a href="#" classNAme="brand-logo">
							Logo
						</a>
						<ul id="nav-mobile" className="right hide-on-med-and-down">
							<li>
								<a>
									<Link
										onClick={() => {
											window.location.href = '/';
										}}
									>
										Home
									</Link>
								</a>
							</li>
						</ul>
					</div>
				</nav>
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/game/:value" component={Game} />
					<Route path="/justart/:value" component={JustArt} />
					<Route path="*">
						<h2>PAGE NOT FOUND!</h2>
						<Link to="/">Return to Homepage</Link>
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
