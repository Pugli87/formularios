import React from "react";
//import Section from "../../section/Section";
import { Title } from "../../styledComponents/LoginFormStyles";

export default function LoginFrom(props) {
	const handleSubmit = (evt) => {
		evt.preventDefault();
		const form = evt.currentTarget;
		const login = form.elements.login.value;
		const password = form.elements.password.value;
		console.log(login, password);
		props.onSubmit({ login, password });
		form.reset();
	};

	return (
		<>
			<Title>Elementos no controlados</Title>
			<form onSubmit={handleSubmit}>
				<input type="text" name="login" placeholder="Ingrese un correo" />
				<input
					type="password"
					name="password"
					placeholder="Ingrese  contraseña"
				/>
				<button type="submit">Login</button>
			</form>
		</>
	);
}
