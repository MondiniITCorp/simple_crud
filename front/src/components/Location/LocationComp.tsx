import axios from 'axios';
import { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';

export default function LocationComp() {
	const [productsByLocation, setProductsByLocation] = useState<{ [key: string]: any[] }>({}); // Estado para armazenar os produtos agrupados por localização

	// Função para buscar os produtos do banco de dados e agrupá-los por localização
	useEffect(() => {
		async function fetchProducts() {
			try {
				const response = await axios.get(`${import.meta.env.VITE_API_HOST}/api/product`); // Endpoint para buscar produtos
				const products = response.data;

				// Agrupa os produtos por localização
				const groupedByLocation = products.reduce((acc: { [key: string]: any[] }, product: any) => {
					if (!acc[product.location]) {
						acc[product.location] = [];
					}
					acc[product.location].push(product);
					return acc;
				}, {});

				setProductsByLocation(groupedByLocation); // Atualiza o estado com os produtos agrupados
			} catch (error) {
				console.error('Erro ao buscar produtos:', error);
			}
		}
		fetchProducts();
	}, []);

	return (
		<>
			<Navbar />
			<div>
				<h1>Products by Location</h1>
				{/* Renderiza uma tabela para cada localização */}
				{Object.keys(productsByLocation).map((location) => (
					<div key={location} style={{ marginBottom: '30px' }}>
						<h2>Location: {location}</h2>
						<table border="1" style={{ width: '100%', borderCollapse: 'collapse' }}>
							<thead>
								<tr>
									<th>ID</th>
									<th>Name</th>
									<th>Color</th>
									<th>Size</th>
									<th>Price (BR)</th>
									<th>Price (US)</th>
									<th>Ticket</th>
								</tr>
							</thead>
							<tbody>
								{productsByLocation[location].map((product) => (
									<tr key={product.id}>
										<td>{product.id}</td>
										<td>{product.name}</td>
										<td>{product.color}</td>
										<td>{product.size}</td>
										<td>{product.price_br}</td>
										<td>{product.price_us}</td>
										<td>{product.ticket ? product.ticket.id : 'N/A'}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				))}
			</div>
		</>
	);
}
