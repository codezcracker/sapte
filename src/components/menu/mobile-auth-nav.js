import { Link } from 'preact-router/match';


const menuList = [
	{
		listName: 'Orders'
	},
	{
		listName: 'Messages'
	},
	{
		listName: 'Notifications'
	},
	{
		listName: 'Profile',
		subMenuList: {'View profile': '#', 'Settings': '#', 'Payment methods': '#', 'Transaction history': '#', 'Support': '#'}
	},
	{
		listName: 'Sell Services'
	},
	{
		listName: 'Log out'
	}
];


const MobileAuthNav = (props) => {
	return (
		<nav id="mobile-auth-nav">
			<ul>
				{
					menuList.map(menuItem => (
						<li key={menuItem.listTitle}>
							<Link>
								{(props.iconVisible === true) ? <i>{menuItem.listIcon}</i> : null}
								<span>{menuItem.listName}</span>
							</Link>
							{
								(props.subMenuVisible === false) ?
									<nav className="sub-menu-holder">
										<ul>
											{
												Object.keys(menuItem.subMenuList).map(key => (
													<li key={key}><Link activeClassName="active" href={menuItem.subMenuList[key]}>{key}</Link></li>
												))
											}
										</ul>
									</nav>
									: null
								}
						</li>
					))
				}
			</ul>
		</nav>
	)
};
export default MobileAuthNav

