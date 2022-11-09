import { Link } from 'preact-router/match';


const menuList = [
	{
		listName: 'Orders',
		subMenuList: {'ddd': '#'}
	},
	{
		listName: 'Messages',
		subMenuList: {'View profile2': '#'}
	},
	{
		listName: 'Notifications',
		subMenuList: {'View profile3': '#'}
	},
	{
		listName: 'Profile',
		subMenuList: {'View profile4': '#', 'Settings': '#', 'Payment methods': '#', 'Transaction history': '#', 'Support': '#'}
	},
	{
		listName: 'Sell Services',
		subMenuList: {'View profile': '#'}
	},
	{
		listName: 'Log out',
		subMenuList: {'View profile': '#'}
	}
];


const MobileAuthNav = (props) => (
	<nav id="mobile-auth-nav">
		<ul>
			{
				menuList.map(menuItem => (
					<li key={menuItem.listName}>
						<details>
							<summary>{menuItem.listName}</summary>
							{
								(props.deviceStatus === true) ?
									<ul className="sub-menu-holder">
										{
											Object.keys(menuItem.subMenuList).map(key => (
												<li key={key}><Link activeClassName="active" href={menuItem.subMenuList[key]}>{key}</Link></li>
											))
										}
									</ul>
									: ""
							}
						</details>
					</li>
				))
			}
		</ul>
	</nav>
);
export default MobileAuthNav

