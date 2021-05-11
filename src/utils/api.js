const fetchData = async (arg) => {
  const res = await fetch(arg);
  const result = await res.json();
  return result;
};

const fetchDataPost = async (url, obj) => {
  // const res = await fetch(url, {
  //   method: 'POST',
  //   body: data,
  // });
  // const result = await res.json();
  // console.log(result)
  // return result;
  // console.log(obj)

  // const data = new FormData();
  // data.append('json', JSON.stringify(obj));

  // console.log(data)
  console.log(url)
  await fetch(url, {
    method: 'POST',
    body: obj,
  });
  // const content = await rawResponse.json();

  // console.log(content);
};

const getAccounts = () => fetchData('/accounts');
const setAccount = (data) => fetchDataPost('/accounts', data);
const getPhotostuios = () => fetchData('/photostudios');

export {
  getAccounts,
  setAccount,
  getPhotostuios,
};
