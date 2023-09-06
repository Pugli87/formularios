import React from "react";
import { Cont, P, Title } from "../styledComponents/FormulariosStyles";
import Section from "../section/Section";
import Header from "../header/Header";
import LoginFrom from "./loginFrom/LoginFrom";

export default function Formularios() {
	const handleSubmit = (data) => {
		// Lógica para manejar los datos del formulario
		console.log("Datos recibidos:", data);
	};
	return (
		<Section>
			<Header />
			<Cont>
				<Title>Formularios</Title>
				<P>
					El objetivo principal de cualquier formulario es obtener datos del
					usuario. Para ello, podemos obtener los valores de los campos desde su
					propiedad <code>elements </code>o utilizando <code>FormData</code>
					durante el envío. Esto es adecuado cuando sólo se necesitan los datos
					del formulario al momento del envío.
				</P>
				<LoginFrom onSubmit={handleSubmit} />
			</Cont>
		</Section>
	);
}
