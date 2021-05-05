const fetchData = async (arg) => {
  const res = await fetch(arg);
  const result = await res.json();
  return result;
};

const getAccounts = () => fetchData('/accounts');

// const test = () => fetchData('/photostudios');

export default getAccounts;
