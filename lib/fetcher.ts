export default function fetcher(url: string, data = undefined) {
  return fetch(`${window.location.origin}/api${url}`, {
    method: data ? 'POST' : 'GET',
    credentials: 'include',
    headers: {
      'Conent-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
}
