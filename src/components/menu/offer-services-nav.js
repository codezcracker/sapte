import {
	AndroidIcon,
	CssIcon,
	HtmlIcon,
	IosIcon,
	JavaScriptIcon,
	NodeIcon,
	PhpIcon,
	ReactJsIcon,
	WordpressIcon,
	AppIcon,
	WebAppIcon,
	EcommerceIcon
} from "../svgs-list";

const serviceContentList = [
	{
		listIcon: <AppIcon />,
		listTitle: 'App Development',
		listUrl: 'https://google.com',
		serviceList: {
			'html': <HtmlIcon />,
			'css': <CssIcon />,
			'wordpress': <WordpressIcon />,
			'php': <PhpIcon />,
			'IOS App': <IosIcon />,
			'Android App': <AndroidIcon />,
			'ReactJs': <ReactJsIcon />,
			'JavaScript': <JavaScriptIcon />,
			'NodeJs': <NodeIcon />,
		}
	},
	{
		listIcon: <WebAppIcon />,
		listTitle: 'Web Development',
		listUrl: 'https://google.com',
		serviceList: {
			'html': <HtmlIcon />,
			'css': <CssIcon />,
			'wordpress': <WordpressIcon />,
			'php': <PhpIcon />,
			'IOS App': <IosIcon />,
			'Android App': <AndroidIcon />,
			'ReactJs': <ReactJsIcon />,
			'JavaScript': <JavaScriptIcon />,
			'NodeJs': <NodeIcon />,
		}
	},
	{
		listIcon: <EcommerceIcon />,
		listTitle: 'Ecommerce Development',
		listUrl: 'https://google.com',
		serviceList: {
			'html': <HtmlIcon />,
			'css': <CssIcon />,
			'wordpress': <WordpressIcon />,
			'php': <PhpIcon />,
			'IOS App': <IosIcon />,
			'Android App': <AndroidIcon />,
			'ReactJs': <ReactJsIcon />,
			'JavaScript': <JavaScriptIcon />,
			'NodeJs': <NodeIcon />,
		}
	}
];

const OfferServicesHolder = () => (
	<div className="offer-services-holder">
		{
			serviceContentList.map(serviceContentItems => (
				<div className="offer-services-block" key={serviceContentItems.listTitle}>
					<div className="offer-services-content">
						<div className="content-header">
							<i>{serviceContentItems.listIcon}</i>
							<strong>{serviceContentItems.listTitle}</strong>
						</div>
						<ul>
							{
								Object.keys(serviceContentItems.serviceList).map(key => (
									<li key={key}>
										<i>{serviceContentItems.serviceList[key]}</i>
										<span>{key}</span>
									</li>
								))
							}
						</ul>
						<a className="read-more-btn" href={serviceContentItems.listUrl}>Read more</a>
					</div>
				</div>
			))
		}
	</div>
);

export default OfferServicesHolder














