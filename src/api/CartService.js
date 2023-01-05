import axiosClient from "./axiosClient";

const cartApi = {
  async getTransaction(params) {
    try {
      const newParams = { ...params };
      const url = `transaction/lists`;
      console.log("--------- newParams: ", newParams);
      const response = await axiosClient.get(url, {
        params: { ...newParams },
      });

      if (response.status === 200) {
        return response.data;
      }
    } catch (e) {
      console.log("--------------- getOrderList@Error ", e);
    }

    return {
      status: 501,
    };
  },
  async createTransaction(data) {
    try {
      const url = `transaction/create`;
      const response = await axiosClient.post(url, data);
      console.log("------------- createTransaction@response: ", response);
      if (response.status === 200 || response.status === 201) {
        return response.data;
      }
    } catch (e) {
      console.log("--------------- createTransaction@Error ", e);
    }

    return {
      status: 501,
    };
  },
  async deleteTransaction(id) {
    try {
      const url = `transaction/delete/${id}`;
      const response = await axiosClient.delete(url);
      console.log("------------- deleteTransaction@response: ", response);
      if (response.status === 200 || response.status === 201) {
        return response.data;
      }
    } catch (e) {
      console.log("--------------- deleteTransaction@Error ", e);
    }

    return {
      status: 501,
    };
  },
  async showTransaction(id) {
    try {
      const url = `transaction/show/${id}`;
      const response = await axiosClient.get(url);
      console.log("------------- showTransaction@response: ", response);
      if (response.status === 200 || response.status === 201) {
        return response.data;
      }
    } catch (e) {
      console.log("---------------showTransaction@Error ", e);
    }
  },
};

export default cartApi;
