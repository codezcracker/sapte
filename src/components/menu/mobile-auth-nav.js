import { Link } from 'preact-router/match';

const menu = [
	{
		title: 'Orders',
		link: '/',
	},
	{
		title: 'Messages',
		link: '/',
	},
	{
		title: 'Notifications',
		link: '/',
	},
	{
		title: 'Profile',
		links: [
			{
				title: 'View Profile',
				link: '/',
			},
			{
				title: 'Settings',
				link: '/',
			},
			{
				title: 'Payment methods',
				link: '/',
			},
			{
				title: 'Transaction history',
				link: '/',
			},
			{
				title: 'Support',
				link: '/',
			},
		]
	},
	{
		title: 'Sell Services',
		link: '/',
	},
	{
		title: 'Log out',
		link: '/',
	}
];

function AccordionLinks({ title, links = [] }) {
	if (links.lenght) { return null;  }

	return (
		<details>
			<summary>{title}</summary>

			<ul className="sub-menu-holder">
				{links.map(link => (
					<li key={link.title}>
						<Link href={link.link}>
							{link.title}
						</Link>
					</li>
				))}
			</ul>
		</details>
	)
}

const MobileAuthNav = ({ isMobile }) => (
	<nav id="mobile-auth-nav">
		<ul>
			{menu.map(({title, link, links}) => (
				<li key={title}>
					{(!isMobile || link) ? (
						<Link href={link}>{title}</Link>
					) : (
						<AccordionLinks title={title} links={links}/>
					)}
				</li>
			))}
		</ul>
	</nav>
);

export default MobileAuthNav
