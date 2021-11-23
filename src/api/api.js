const Api = {
    apiUrl: 'https://todo022-backend.herokuapp.com',
    fetchGetAll: () => fetch(Api.apiUrl),
    fetchGetById: (id) => fetch(`${Api.apiUrl}/${id}`),
    fetchPost: (data) => {
      return fetch(`${Api.apiUrl}/add`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: new Headers({
          "Content-Type": "application/json"
        })
      })
    },
    fetchPut: (todo, id) => {
      return fetch(`${Api.apiUrl}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(todo),
        headers: new Headers({
          "Content-type": "application/json"
        })
      })
    },
    fetchDelete: (id) => {
      return fetch(`${Api.apiUrl}/${id}`, {
        method: 'DELETE'
      })
    }
  }
  
  export default Api;