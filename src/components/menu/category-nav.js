import { Link } from 'preact-router/match';
import {
	ServiceHandyman,
	ServiceHauling,
	ServiceMinorHomeRepair,
	ServiceHelpMoving,
	ServiceYardCleanup,
	ServiceDeliverey,
	ServiceLaundry,
	ServiceIkea,
	ServiceTvMounting,
	ServiceFurnitureDelivery,
	ServiceCleaning } from "../svgs-list";

const menuList = [
	{ listIcon: <ServiceHandyman />, listName: 'Handyman services', listUrl: '#' },
	{ listIcon: <ServiceHauling />, listName: 'Hauling services', listUrl: '#' },
	{ listIcon: <ServiceHelpMoving />, listName: 'Help moving', listUrl: '#' },
	{ listIcon: <ServiceMinorHomeRepair />, listName: 'Minor home repair', listUrl: '#' },
	{ listIcon: <ServiceYardCleanup />, listName: 'Yard cleanup & removal', listUrl: '#' },
	{ listIcon: <ServiceDeliverey />, listName: 'Delivery services', listUrl: '#' },
	{ listIcon: <ServiceLaundry />, listName: 'Laundry services', listUrl: '#' },
	{ listIcon: <ServiceIkea />, listName: 'IKEA furniture assembly', listUrl: '#' },
	{ listIcon: <ServiceTvMounting />, listName: 'TV mounting', listUrl: '#' },
	{ listIcon: <ServiceFurnitureDelivery />, listName: 'Furniture delivery', listUrl: '#' },
	{ listIcon: <ServiceCleaning />, listName: 'Cleaning services', listUrl: '#' },
];


const CategoryNav = (props) => {
	return (
		<nav id="category-nav" className={(props.menuStatus === true) ? "mobileDevice" : null}>
			<ul className={(props.menuStatus === true) ? "mobileDevice" : null}>
				{
					menuList.map(menuItem => (
						<li key={menuItem.listName}>
							<Link exact activeClassName="active" href={menuItem.listUrl}>
								{
									(props.iconVisible === true) ? <i>{menuItem.listIcon}</i> : null
								}
								<span>{menuItem.listName}</span>
							</Link>
						</li>
					))
				}
			</ul>
		</nav>
	)
}
export default CategoryNav;



