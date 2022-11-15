import React, { Component } from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";

import Home from "./components/HomePage";
import LoginPage from "./components/LoginAccountPage";
import LogoutPage from "./components/LogoutAccountPage";
import RegisterAccount from "./components/RegisterAccountPage";
import BankAccountOverview from "./components/BankAccountOverviewPage";
import ErrorPage from "./components/ErrorPage";

class App extends Component 
{
	render() 
  	{
    	return (
			<BrowserRouter>
				<div>
					<Routes>
						<Route path = "/" element = {<Home/>} exact/>
						<Route path = "/login" element = {<LoginPage/>}/>
						<Route path = "/logout" element = {<LogoutPage/>}/>
						<Route path = "/register" element = {<RegisterAccount/>}/>
						<Route path = "/bankAccountOverview" element = {<BankAccountOverview/>}/>
						<Route path = "*" element = {<ErrorPage/>}/>
					</Routes>
				</div>
			</BrowserRouter>
    	);
  	}
}

export default App;
