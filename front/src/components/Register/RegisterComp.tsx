import axios from 'axios';
import './RegisterComp.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function RegisterComp() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [isButtonEnabled, setIsButtonEnabled] = useState(false);

    const handleSubmit = async () => {
      // request to the backend to create user
      const req = await axios.post ('http://localhost:3000/users', {
        email,
        password
      })
      .then((response) => {
        console.log('User created successfully:', response.data);
        navigate('/login');
      }
      )

    }
    
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
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        type="email"
                        placeholder="E-mail"
                        className="email-input"
                        />
                        <input
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        type="password"
                        placeholder="Senha"
                        className="email-input"
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

