import { Divide as Hamburger } from 'hamburger-react'
import {LogoIcon} from "../svgs-list"
import {useState} from "preact/hooks";
import WithCredentialNavigation from "../menu/withCredential-nav";
import CategoryNav from "../menu/category-nav";


const Header = () => {
	const [loginStatus, setLoginStatus] = useState(true);
	const [menuClick, menuSetClick] = useState(true);
	const [categoryStatus, setCategoryStatus] = useState(true)
	
	const MenuEvent = () => {
		if(menuClick === true){
			menuSetClick(false);
		}
		else{
			menuSetClick(true);
		}
	}
	
	
	const CategoryEvent = () => {
		if(categoryStatus === true){
			setCategoryStatus(false);
		}
		else{
			setCategoryStatus(true);
		}
	}
	
	
	
	
	
	
	return (
		<header id="header">
			<div className="holder">
				<div className="logo"><a href="/"><LogoIcon /></a></div>
				{(loginStatus === true) ?
					<WithCredentialNavigation />
					:
					null
				}
				<Hamburger distance="md" hideOutline={true} rounded size={32} toggle={MenuEvent} toggled={menuClick} />
			</div>
		</header>
	)
}

export default Header;