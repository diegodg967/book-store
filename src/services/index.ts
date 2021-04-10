import Service from './apiConfig'

const Api = {
  getBooks: async (query: string): Promise<any> => {
    const response = await Service.get(`/volumes?q=${query}`)
    return response.data
  },
}

export default Api
