import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://reqres.in',
});

const HttpService = {
  get: (path:string) => instance.get(path),
  post: (path:string, body:{}) => instance.post(path, body),
  put: (path:string, body:{}) => instance.put(path, body),
  delete: (path:string) => instance.delete(path),
};

export default HttpService
