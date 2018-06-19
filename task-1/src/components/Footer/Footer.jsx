import React from 'react';
import Logo from '../Logo/Logo.jsx'

const Footer = () => (
	<div>
		<Logo />

		<style jsx>
			{`
				div {
					width: calc(100% - 30px);
					height: 50px;
					background-color: #414141;
					padding-left: 30px;
					line-height: 50px;
				}
			`}
		</style>
	</div>
);

export default Footer;
