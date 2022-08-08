import axios from 'axios';
const getData = async () => {
  await axios
    .get('https://viacep.com.br/ws/92200700/json/')
    .then((resposen) => console.log(resposen.data));
};
const data = getData();
console.log(data);
type User = { username: string; password: string };

export default 1;
