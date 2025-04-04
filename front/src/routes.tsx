import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Boards from './pages/Boards/Boards';
import Register from './pages/Register/Register';
import CreateAccount from './pages/CreateAccount/CreateAccount';
import Login from './pages/Login/Login';



export default function AppRouter() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={
					<Boards />
				} />
				<Route path='/register' element={
					<Register />
				} />
				<Route path='/createaccount' element={
					<CreateAccount />
				} />
				<Route path='/login' element={
					<Login />
				} />
			</Routes>
		</Router>
	);
}
