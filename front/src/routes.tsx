import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Boards from './pages/Boards/Boards';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import { Home } from './components/Home/Home';



export default function AppRouter() {
	return (
		<Router>
			<Routes>
				{/* <Route path="/" element={
					<Boards />
				} /> */}
				<Route path='/register' element={
					<Register />
				} />
				<Route path='/' element={
					<Home />
				} />
				<Route path='/login' element={
					<Login />
				} />
			</Routes>
		</Router>
	);
}
