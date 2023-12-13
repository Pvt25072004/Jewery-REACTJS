import axiosApi from "./axiosApi";

const accessoryApi = {
  getAll(params) {
    const url = "/products_accessory";
    return axiosApi.get(url, { params: params });
  },
  get(id) {
    const url = `/products_accessory/${id}`;
    return axiosApi.get(url);
  },
  add(data) {
    const url = "/products_accessory";
    return axiosApi.post(url, data);
  },
  update(data) {
    const url = `/products_accessory/${data.id}`;
    return axiosApi.put(url, data);
  },
  remover(id) {
    const url = `/products_accessory/${id}`;
    return axiosApi.delete(url);
  },
};
export default accessoryApi;
