import { Router } from 'preact-router';
import {useRef} from "preact/hooks";

import Home from "./sections/home";
import Error from "./sections/error";
import Header from './sections/header';
import Footer from './sections/footer';
import Category from './sections/category';
import Howitwork from "./sections/howitwork";
import OfferServices from "./sections/popular-services";

import isOnScreen from "./helpers/is-on-screen";


const App = () => {
	const aboveFold = useRef(null);

	return(
		<div id="app">
			<Header isAboveFold={isOnScreen(aboveFold)} />
			<Router >
				<Home path="/" aboveFold={aboveFold} />
				<Error default={true} />
				<Category path="/category" />
				<Howitwork path="/howitwork" />
				<OfferServices path="/offer-services" />
			</Router>
			<Footer />
		</div>
	)
}

export default App;
