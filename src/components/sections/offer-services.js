import OfferServicesHolder from "../menu/offer-services-nav";

const OfferServices = () => (
	<section id="offerServices-section" className="offerServices-section normal-height">
		<div className="holder">
			<div className="heading heading-dark">
				<h2>Services We Offer</h2>
			</div>

			<OfferServicesHolder />
		</div>
	</section>
);

export default OfferServices;
