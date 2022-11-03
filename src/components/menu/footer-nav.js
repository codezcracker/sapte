import { Link } from 'preact-router/match';

const menuList = [
	{ listName: 'Programs', listUrl: '/program' },
	{ listName: 'About Us', listUrl: '/about-us' },
	{ listName: 'Team', listUrl: '/team' },
	{ listName: 'Contact Us', listUrl: '/contact-us' },
];

const FooterNav = () => (
	<nav id="footer-nav" className="footer-nav">
		<ul>
			{
				menuList.map(menuItem => (
					<li key={menuItem.listName}><Link exact activeClassName="active" href={menuItem.listUrl}>{menuItem.listName}</Link></li>
				))
			}
		</ul>
	</nav>
);
export default FooterNav;