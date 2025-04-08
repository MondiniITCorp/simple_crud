import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Boards from './pages/Boards/Boards';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import { Products } from './pages/Products/Products';
import { Location } from './pages/Location/Location';
import { RequireAuth } from './others/RequireAuth';

export default function AppRouter() {
	return (
		<Router>
			<Routes>
				<Route path="/register" element={<Register />} />
				<Route
					path="/"
					element={
						<RequireAuth>
							<Products />
						</RequireAuth>
					}
				/>
				<Route
					path="/location"
					element={
						<RequireAuth>
							<Location />
						</RequireAuth>
					}
				/>
				<Route path="/login" element={<Login />} />
			</Routes>
		</Router>
	);
}
