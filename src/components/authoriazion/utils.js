import { getAccounts } from '../../utils/api';
import ACCOUNTS_TEST from '../../variables/testAccounts';

async function fetchAccounts(setAccounts) {
  try {
    const response = await getAccounts();
    setAccounts(response);
  } catch (err) {
    setAccounts(ACCOUNTS_TEST);
    console.error(err.message);
  }
}

function handleEmail(e, setEmail) {
  setEmail(e.target.value);
}

function handlePassword(e, setPassword) {
  setPassword(e.target.value);
}

function handlePasswordFirst(e, setPasswordFirst) {
  setPasswordFirst(e.target.value);
}

function handlePasswordSecond(e, setPasswordSecond) {
  setPasswordSecond(e.target.value);
}

function showPassword(inputPassword) {
  inputPassword.current.type = 'text';
  setTimeout(() => {
    inputPassword.current.type = 'password';
  }, 1000);
}

export {
  fetchAccounts,
  handleEmail,
  handlePassword,
  handlePasswordFirst,
  handlePasswordSecond,
  showPassword,
}