import './index.css'

const HistoryList = props => {
  const {suggestionDetails, deleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = suggestionDetails

  const onDeleteHistory = () => {
    deleteHistory(id)
  }

  return (
    <li className="list-item">
      <div className="time-logo-container">
        <p className="time">{timeAccessed}</p>
        <div className="logo-name-container">
          <img alt="domain logo" className="icon" src={logoUrl} />
          <p className="title">{title}</p>
          <p className="domainUrl">{domainUrl}</p>
        </div>
      </div>

      <button
        testid="delete"
        type="button"
        className="delete-button"
        onClick={onDeleteHistory}
      >
        <img
          alt="delete"
          className="delete-icon"
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
        />
      </button>
    </li>
  )
}

export default HistoryList
