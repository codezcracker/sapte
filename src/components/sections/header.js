import { Divide as Hamburger } from 'hamburger-react'
import {LogoIcon} from "../svgs-list"
import {useState} from "preact/hooks";
import UnAuthNav from "../menu/withCredential-nav";
import MobileAuthNav from "../menu/mobile-auth-nav";

const Header = () => {
	
	const [scrollValue, setScrollValue] = useState("");
	const [loginStatus, setLoginStatus] = useState(true);
	const [menuClick, menuSetClick] = useState(false);
	
	var oldScrollY = window.scrollY;
	
	window.onscroll = function(e) {
		if(window.scrollY > 101){
			setScrollValue("statusActive");
		}
		else if(window.scrollY <= 100){
			setScrollValue("");
		}
		oldScrollY = window.scrollY;
	}
	
	const MenuEvent = () => {
		if(menuClick === true){
			menuSetClick(false);
		}
		else{
			menuSetClick(true);
		}
	}
	
	return (
		<header id="header" className={scrollValue}>
			<div className="holder">
				<div className="logo"><a href="/"><LogoIcon /></a></div>
				
				<div className="desktop-menu">
					{(loginStatus === true) ? <MobileAuthNav /> : <UnAuthNav />}
				</div>
				
				<Hamburger distance="md" hideOutline={true} rounded size={32} toggle={MenuEvent} toggled={menuClick} />

				<div className="mobile-menu" menuOpenStatus={menuClick}>
					{(loginStatus === true) ? <MobileAuthNav deviceStatus={true}/> : <UnAuthNav />}
				</div>
			</div>
		</header>
	)
}

export default Header;



