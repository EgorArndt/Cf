export default async (...args) => {
  const res = await fetch(...args)
  return res.json()
}

// export default async (filters) => {
//   const data = await axios
//     .get('https://cf-endpoint-proxy.herokuapp.com/webapi/v1/stories', {
//       params: filters,
//     })
//     .then(res => res.data)
//     // console.log(data)
//     return data
// }
