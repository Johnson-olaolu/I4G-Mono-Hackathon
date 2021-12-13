import {HashRouter as Router,Route} from 'react-router-dom'
import AddBranchScreen from './screens/AddBranchScreen';
import LoginScreen from './screens/LoginScreen';
import OnBoardingScreen from './screens/OnBoardingScreen';
import SignUpScreen from './screens/SignUpScreen';
import UserBranchDashboardScreen from './screens/UserBranchDashboardScreen';
import UserHomeDashboardScreen from './screens/UserHomeDashboardScreen';
import UserSingleBranchScreen from './screens/UserSingleBranchScreen';

function App() {
	return (
		<div className="">
			<Router>
					<Route path = "/" exact component = {OnBoardingScreen}/>
					<Route path = "/login" component = {LoginScreen}/>
					<Route path = "/sign-up" component = {SignUpScreen}/>
					<Route path = "/dashboard" exact component = {UserHomeDashboardScreen}/>
					<Route path = "/dashboard/branch" exact component = {UserBranchDashboardScreen} />
					<Route path = "/dashboard/branch/:id" exact component = {UserSingleBranchScreen}/>
					<Route path = "/dashboard/newbranch" exact component = {AddBranchScreen}/>
			</Router>
		</div>
	);
}

export default App;
