import { Link } from 'preact-router/match';

const menuList = [
	{ listName: 'How does it work', listUrl: '#' },
	{ listName: 'Privacy Policy', listUrl: '#' },
	{ listName: 'Terms of use', listUrl: '#' },
];

const ProductNav = () => (
	<nav className="footer-nav">
		<ul>
			{
				menuList.map(menuItem => (
					<li key={menuItem.listName}><Link exact activeClassName="active" href={menuItem.listUrl}>{menuItem.listName}</Link></li>
				))
			}
		</ul>
	</nav>
);
export default ProductNav;