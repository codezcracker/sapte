import { FaHandPeace } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaAward } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const menuList = [
	{ listTitle: 'Dedicated Development Team', listParagraph: 'Our skilled team leverage projects to provide best results.The team dedicates their every effort and does not look back until it\'s accomplished.', listIcon: <FaHandPeace /> },
	{ listTitle: 'Excellent Support', listParagraph: 'We are always there to assist our clients in every possible way to meet client\'s expectations and end needs.', listIcon: <FaUsers /> },
	{ listTitle: 'Data Backups', listParagraph: 'The backups are the best options and we carefully maintain our clients project backups to deal with misfortunes in the best manner.', listIcon: <FaAward /> },
	{ listTitle: 'Data Protection', listParagraph: 'By signing an NDA, our company ensures the utmost safety of all your private data. We deliver best-rated products to maintain confidentiality.', listIcon: <FaAward /> },
	{ listTitle: 'Quality Deliverance', listParagraph: 'We believe in delivering quality products to our clients by assuring all their project specifications at the best industry competitive price.', listIcon: <FaAward /> },
	{ listTitle: 'Enhancement', listParagraph: 'During Discovery, Designing and Development phases, our technical team is always there to provide suggestions and edits to improvise their product in the best possible manner.', listIcon: <FaAward /> },
	{ listTitle: 'Client Centric Developement', listParagraph: 'We craft the client\'s needs on web, mobile, and blockchain to tailor the solutions and enhance growth of the businesses.', listIcon: <FaAward /> },
];
var settings = {
	autoplay: true,
	dots: false,
	arrows: false,
	infinite: true,
	speed: 500,
	slidesToShow: 4,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 1377,
			settings: {
				slidesToShow: 3,
			}
		},
		{
			breakpoint: 1022,
			settings: {
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 766,
			settings: {
				slidesToShow: 1,
			}
		},
	]
};

const KeyFeaturesNav = () => (
	<nav id="keyfeatures-nav" className="keyfeatures-nav">
		<Slider {...settings}>
			{
				menuList.map(menuItem => (
					<div className="keyfeatures-list" key={menuItem.listName}>
						<div className="keyfeatures-holder">
							<i className="pattern-img">{menuItem.listIcon}</i>
							<h3 className="keyfeatures-name">{menuItem.listTitle}</h3>
							<p className="keyfeatures-paragraph">{menuItem.listParagraph}</p>
						</div>
					</div>
				))
			}
		</Slider>
	</nav>
);

export default KeyFeaturesNav