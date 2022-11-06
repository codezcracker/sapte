import PopularServicesHolder from "../menu/popular-services-nav";
import {ArrowIcon} from "../svgs-list";

const PopularServices = () => (
	<section id="popular-service-section" className="popular-service-section">
		<div className="holder">
			<div className="heading">
				<h2>Popular Services</h2>
			</div>
			<PopularServicesHolder />
			<div className="more-services-btn-holder">
				<a className="more-services-btn" href="#"><span>View more popular services</span><ArrowIcon /></a>
			</div>
		</div>
	</section>
);

export default PopularServices;
