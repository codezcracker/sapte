import { Link } from 'preact-router/match';

const menuList = [
	{ listName: 'Html', listUrl: '/tech-html' },
	{ listName: 'CSS', listUrl: '/tech-css' },
	{ listName: 'JavaScript', listUrl: '/tech-javascript' },
	{ listName: 'ReactJS', listUrl: '/tech-reactjs' },
	{ listName: 'Android', listUrl: '/tech-android' },
	{ listName: 'IOS', listUrl: '/tech-ios' }
];

const AboutNav = () => (
	<nav id="about-nav" className="about-nav">
		<ul>
			{
				menuList.map(menuItem => (
					<li key={menuItem.listName}><Link exact activeClassName="active" href={menuItem.listUrl}>{menuItem.listName}</Link></li>
				))
			}
		</ul>
	</nav>
);
export default AboutNav;