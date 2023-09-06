import  styled, { keyframes } from "styled-components";

const spin = keyframes`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
`;

export const HeaderStyle = styled.header`
	margin-top: -10px;
	color: white;
	background-color: #282c34;
	padding: 10px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	font-size: calc(10px + 2vmin);

	@media (min-width: 320px) {
		margin-top: -20px;
    padding: 15px;
  }

  @media (min-width: 768px) {
		margin-top: -30px;
    padding: 20px;
  }
`;
	
export const ContImg = styled.div`
	padding: 0 5px;
	display: flex;
	align-items: center;
`; 


export const Img = styled.img`
	height: 30px;
  pointer-events: none;
	
  @media (prefers-reduced-motion: no-preference) {
		animation: ${spin} infinite 20s linear;
  }
`;
	
export const Logo = styled.img`
	width: 40px;
	height: 15px;
	background-color: hsl(0, 0%, 90%);
`;

export const Cont = styled.div`
	padding: 0 5px;
	display: flex;
	align-items: center;
`;

export const Title = styled.h1`
	padding: 0 5px;
	color: #61dafb;
	font-size: 2rem;
	text-transform: uppercase;
`;

export const P = styled.p`
	padding: 0 5px;
	font-size: 0.7rem;
`;


export const Link = styled.a`
	padding: 0 5px;
	color: #61dafb;
	font-size: 0.8rem;
	cursor: pointer;
`;