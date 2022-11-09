import {useState} from "preact/hooks";
import {Divide as Hamburger} from 'hamburger-react'

import {LogoIcon} from "../svgs-list"
import UnAuthNav from "../menu/withCredential-nav";
import MobileAuthNav from "../menu/mobile-auth-nav";

const Header = ({isAboveFold}) => {
	const [show, setShow] = useState(false);
	const [loginStatus, setLoginStatus] = useState(true);

	return (
		<header id="header" className={isAboveFold ? 'aboveFold' : 'belowFold'}>
			<div className="holder">
				<div className="logo"><a href="/"><LogoIcon /></a></div>
				<Hamburger distance="md" hideOutline={true} rounded size={32} toggle={() => setShow(!show)} toggled={show} />

				<div className="desktop-menu">
					{loginStatus ? <MobileAuthNav /> : <UnAuthNav />}
				</div>

				<div className="mobile-menu" menuOpenStatus={show}>
					{loginStatus ? <MobileAuthNav isMobile /> : <UnAuthNav />}
				</div>
			</div>
		</header>
	)
}

export default Header;
