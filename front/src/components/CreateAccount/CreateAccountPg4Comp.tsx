import './CreateAccountPg4Comp.scss';
import Image from '../../assets/createAccountPg4.png';
import Logo from '../../assets/logo-azul.png';

interface CreateAccountPg4CompProps {
  selectionPriority: string;
  setSelectionPriority: (value: string) => void;
  name: string;
  password: string;
  accountName: string;
  selectionAccountType: string;
  selectionManagement: string;
  isButtonEnabled: boolean;
  onSubmit: () => void;
}

export function CreateAccountPg4Comp({
  setSelectionPriority,
  isButtonEnabled,
  onSubmit,
}: CreateAccountPg4CompProps) {
  // const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  // useEffect(() => {
  //   if (selectionPriority) {
  //     setIsButtonEnabled(true);
  //   } else {
  //     setIsButtonEnabled(false);
  //   }
  // }, [selectionPriority]);

  return (
    <div className="create-account-pg4-page">
      <div className="create-account-pg4-container">
        <div className="create-account-pg4-content">
          <div className="create-account-pg4-logo">
            <img src={Logo} alt="Logo" />
          </div>
          <div className="create-account-pg4-inputs">
            <h1>Qual sua prioridade?</h1>
            <div className="create-account-pg4-inputs-selection-options">
              <label>
                <input
                  type="radio"
                  name="selection"
                  value="educacao"
                  className="selection-option"
                  onChange={(e) => setSelectionPriority(e.target.value)}
                />
                Gestão de Recursos
              </label>
              <label>
                <input
                  type="radio"
                  name="selection"
                  value="desenvolvimento_software"
                  className="selection-option"
                  onChange={(e) => setSelectionPriority(e.target.value)}
                />
                CRM
              </label>
              <label>
                <input
                  type="radio"
                  name="selection"
                  value="construcao_civil"
                  className="selection-option"
                  onChange={(e) => setSelectionPriority(e.target.value)}
                />
                Gestão de Tarefas
              </label>
            </div>
            <div className="create-account-pg4-inputs-selection-options">
              <label>
                <input
                  type="radio"
                  name="selection"
                  value="rh_recrutamento"
                  className="selection-option"
                  onChange={(e) => setSelectionPriority(e.target.value)}
                />
                Operações de Marketing
              </label>
              <label>
                <input
                  type="radio"
                  name="selection"
                  value="gestao_produto"
                  className="selection-option"
                  onChange={(e) => setSelectionPriority(e.target.value)}
                />
                Processos Operacionais
              </label>
            </div>
            <div className="create-account-pg4-inputs-selection-options">
              <label>
                <input
                  type="radio"
                  name="selection"
                  value="juridico"
                  className="selection-option"
                  onChange={(e) => setSelectionPriority(e.target.value)}
                />
                Metas e Estratégias
              </label>
              <label>
                <input
                  type="radio"
                  name="selection"
                  value="sem_fins_lucrativos"
                  className="selection-option"
                  onChange={(e) => setSelectionPriority(e.target.value)}
                />
                Gestão de Projetos
              </label>
              <label>
                <input
                  type="radio"
                  name="selection"
                  value="outro"
                  className="selection-option"
                  onChange={(e) => setSelectionPriority(e.target.value)}
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

      <div className="create-account-pg4-next">
        <button
          disabled={!isButtonEnabled}
          onClick={onSubmit}
        >
          Concluir
        </button>
      </div>
    </div>
  );
}
