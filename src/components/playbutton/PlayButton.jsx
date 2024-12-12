import "./playbutton.css"
import "./variants.css"

function PlayButton({className}) {
  return (
    <div className={`playbutton ${className ? className : ''}`}>
      <div className="inner-playbutton">

      </div>
    </div>
  )
}

export default PlayButton;