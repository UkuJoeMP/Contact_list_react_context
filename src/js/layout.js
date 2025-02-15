import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

import Contacts from "./views/Contacts.jsx";
import AddContact from "./views/AddContact.jsx";
import EditContact from "./views/EditContact.jsx";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<Routes>
					{/* <Route path="/" element={<Home />} /> */}
					<Route path="/" element={<Contacts />} />
					<Route path="/addContact" element={<AddContact />} />
					<Route path="/editContact/:id" element={<AddContact />} />
					<Route path="*" element={<h1>Not found!</h1>} />

				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
