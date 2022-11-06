import SupportNav from '../menu/support-nav';
import SocialNav from '../menu/social-nav';
import ProductNav from "../menu/product-nav";
import CategoryNav from "../menu/category-nav";
import {LogoIcon} from "../svgs-list";
import {useState} from "preact/hooks";

const Footer = () => {
	
	
	return (
		<footer id="footer">
			<div className="footer-top">
				<div className="holder">
					<div className="footer-column address-column">
						<div className="logo-dark"><a href="/"><LogoIcon /></a></div>
						<p>Service that help you find the best service providers or expand your business</p>
					</div>
					<div className="footer-column">
						<h6>Categories</h6>
						<CategoryNav iconVisible={false} />
					</div>
					<div className="footer-column">
						<h6>Products</h6>
						<ProductNav />
					</div>
					<div className="footer-column">
						<h6>Support</h6>
						<SupportNav />
					</div>
				</div>
			</div>
			
			<div className="footer-bottom">
				<div className="holder">
					<p>&copy; 2022 <a href="/">{document.title}</a>. All Rights Reserved.</p>
					<SocialNav />
				</div>
			</div>
		</footer>
	)
}
export default Footer;