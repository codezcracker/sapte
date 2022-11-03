import FooterNav from '../menu/footer-nav';
import AddressNav from '../menu/address-nav';
import SocialNav from '../menu/social-nav';
import SkillsNav from "../menu/skills-nav";
import MainNavigation from "../menu/main-nav";

const Footer = () => (
	<footer id="footer">
		<div className="footer-top">
			<div className="holder">
				<div className="footer-column">
					<h6>Site Links</h6>
					<MainNavigation />
				</div>
				<div className="footer-column">
					<h6>Technologies</h6>
					<SkillsNav />
				</div>
				<div className="footer-column">
					<h6>Our Company</h6>
					<FooterNav />
				</div>
				<div className="footer-column address-column">
					<h6>Our Contacts</h6>
					<AddressNav />
				</div>
			</div>
		</div>

		<div className="footer-middle">
			<div className="holder">
				<SocialNav />
			</div>
		</div>

		<div className="footer-bottom">
			<div className="holder">
				<p>Copyright &copy; 2011 All Rights Reserved by <a href="/">Cap&Co</a></p>
			</div>
		</div>
	</footer>
);
export default Footer;