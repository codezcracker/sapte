import { Link } from 'preact-router/match';

const menuList = [
	{ listName: 'Support', listUrl: '/support' },
];

const SupportNav = () => (
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
export default SupportNav;