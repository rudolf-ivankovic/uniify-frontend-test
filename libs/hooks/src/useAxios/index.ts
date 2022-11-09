import axios from 'axios';

const useAxios = (baseUrl: string) => {
  const apiClient = axios.create({
    baseURL: `${baseUrl}/api/v1`,
  });

  return apiClient;
};

export default useAxios;
