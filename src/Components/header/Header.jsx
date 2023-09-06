import React from "react";
import logo from "../../logo.svg";
import {
	Cont,
	ContImg,
	HeaderStyle,
	Img,
	Link,
	// Logo,
	P,
	// Title,
} from "../styledComponents/HeaderStyles";

export default function Header() {
	return (
		<HeaderStyle>
			<ContImg>
				<Img src={logo} className="App-logo" alt="logo" />
				{/* <Logo
					src="https://www.edu.goit.global/_next/image?url=https%3A%2F%2Fs3.eu-north-1.amazonaws.com%2Flms.goit.files%2F0618d8e0-2652-3e30-ae44-fd6ff17d55a1.png&amp;w=1080&amp;q=75"
					alt="logo"
				/> */}
			</ContImg>
			<Cont>
				{/*<Title> Formularios </Title>*/}
				<P>Modulo 2 - Clase 4</P>
			</Cont>
			<Link
				href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form"
				target="_blank"
				rel="noopener noreferrer"
			>
				Learn React
			</Link>
		</HeaderStyle>
	);
}
