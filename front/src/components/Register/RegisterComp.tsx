import './RegisterComp.scss';
import Image from '../../assets/registerPg1.png';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function RegisterComp() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [isButtonEnabled, setIsButtonEnabled] = useState(false);

    useEffect(() => {
        setIsButtonEnabled(!!email);
    }, [email]);

    const handleSubmit = async () => {
        localStorage.setItem('email', email);
        navigate('/createaccount', { state: { email } });
    }
    
    return(
        <div className="register-page">
            <div className="register-container">
                <div className="register-content">
                    <h1>
                        Bem-vindo à <span className="highlight">Dini Organize</span>
                    </h1>
                    <p className="register-content-text">Comece já, é grátis</p>
                    <div className="register-options">
                        {/* <button className="google-register">
                        <GoogleIcon /> <a>Continuar com o Google</a>
                        </button>
                        <span className="divider">Ou</span> */}
                        <input
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        type="email"
                        placeholder="E-mail"
                        className="email-input"
                        />
                        <button
                        className="continue-button"
                        disabled={!isButtonEnabled}
                        onClick={handleSubmit}
                        >
                        Continuar
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
            <div className="illustration">
                <img src={Image} alt="Illustration" />
            </div>
        </div>
    );
}

