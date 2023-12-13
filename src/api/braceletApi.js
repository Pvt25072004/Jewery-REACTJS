import axiosApi from "./axiosApi";

const braceletApi = {
  getAll(params) {
    const url = "/products_bracelet";
    return axiosApi.get(url, { params: params });
  },
  get(id) {
    const url = `/products_bracelet/${id}`;
    return axiosApi.get(url);
  },
  add(data) {
    const url = "/products_bracelet";
    return axiosApi.post(url, data);
  },
  update(data) {
    const url = `/products_bracelet/${data.id}`;
    return axiosApi.put(url, data);
  },
  remover(id) {
    const url = `/products_bracelet/${id}`;
    return axiosApi.delete(url);
  },
};
export default braceletApi;
