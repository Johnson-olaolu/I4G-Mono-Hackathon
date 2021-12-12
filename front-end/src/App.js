import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import LoginScreen from './screens/LoginScreen';
import OnBoardingScreen from './screens/OnBoardingScreen';
import SignUpScreen from './screens/SignUpScreen';
import UserHomeDashboardScreen from './screens/UserHomeDashboardScreen';

function App() {
	return (
		<div className="">
			<Router>
				<Routes>
					<Route path = "/" exact element = {<OnBoardingScreen/>}/>
					<Route path = "/login" element = {<LoginScreen/>}/>
					<Route path = "/sign-up" element = {<SignUpScreen/>}/>
					<Route path = "/dashboard" element = {<UserHomeDashboardScreen/>}/>
					<Route path = "/dashboard/branch/:id" element = {<UserHomeDashboardScreen/>}/>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
