import React from 'react'

export default () => {
    return (<div className="default-result container flex-center flex-column">
        <img id="no-result-image" className='giphy-image responsive-img' cross-origin="anonymous" alt="gif" src="https://media.giphy.com/media/4eoO0NSdNY11K/giphy.gif"></img>
        <div className="default-line">OOPS! WE ARE OUT OF IMAGES. PLEASE SEARCH AGAIN. </div>
        <div className="default-line">IN THE MEANTIME, LETS LISTEN TO PHOEBE UNTIL WE SEARCH AGAIN.</div>
    </div>)
}

