import './CreateAccountPg3Comp.scss';
import Image from '../../assets/createAccountPg3.png';
import Logo from '../../assets/logo-azul.png';
import { ButtonNext } from '../ButtonNext/ButtonNext';
import { useEffect, useState } from 'react';

interface CreateAccountPg3CompProps {
  selectionManagement: string;
  setSelectionManagement: (selection: string) => void;
  onNext: () => void;
}

export function CreateAccountPg3Comp({
  selectionManagement,
  setSelectionManagement,
  onNext,
}: CreateAccountPg3CompProps) {

  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  useEffect(() => {
    if (selectionManagement) {
      setIsButtonEnabled(true);
    } else {
      setIsButtonEnabled(false);
    }
  }, [selectionManagement]);

  return (
    <div className="create-account-pg3-page">
      <div className="create-account-pg3-container">
        <div className="create-account-pg3-content">
          <div className="create-account-pg3-logo">
            <img src={Logo} alt="Logo" />
          </div>
          <div className="create-account-pg3-inputs">
            <h1>O que deseja Gerenciar?</h1>
            <div className="create-account-pg3-inputs-selection-options">
              <label>
                <input
                  type="radio"
                  name="selection"
                  value="educacao"
                  className="selection-option"
                  onChange={(e) => setSelectionManagement(e.target.value)}
                />
                Educação
              </label>
              <label>
                <input
                  type="radio"
                  name="selection"
                  value="desenvolvimento_software"
                  className="selection-option"
                  onChange={(e) => setSelectionManagement(e.target.value)}
                />
                Desenvolvimento de Software
              </label>
            </div>
            <div className="create-account-pg3-inputs-selection-options">
              <label>
                <input
                  type="radio"
                  name="selection"
                  value="construcao_civil"
                  className="selection-option"
                  onChange={(e) => setSelectionManagement(e.target.value)}
                />
                Construção Civil
              </label>
              <label>
                <input
                  type="radio"
                  name="selection"
                  value="rh_recrutamento"
                  className="selection-option"
                  onChange={(e) => setSelectionManagement(e.target.value)}
                />
                RH e Recrutamento
              </label>
            </div>
            <div className="create-account-pg3-inputs-selection-options">
              <label>
                <input
                  type="radio"
                  name="selection"
                  value="gestao_produto"
                  className="selection-option"
                  onChange={(e) => setSelectionManagement(e.target.value)}
                />
                Gestão de Produto
              </label>
              <label>
                <input
                  type="radio"
                  name="selection"
                  value="juridico"
                  className="selection-option"
                  onChange={(e) => setSelectionManagement(e.target.value)}
                />
                Jurídico
              </label>
              <label>
                <input
                  type="radio"
                  name="selection"
                  value="sem_fins_lucrativos"
                  className="selection-option"
                  onChange={(e) => setSelectionManagement(e.target.value)}
                />
                Sem Fins Lucrativos
              </label>
            </div>
            <div className="create-account-pg3-inputs-selection-options">
              <label>
                <input
                  type="radio"
                  name="selection"
                  value="marketing"
                  className="selection-option"
                  onChange={(e) => setSelectionManagement(e.target.value)}
                />
                Marketing
              </label>
              <label>
                <input
                  type="radio"
                  name="selection"
                  value="financas"
                  className="selection-option"
                  onChange={(e) => setSelectionManagement(e.target.value)}
                />
                Finanças
              </label>
              <label>
                <input
                  type="radio"
                  name="selection"
                  value="ti"
                  className="selection-option"
                  onChange={(e) => setSelectionManagement(e.target.value)}
                />
                TI
              </label>
            </div>
            <div className="create-account-pg3-inputs-selection-options">
              <label>
                <input
                  type="radio"
                  name="selection"
                  value="design_criacao"
                  className="selection-option"
                  onChange={(e) => setSelectionManagement(e.target.value)}
                />
                Design e Criação
              </label>
              <label>
                <input
                  type="radio"
                  name="selection"
                  value="outro"
                  className="selection-option"
                  onChange={(e) => setSelectionManagement(e.target.value)}
                />
                Outro
              </label>
            </div>
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
