import { Link } from "react-scroll";

const menuList = [
	{ listName: 'Home', listUrl: 'banner-section' },
	{ listName: 'Skills', listUrl: 'skills-section' },
	{ listName: 'Portfolio', listUrl: 'portfolio-section' },
	{ listName: 'Achievement', listUrl: 'achievement-section' },
	{ listName: 'About', listUrl: 'about-section' },
	{ listName: 'Contact', listUrl: 'footer' }
];

const MainNavigation = (props) => (
	<nav id="main-navigation" className={(props.menuStatus === true) ? "mobileDevice" : null}>
		<ul>
			{
				menuList.map(menuItem => (
					<li key={menuItem.listName}>
						<Link
							activeClass="active"
							to={menuItem.listUrl}
							spy={true}
							smooth={true}
							offset={-65}
							duration={500}
							exact>{menuItem.listName}
						</Link>
					</li>
				))
			}
		</ul>
	</nav>
);
export default MainNavigation;



