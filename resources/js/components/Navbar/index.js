import React from 'react';
import {
	Nav,
	NavLink,
	Bars,
	NavMenu
} from './NavbarElements';

const Navbar = () => {
	return (
		<>
			<Nav>

				<NavMenu>
					<h2>
					<NavLink to='/' >
						Home
					</NavLink>
					</h2>
					<h2>
					<NavLink to='/cadastro' >
						Cadastro
					</NavLink>
					</h2>
					<h2>
					<NavLink to='/sobre' >
						Sobre
					</NavLink>
					</h2>
				</NavMenu>
			</Nav>
		</>
	);
};

export default Navbar;
