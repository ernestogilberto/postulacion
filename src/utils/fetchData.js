const BASE_API = 'https://www.theaudiodb.com/api/v1/json/2/'

export async function getData({dataType, query, id}) {
  const response = await fetch(`${BASE_API}${dataType}.php?${query}=${id}`)
  return await response.json()
}