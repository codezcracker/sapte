import { Fragment } from 'preact';
import Skill from "./skill";
import Portfolio from "./portfolio";
import About from "./about";
import Banner from "./banner";
import CircleAnimation from "./circle-animation";
import Achievement from "./achievement";
import KeyFeatures from "./key-features";
import OfferServices from "./offer-services";

const Home = () => (
	<Fragment>
		<Banner />
		<Skill />
		<KeyFeatures />
		<Portfolio />
		<Achievement />
		<OfferServices />
		<About />
	</Fragment>
);

export default Home;
