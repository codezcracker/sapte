import {
	RatingIcon,
	LocationIcon
} from "../svgs-list";

const serviceContentList = [
	{
		listImage: "../../assets/images/prod1.jpeg",
		listTitle: 'Plumbing +  really really long long long nameddsgdsggds',
		listUrl: 'https://google.com',
		listAddress: 'Collingwood VIC',
		listPrice: 150,
		listRating: 4.5,
		listRatingNo: 200,
		listUserName: 'John Doe',
		listUserImage: "../../assets/images/user1.png",
	},
	{
		listImage: "../../assets/images/prod1.jpeg",
		listTitle: 'Plumbing',
		listUrl: 'https://gmail.com',
		listAddress: 'Lahore Pakistan',
		listPrice: 100,
		listRating: 5.0,
		listRatingNo: 120,
		listUserName: 'Usman Ghani',
		listUserImage: "../../assets/images/user1.png",
	},
	{
		listImage: "../../assets/images/prod1.jpeg",
		listTitle: 'Plumbing',
		listUrl: 'https://gmail.com',
		listAddress: 'Lahore Pakistan',
		listPrice: 100,
		listRating: 5.0,
		listRatingNo: 120,
		listUserName: 'Usman Ghani',
		listUserImage: "../../assets/images/user1.png",
	},
	{
		listImage: "../../assets/images/prod1.jpeg",
		listTitle: 'Plumbing',
		listUrl: 'https://gmail.com',
		listAddress: 'Lahore Pakistan',
		listPrice: 100,
		listRating: 5.0,
		listRatingNo: 120,
		listUserName: 'Usman Ghani',
		listUserImage: "../../assets/images/user1.png",
	},
	{
		listImage: "../../assets/images/prod1.jpeg",
		listTitle: 'Plumbing',
		listUrl: 'https://gmail.com',
		listAddress: 'Lahore Pakistan',
		listPrice: 100,
		listRating: 5.0,
		listRatingNo: 120,
		listUserName: 'Usman Ghani',
		listUserImage: "../../assets/images/user1.png",
	},
	{
		listImage: "../../assets/images/prod1.jpeg",
		listTitle: 'Plumbing',
		listUrl: 'https://gmail.com',
		listAddress: 'Lahore Pakistan',
		listPrice: 100,
		listRating: 5.0,
		listRatingNo: 120,
		listUserName: 'Usman Ghani',
		listUserImage: "../../assets/images/user1.png",
	},
	{
		listImage: "../../assets/images/prod1.jpeg",
		listTitle: 'Plumbing',
		listUrl: 'https://gmail.com',
		listAddress: 'Lahore Pakistan',
		listPrice: 100,
		listRating: 5.0,
		listRatingNo: 120,
		listUserName: 'Usman Ghani',
		listUserImage: "../../assets/images/user1.png",
	},
	{
		listImage: "../../assets/images/prod1.jpeg",
		listTitle: 'Plumbing',
		listUrl: 'https://gmail.com',
		listAddress: 'Lahore Pakistan',
		listPrice: 100,
		listRating: 5.0,
		listRatingNo: 120,
		listUserName: 'Usman Ghani',
		listUserImage: "../../assets/images/user1.png",
	},
];

const PopularServicesHolder = () => (
	<div className="popular-services-holder">
		<ul>
			{
				serviceContentList.map(serviceContentItems => (
					<li key={serviceContentItems.listTitle}>
						<a className="popular-services-block" href={serviceContentItems.listUrl}>
							<div className="popular-services-block-top">
								<img src={serviceContentItems.listImage} />
							</div>
							<div className="popular-services-block-middle">
								<h2>{serviceContentItems.listTitle}</h2>
								<div className="rating-holder">
									<i><RatingIcon /></i>
									<strong>{serviceContentItems.listRating}</strong>
									<span>({serviceContentItems.listRatingNo})</span>
								</div>
								<address>
									<LocationIcon />
									<span>{serviceContentItems.listAddress}</span>
								</address>
							</div>
							<div className="popular-services-block-bottom">
								<div className="user-holder">
									<img src={serviceContentItems.listUserImage} />
									<span className="name-text">{serviceContentItems.listUserName}</span>
								</div>
								<strong className="price-text">${serviceContentItems.listPrice}</strong>
							</div>
						</a>
					</li>
				))
			}
		</ul>
	</div>
);

export default PopularServicesHolder














