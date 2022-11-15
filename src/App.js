import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/HomePage";
import LoginPage from "./components/LoginAccountPage";
import LogoutPage from "./components/LogoutAccountPage";
import RegisterAccount from "./components/RegisterAccountPage";
import BankAccountOverview from "./components/BankAccountOverviewPage";
import ErrorPage from "./components/ErrorPage";

import './css/App.css';

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} exact />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/logout" element={<LogoutPage />} />
				<Route path="/register" element={<RegisterAccount />} />
				<Route path="/bankAccountOverview" element={<BankAccountOverview />} />
				<Route path="*" element={<ErrorPage />} />
			</Routes>
		</BrowserRouter>
	);
};


export default App;
