import axiosClient from "./axiosClient";

const ratingApi = {
  async createRate(data) {
    try {
      const url = `vote/store`;
      const response = await axiosClient.post(url, data);

      if (response.status === 201) {
        return response.data;
      }
    } catch (e) {
      console.log("--------------- CreateRate@Error ", e);
    }
  },

  async getListRateByProducts(params) {
    try {
      const newParams = { ...params };
      const url = `vote/lists/?${params}`;
      const response = await axiosClient.get(url, params);

      if (response.status === 200) {
        return response.data;
      }
    } catch (e) {
      console.log("--------------- getRate@Error ", e);
    }
  },

  async updateRateByProducts(idVote, data) {
    try {
      const url = `vote/update/${idVote}`;
      const response = await axiosClient.put(url, data);

      if (response.status === 200) {
        return response.data;
      }
    } catch (e) {
      console.log("--------------- updateRate@Error ", e);
    }
  },
};

export default ratingApi;
