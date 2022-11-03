import { Link } from 'preact-router/match';

import {
	FbIcon,
	InstagramIcon,
	TwitterIcon
} from "../svgs-list";

const menuList = [
	{
		socialIcon: <FbIcon />,
		socialUrl: 'https://facebook.com'
	},
	{
		socialIcon: <InstagramIcon />,
		socialUrl: 'https://instagram.com'
	},
	{
		socialIcon: <TwitterIcon />,
		socialUrl: 'https://twitter.com'
	}
];

const SocialNav = () => (
	<nav id="social-nav" className="social-nav">
		<ul>
			{menuList.map(menuItem => (
				<li key={menuItem.socialUrl}>
					<Link exact activeClassName="active" href={menuItem.socialUrl}>
						{menuItem.socialIcon}
					</Link>
				</li>
			))}
		</ul>
	</nav>
);
export default SocialNav;
