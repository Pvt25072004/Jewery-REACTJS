import axiosApi from "./axiosApi";

const necklaceApi = {
  getAll(params) {
    const url = "/products_necklace";
    return axiosApi.get(url, { params: params });
  },
  get(id) {
    const url = `/products_necklace/${id}`;
    return axiosApi.get(url);
  },
  add(data) {
    const url = "/products_necklace";
    return axiosApi.post(url, data);
  },
  update(data) {
    const url = `/products_necklace/${data.id}`;
    return axiosApi.put(url, data);
  },
  remover(id) {
    const url = `/products_necklace/${id}`;
    return axiosApi.delete(url);
  },
};
export default necklaceApi;
