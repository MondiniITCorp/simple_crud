import './CreateAccountComp.scss';
import Image from '../../assets/createAccontPg1.png';
import Logo from '../../assets/logo-azul.png';
import { ButtonNext } from '../ButtonNext/ButtonNext';
import { useEffect, useState } from 'react';

interface CreateAccountCompProps {
  name: string;
  password: string;
  accountName: string;
  setName: (name: string) => void;
  setPassword: (password: string) => void;
  setAccountName: (accountName: string) => void;
  onNext: () => void;
}

export function CreateAccountComp({
  name,
  password,
  accountName,
  setName,
  setPassword,
  setAccountName, 
  onNext,
}: CreateAccountCompProps) {
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  useEffect(() => {
    if (name && password && accountName) {
      setIsButtonEnabled(true);
    } else {
      setIsButtonEnabled(false);
    }
  }, [name, password, accountName]);

  return (
    <div className="create-account-page">
      <div className="create-account-container">
        <div className="create-account-content">
          <div className="create-account-logo">
            <img src={Logo} alt="Logo" />
          </div>
          <div className="create-account-inputs">
            <h1>Crie sua conta</h1>
            <p>Nome </p>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <p>Senha</p>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <p>Nome da conta</p>
            <input
              type="text"
              value={accountName}
              onChange={(e) => setAccountName(e.target.value)}
            />
          </div>
        </div>
        <div className="illustration">
          <img src={Image} alt="Illustration" />
        </div>
      </div>

      <ButtonNext disabled={!isButtonEnabled} onClick={onNext} />
    </div>
  );
}
