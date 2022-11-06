import { Link } from 'preact-router/match';
import { IoMdCall, IoIosPin, IoIosMail } from 'react-icons/io';


const menuList = [
	{
		addressIcon: <IoIosPin />,
		addressName: 'Islamabad, Pakistan',
		addressUrl: 'https://www.google.com'
	},
	{
		addressIcon: <IoMdCall />,
		addressName: '+00 111 222 1234',
		addressUrl: 'tel:9545727970'
	},
	{
		addressIcon: <IoIosMail />,
		addressName: 'capandco@gmail.com',
		addressUrl: 'mailto:capandco@gmail.com'
	}
];

const AddressNav = () => (
	<nav id="address-nav" className="address-nav">
		<ul>
			{
				menuList.map(menuItem => (
					<li key={menuItem.addressName}>
						<Link exact activeClassName="active" href={menuItem.addressUrl}>{menuItem.addressIcon}<span>{menuItem.addressName}</span></Link>
					</li>
				))
			}
		</ul>
	</nav>
);
export default AddressNav;