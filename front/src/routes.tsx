import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Boards from './pages/Boards/Boards';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import { Products } from './pages/Products/Products';



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
					<Products />
				} />
				<Route path='/login' element={
					<Login />
				} />
			</Routes>
		</Router>
	);
}
