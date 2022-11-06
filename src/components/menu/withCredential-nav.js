import { Link } from 'preact-router/match';

const menuList = [
	{ listName: 'Log in', listUrl: '/login' },
	{ listName: 'Sign up', listUrl: '/signup' }
];

const WithCredentialNavigation = (props) => (
	<nav id="withCredential-navigation" className={(props.menuStatus === true) ? "mobileDevice" : null}>
		<ul>
			{
				menuList.map(menuItem => (
					<li key={menuItem.listName} >
						<Link exact id={(menuItem.listName === "Sign up") ? "signup-button" : null} activeClassName="active" href={menuItem.listUrl}>{menuItem.listName}</Link>
					</li>
				))
			}
		</ul>
	</nav>
);
export default WithCredentialNavigation;



