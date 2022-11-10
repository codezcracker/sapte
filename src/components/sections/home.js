import { Fragment } from 'preact';

import Banner from "./banner";
import Category from "./category";
import HowItWork from "./howitwork";
import PopularServices from "./popular-services";

const Home = ({aboveFold}) => (
	<Fragment>
		<Banner aboveFold={aboveFold} />
		<Category />
		<PopularServices />
		<HowItWork />
	</Fragment>
);

export default Home;
