import React, {useState, useEffect} from 'react'
import './Main.css'

const Main = () => {
  const [packages, setPackages] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const apiUrlPackages = 'https://apis.ccbp.in/tg/packages'

  useEffect(() => {
    fetch(apiUrlPackages)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch data')
        }
        return response.json()
      })
      .then(data => {
        setPackages(data.packages)
        setLoading(false)
      })
      .catch(error => {
        setError(error.message)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <div data-testid="loader">
        <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
      </div>
    )
  }

  if (error) {
    return <div className="error">Error: {error}</div>
  }

  return (
    <main className="main">
      <h1>Travel Guide</h1>

      <ul className="packages-list">
        {packages.map(pkg => (
          <li key={pkg.id} className="package-item">
            <img src={pkg.image_url} alt={pkg.name} className="package-image" />

            <h2 className="package-title">{pkg.name}</h2>

            <p className="package-description">{pkg.description}</p>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default Main
