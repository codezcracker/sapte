import { Divide as Hamburger } from 'hamburger-react'
import MainNavigation from '../menu/main-nav';
import {LogoIcon} from "../svgs-list"
import {useState} from "preact/hooks";


const Header = () => {
	const [menuClick, menuSetClick] = useState(false);
	const MenuEvent = () => {
		if(menuClick === true){
			menuSetClick(false);
		}
		else{
			menuSetClick(true);
		}
	}
	
	return (
		<header id="header">
			<div className="holder">
				<div className="logo"><a href="/"><LogoIcon /></a></div>
				<MainNavigation menuStatus={menuClick} />
				<Hamburger distance="md" hideOutline={true} rounded size={32} toggle={MenuEvent} toggled={menuClick} />
			</div>
		</header>
	)
}

export default Header;