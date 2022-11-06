import { Fragment } from 'preact';
import Category from "./category";
import Banner from "./banner";
import HowItWork from "./howitwork";
import PopularServices from "./popular-services";

const Home = () => (
	<Fragment>
		<Banner />
		<Category />
		<PopularServices />
		<HowItWork />
	</Fragment>
);

export default Home;
