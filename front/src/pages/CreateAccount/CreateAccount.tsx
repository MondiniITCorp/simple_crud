import { CreateAccountComp } from '../../components/Home/Home';
import { useState } from 'react';
import CryptoJS from 'crypto-js';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


export default function CreateAccount() {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || '';

  const [currentPage, setCurrentPage] = useState(1);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [accountName, setAccountName] = useState('');
  const [selectionAccountType, setSelectionAccountType] = useState('');
  const [selectionManagement, setSelectionManagement] = useState('');
  const [selectionPriority, setSelectionPriority] = useState('');

  const handleNext = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const encryptData = (data: string) => {
    const secretKey = 'bWF5a29uZWh2aWFkbzEyMwo='; // Use a secure key
    return CryptoJS.AES.encrypt(data, secretKey).toString();
  };

  const handleSubmit = async () => {
    const encryptedName = encryptData(name);
    const encryptedEmail = encryptData(email);
    const encryptedPassword = encryptData(password);
    const encryptedAccountName = encryptData(accountName);
    const encryptedSelectionAccountType = encryptData(selectionAccountType);
    const encryptedSelectionManagement = encryptData(selectionManagement);
    const encryptedSelectionPriority = encryptData(selectionPriority);

    try {
      await axios.post('http://localhost:3000/users', {
        name: encryptedName,
        email: encryptedEmail,
        password: encryptedPassword,
        accountName: encryptedAccountName,
        selectionAccountType: encryptedSelectionAccountType,
        selectionManagement: encryptedSelectionManagement,
        selectionPriority: encryptedSelectionPriority,
      });
      navigate('/login')
    } catch (error) {
      console.error('Error creating account:', error);
    }
  };

  return (
    <>
      {currentPage === 1 && (
        <CreateAccountComp
          name={name}
          password={password}
          accountName={accountName}
          setName={setName}
          setPassword={setPassword}
          setAccountName={setAccountName}
          onNext={handleNext}
        />
      )}

    </>
  );
}
