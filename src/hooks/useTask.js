import { useEffect, useState } from 'react'

export const useFetch = (url) => {
  const [data, setData] = useState()
  const [error, setError] = useState()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch(url)
      .then((response) => response.json())
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false))
  }, [url])

  const add = (data) => {
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false))
    window.location.reload(true)
  }

  const remove = (data) => {
    fetch(url + '/' + data.id, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false))
    window.location.reload(true)
  }

  return { data, error, loading, add, remove }
}
