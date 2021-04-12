import Service from './apiConfig'

const Api = {
  getBooks: async (query: string, startIndex: number): Promise<any> => {
    const response = await Service.get(`/volumes?q=${query}&startIndex=${startIndex}`)
    return response.data
  },
  getBook: async (id: string,): Promise<any> => {
    const response = await Service.get(`/volumes/${id}`)
    return response.data
  },
}

export default Api
