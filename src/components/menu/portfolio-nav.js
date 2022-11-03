import Image1 from '../../assets/images/regal.png';
import Image2 from '../../assets/images/pammakeer.png';
import Image3 from '../../assets/images/med-miles.jpg';


const menuList = [
	{ listTitle: 'Regal', listParagraph:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi architecto at, beatae blanditiis dolorem dolores doloribus eaque.', listUrl: 'http://www.google.com', listImage: Image1 },
	{ listTitle: 'Pam Performance', listParagraph:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi architecto at, beatae blanditiis dolorem dolores doloribus eaque.', listUrl: 'http://www.google.com', listImage: Image2 },
	{ listTitle: 'Med Miles', listParagraph:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi architecto at, beatae blanditiis dolorem dolores doloribus eaque.', listUrl: 'http://www.google.com', listImage: Image3 },
];

const PortfolioNav = () => (
	<nav id="portfolio-nav" className="portfolio-nav">
		<ul>
			{
				menuList.map(menuItem => (
					<li key={menuItem.listTitle}>
						<a target="_blank" href={menuItem.listUrl}>
							<img src={menuItem.listImage} />
							<div className="portfolio-holder">
								<h3>{menuItem.listTitle}</h3>
								<p>{menuItem.listParagraph}</p>
							</div>
						</a>
					</li>
				))
			}
		</ul>
	</nav>
);

export default PortfolioNav