import axios from 'axios';
import { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';

export default function ProductsComp() {
	const [formData, setFormData] = useState({
		id: null,
		name: '',
		name_us: '',
		color: '',
		color_us: '',
		size: '',
		size_us: '',
		location: '',
		price_br: '',
		price_us: '',
	});

	const [products, setProducts] = useState([]);
	const [selectedTicket, setSelectedTicket] = useState(null); // Estado para armazenar o ticket selecionado
	const [editingProduct, setEditingProduct] = useState(null); // Estado para armazenar o produto em edição
	const [editingTicket, setEditingTicket] = useState(null); // Estado para armazenar o ticket em edição
	const [ticketFormData, setTicketFormData] = useState({
		id: null,
		name: '',
		size: '',
		color_english: '',
	});

	const formFields = [
		{ name: 'name', label: 'Name', type: 'text' },
		{ name: 'name_us', label: 'Name (US)', type: 'text' },
		{ name: 'color', label: 'Color', type: 'text' },
		{ name: 'color_us', label: 'Color (US)', type: 'text' },
		{ name: 'size', label: 'Size', type: 'text' },
		{ name: 'size_us', label: 'Size (US)', type: 'text' },
		{ name: 'location', label: 'Location', type: 'text' },
		{ name: 'price_br', label: 'Price (BR)', type: 'text' },
		{ name: 'price_us', label: 'Price (US)', type: 'text' },
	];

	// Função para buscar os produtos do banco de dados
	useEffect(() => {
		async function fetchProducts() {
			try {
				const response = await axios.get(`${import.meta.env.VITE_API_HOST}/product`, {
					headers: {
						Authorization: `Bearer ${window.localStorage.getItem('token')}`,
					},
				}); // Endpoint para buscar produtos
				setProducts(response.data); // Atualiza o estado com os produtos retornados
			} catch (error) {
				console.error('Erro ao buscar produtos:', error);
			}
		}
		fetchProducts();
	}, []);

	async function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	}

	async function handleTicketChange(e: React.ChangeEvent<HTMLInputElement>) {
		const { name, value } = e.target;
		setTicketFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	}

	async function handleTicketClick(ticketId: number) {
		try {
			const response = await axios.get(`${import.meta.env.VITE_API_HOST}/ticket/${ticketId}`, {
				headers: {
					Authorization: `Bearer ${window.localStorage.getItem('token')}`,
				},
			}); // Endpoint para buscar o ticket
			setSelectedTicket(response.data); // Atualiza o estado com o ticket retornado
		} catch (error) {
			console.error('Erro ao buscar ticket:', error);
			alert('Erro ao buscar ticket');
		}
	}

	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();

		try {
			const req = await axios.post(`${import.meta.env.VITE_API_HOST}/product`, {
				headers: {
					Authorization: `Bearer ${window.localStorage.getItem('token')}`,
				},
				data: formData,
			}); // Endpoint para criar um novo produto
			alert('Product created successfully');

			// Atualiza a lista de produtos após criar um novo
			setProducts((prevProducts) => [...prevProducts, req.data]);

			// Limpa o formulário
			setFormData({
				id: null,
				name: '',
				name_us: '',
				color: '',
				color_us: '',
				size: '',
				size_us: '',
				location: '',
				price_br: '',
				price_us: '',
			});
		} catch (error) {
			console.error('Erro ao criar produto:', error);
			alert('Erro ao criar produto');
		}
	}

	// Função para iniciar a edição de um produto
	function handleEditClick(product: any) {
		setEditingProduct(product); // Define o produto em edição
		setFormData(product); // Preenche o formulário com os dados do produto
	}

	// Função para iniciar a edição de um ticket
	function handleEditTicketClick(ticket: any) {
		setEditingTicket(ticket); // Define o ticket em edição
		setTicketFormData(ticket); // Preenche o formulário com os dados do ticket
	}

	async function handleSaveEdit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();

		// Filtra apenas os campos que foram alterados
		const updatedFields: any = {};
		for (const key in formData) {
			if (formData[key] !== editingProduct[key]) {
				updatedFields[key] = formData[key];
			}
		}

		// Inclui o ID do produto no corpo da requisição
		updatedFields.id = editingProduct.id;

		try {
			const response = await axios.patch(`${import.meta.env.VITE_API_HOST}/product`, {
				headers: {
					Authorization: `Bearer ${window.localStorage.getItem('token')}`,
				},
				data: updatedFields,
			}); // Endpoint para atualizar o produto
			alert('Product updated successfully');
			setProducts((prevProducts) => prevProducts.map((p) => (p.id === response.data.id ? response.data : p))); // Atualiza a lista de produtos
			setEditingProduct(null); // Sai do modo de edição
			setFormData({
				id: null,
				name: '',
				name_us: '',
				color: '',
				color_us: '',
				size: '',
				size_us: '',
				location: '',
				price_br: '',
				price_us: '',
			}); // Limpa o formulário
		} catch (error) {
			console.error('Erro ao atualizar produto:', error);
			alert('Erro ao atualizar produto');
		}
	}

	// Função para salvar as alterações do ticket
	async function handleSaveTicketEdit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();

		try {
			// Inclui o ID do ticket no corpo da requisição
			const response = await axios.put(`${import.meta.env.VITE_API_HOST}/ticket`, {
				headers: {
					Authorization: `Bearer ${window.localStorage.getItem('token')}`,
				},
				data: {
					id: ticketFormData.id,
					name: ticketFormData.name,
					size: ticketFormData.size,
					color_english: ticketFormData.color_english,
				},
			});

			alert('Ticket updated successfully');

			// Atualiza a lista de produtos com o ticket atualizado
			setProducts((prevProducts) => prevProducts.map((p) => (p.ticket && p.ticket.id === response.data.id ? { ...p, ticket: response.data } : p)));

			// Sai do modo de edição do ticket
			setEditingTicket(null);

			// Limpa o formulário do ticket
			setTicketFormData({
				id: null,
				name: '',
				size: '',
				color_english: '',
			});
		} catch (error) {
			console.error('Erro ao atualizar ticket:', error);
			alert('Erro ao atualizar ticket');
		}
	}

	async function handleDeleteProduct(productId: number) {
		if (!window.confirm('Are you sure you want to delete this product?')) {
			return; // Confirmação do usuário antes de deletar
		}

		try {
			await axios.delete(`${import.meta.env.VITE_API_HOST}/product/${productId}`,
        {
          headers: {
            Authorization: `Bearer ${window.localStorage.getItem('token')}`,
          },
        }
      ); // Endpoint para deletar o produto
			alert('Product deleted successfully');

			// Remove o produto da lista de produtos
			setProducts((prevProducts) => prevProducts.filter((product) => product.id !== productId));
		} catch (error) {
			console.error('Erro ao deletar produto:', error);
			alert('Erro ao deletar produto');
		}
	}

	return (
		<>
			<Navbar />
			<div>
				<h1>Products</h1>
				<form onSubmit={editingProduct ? handleSaveEdit : handleSubmit}>
					{formFields.map((field) => (
						<div key={field.name}>
							<label>
								{field.label}:
								<input type={field.type} name={field.name} value={formData[field.name as keyof typeof formData] || ''} onChange={handleChange} />
							</label>
						</div>
					))}

					<button type="submit">{editingProduct ? 'Save Changes' : 'Submit'}</button>
				</form>
				{/* Formulário de edição do ticket */}
				{editingTicket && (
					<div style={{ marginTop: '20px' }}>
						<h2>Edit Ticket</h2>
						<form onSubmit={handleSaveTicketEdit}>
							<div>
								<label>
									Name:
									<input type="text" name="name" value={ticketFormData.name} onChange={handleTicketChange} />
								</label>
							</div>
							<div>
								<label>
									Size:
									<input type="text" name="size" value={ticketFormData.size} onChange={handleTicketChange} />
								</label>
							</div>
							<div>
								<label>
									Color:
									<input type="text" name="color_english" value={ticketFormData.color_english} onChange={handleTicketChange} />
								</label>
							</div>
							<button type="submit">Save Ticket</button>
						</form>
					</div>
				)}
				{/* Lista de produtos */}
				<h2>Product List</h2>
				<table border="1" style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
					<thead>
						<tr>
							<th>ID</th>
							<th>Name</th>
							<th>Color</th>
							<th>Size</th>
							<th>Location</th>
							<th>Price (BR)</th>
							<th>Price (US)</th>
							<th>Ticket</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
						{products.map((product: any) => (
							<tr key={product.id}>
								<td>{product.id}</td>
								<td>{product.name}</td>
								<td>{product.color}</td>
								<td>{product.size}</td>
								<td>{product.location}</td>
								<td>{product.price_br}</td>
								<td>{product.price_us}</td>
								<td>{product.ticket ? <button onClick={() => handleTicketClick(product.ticket.id)}>{product.ticket.id}</button> : 'N/A'}</td>
								<td>
									<button onClick={() => handleEditClick(product)}>Edit Product</button>
									{product.ticket && <button onClick={() => handleEditTicketClick(product.ticket)}>Edit Ticket</button>}
									<button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>

				{/* Tabela de informações do ticket */}
				{selectedTicket && (
					<div style={{ marginTop: '20px' }}>
						<h2>Ticket Details</h2>
						<table border="1" style={{ width: '100%', borderCollapse: 'collapse' }}>
							<thead>
								<tr>
									<th>ID</th>
									<th>Name</th>
									<th>Size</th>
									<th>Color</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>{selectedTicket.id}</td>
									<td>{selectedTicket.name}</td>
									<td>{selectedTicket.size}</td>
									<td>{selectedTicket.color_english}</td>
								</tr>
							</tbody>
						</table>
					</div>
				)}
			</div>
		</>
	);
}
