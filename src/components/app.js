import { Router } from 'preact-router';
import Header from './sections/header';
import Footer from './sections/footer';
import Home from "./sections/home";
import Category from './sections/category';
import Howitwork from "./sections/howitwork";
import OfferServices from "./sections/popular-services";
import Error from "./sections/error";


const App = () => {
	return(
		<div id="app" >
			<Header />
			<Router >
				<Home path="/" />
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
