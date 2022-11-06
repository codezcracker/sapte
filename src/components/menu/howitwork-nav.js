import {QualityIcon, SafePaymentIcon, SatisfactionIcon} from "../svgs-list";

const menuList = [
	{ listIcon: <QualityIcon />, listTitle: 'Discover and order quality services', listParagraph: 'Our team manually verifies every professional. This guarantees you get only quality services.', },
	{ listIcon: <SafePaymentIcon />, listTitle: 'Enjoy safe payments', listParagraph: 'With our secure payment gateway, you can pay for services with ease of mind. You are also entitled to a refund at any point in the process.', },
	{ listIcon: <SatisfactionIcon />, listTitle: 'Get maximum satisfaction', listParagraph: 'We keep your funds in a safe deposit until you’re satisfied with the work done and approve final payment.', },
];

const HowItWorkNav = () => (
	<nav id="howitwork-nav" className="howitwork-nav">
		<ul>
			{
				menuList.map(menuItem => (
					<li key={menuItem.listTitle}>
						<div className="howitwork-holder">
							<i className="pattern-img">{menuItem.listIcon}</i>
							<h2>{menuItem.listTitle}</h2>
							<p>{menuItem.listParagraph}</p>
						</div>
					</li>
				))
			}
		</ul>
	</nav>
);

export default HowItWorkNav