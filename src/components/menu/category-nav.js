import { Link } from 'preact-router/match';
import {useState} from "preact/hooks";

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
	{
		listIcon: <ServiceHandyman />,
		listName: 'Handyman services',
		subMenuList: {'Sub Item 1': '#', 'Sub Item 2': '#', 'Sub Item 3': '#'}
	},
	{
		listIcon: <ServiceHauling />,
		listName: 'Hauling services',
		subMenuList: {'Sub Item 1': '#', 'Sub Item 2': '#', 'Sub Item 3': '#'}
	},
	{
		listIcon: <ServiceHelpMoving />,
		listName: 'Help moving',
		subMenuList: {'Sub Item 1': '#', 'Sub Item 2': '#', 'Sub Item 3': '#'}
	},
	{
		listIcon: <ServiceMinorHomeRepair />,
		listName: 'Minor home repair',
		subMenuList: {'Sub Item 1': '#', 'Sub Item 2': '#', 'Sub Item 3': '#'}
	},
	{
		listIcon: <ServiceYardCleanup />,
		listName: 'Yard cleanup & removal',
		subMenuList: {'Sub Item 1': '#', 'Sub Item 2': '#', 'Sub Item 3': '#'}
	},
	{
		listIcon: <ServiceDeliverey />,
		listName: 'Delivery services',
		subMenuList: {'Sub Item 1': '#', 'Sub Item 2': '#', 'Sub Item 3': '#'}
	},
	{
		listIcon: <ServiceLaundry />,
		listName: 'Laundry services',
		subMenuList: {'Sub Item 1': '#', 'Sub Item 2': '#', 'Sub Item 3': '#'}
	},
	{
		listIcon: <ServiceIkea />,
		listName: 'IKEA furniture assembly',
		subMenuList: {'Sub Item 1': '#', 'Sub Item 2': '#', 'Sub Item 3': '#'}
	},
	{
		listIcon: <ServiceTvMounting />,
		listName: 'TV mounting',
		subMenuList: {'Sub Item 1': '#', 'Sub Item 2': '#', 'Sub Item 3': '#'}
	},
	{
		listIcon: <ServiceFurnitureDelivery />,
		listName: 'Furniture delivery',
		subMenuList: {'Sub Item 1': '#', 'Sub Item 2': '#', 'Sub Item 3': '#'}
	},
	{
		listIcon: <ServiceCleaning />,
		listName: 'Cleaning services',
		subMenuList: {'Sub Item 1': '#', 'Sub Item 2': '#', 'Sub Item 3': '#', 'Sub Item 4': '#', 'Sub Item 5': '#', 'Sub Item 6': '#', }
	}
];


const CategoryNav = (props) => {
	return (
		<nav id="category-nav" className={(props.menuStatus === true) ? "mobileDevice" : null}>
			<ul className={(props.menuStatus === true) ? "mobileDevice" : null}>
				{
					menuList.map(menuItem => (
						<li key={menuItem.listTitle}>
							<Link>
								{(props.iconVisible === true) ? <i>{menuItem.listIcon}</i> : null}
								<span>{menuItem.listName}</span>
							</Link>
							{
								(props.subMenuVisible === true) ?
										<nav className="sub-menu-holder">
											<ul>
												{
													Object.keys(menuItem.subMenuList).map(key => (
														<li key={key}><Link activeClassName="active" href={menuItem.subMenuList[key]}>{key}</Link></li>
													))
												}
											</ul>
											<a className="show-all-services-link" href="#">All Services in this category</a>
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
export default CategoryNav
export {menuList}

