import './CreateAccountPg2Comp.scss';
import Image from '../../assets/createAccountPg2.png';
import Logo from '../../assets/logo-azul.png';
import { ButtonNext } from '../ButtonNext/ButtonNext';
import { useEffect, useState } from 'react';

interface CreateAccountPg2Props {
  selectionAccountType: string;
  setSelectionAccountType: (select: string) => void;
  onNext: () => void;
}

export function CreateAccountPg2Comp({
  selectionAccountType,
  setSelectionAccountType,
  onNext,
}: CreateAccountPg2Props) {
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  useEffect(() => {
    if (selectionAccountType) {
      setIsButtonEnabled(true);
    } else {
      setIsButtonEnabled(false);
    }
  }, [selectionAccountType]);

  return (
    <div className="create-account-pg2-page">
      <div className="create-account-pg2-container">
        <div className="create-account-pg2-content">
          <div className="create-account-pg2-logo">
            <img src={Logo} alt="Logo" />
          </div>
          <div className="create-account-pg2-inputs">
            <h1>
              Como o <span className="create-account-pg2-dini">Dini</span> pode
              te ajudar?
              <br />
            </h1>
            <div className="create-account-pg2-inputs-selection-options">
              <label>
                <input
                  type="radio"
                  name="selection"
                  value="profissional"
                  className="selection-option"
                  onChange={(e) => setSelectionAccountType(e.target.value)}
                />
                Profissional
              </label>
              <label>
                <input
                  type="radio"
                  name="selection"
                  value="pessoal"
                  className="selection-option"
                  onChange={(e) => setSelectionAccountType(e.target.value)}
                />
                Pessoal
              </label>
              <label>
                <input
                  type="radio"
                  name="selection"
                  value="educacional"
                  className="selection-option"
                  onChange={(e) => setSelectionAccountType(e.target.value)}
                />
                Educacional
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
