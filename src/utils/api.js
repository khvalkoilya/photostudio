const fetchData = async (arg) => {
  const res = await fetch(arg);
  const result = await res.json();
  return result;
};

const test = () => fetchData('/photostudios');

export default test;
