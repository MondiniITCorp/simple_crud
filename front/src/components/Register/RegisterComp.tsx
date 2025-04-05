import axios from 'axios';
import './RegisterComp.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function RegisterComp() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    // const [isButtonEnabled, setIsButtonEnabled] = useState(false);

    const handleSubmit = async () => {
        try {
            console.log(name)
          const response = await axios.post('http://localhost:3000/users', {
            name,
            password,
          });
          console.log('User created successfully:', response.data);
          navigate('/login');
        } catch (error) {
          if ((error as any).response && (error as any).response.status === 409) {
            alert('O nome de usuário já existe. Por favor, escolha outro.');
          } else {
            alert('Erro ao criar conta. Tente novamente mais tarde.');
          }
        }
      };
    
    return(
        <div className="register-page">
            <div className="register-container">
                <div className="register-content">
                    <h1>
                        Bem-vindo à <span className="highlight">Simple Crud</span>
                    </h1>
                    <p className="register-content-text">Comece já, é grátis</p>
                    <div className="register-options">
                         <input
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        type="text"
                        placeholder="Name"
                        className="name-input"
                        />
                        <input
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        type="password"
                        placeholder="Senha"
                        className="name-input"
                        />
                        <button
                        className="continue-button"
                        onClick={handleSubmit}
                        >
                        Criar conta
                        </button>
                    </div>
                    <p className="terms">Ao continuar, você concorda com os </p>
                    <p className="terms">
                        <a href="#">Termos e Políticas de privacidade</a>
                    </p>
                    <p className="register-link">
                        Já tem uma conta? <a href="/login">Entrar</a>
                    </p>
                </div>
            </div>
            {/* <div className="illustration">
                <img src="" alt="Illustration" />
            </div> */}
        </div>
    );
}

