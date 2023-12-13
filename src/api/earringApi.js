import axiosApi from "./axiosApi";

const earringApi = {
  getAll(params) {
    const url = "/products_earring";
    return axiosApi.get(url, { params: params });
  },
  get(id) {
    const url = `/products_earring/${id}`;
    return axiosApi.get(url);
  },
  add(data) {
    const url = "/products_earring";
    return axiosApi.post(url, data);
  },
  update(data) {
    const url = `/products_earring/${data.id}`;
    return axiosApi.put(url, data);
  },
  remover(id) {
    const url = `/products_earring/${id}`;
    return axiosApi.delete(url);
  },
};
export default earringApi;
