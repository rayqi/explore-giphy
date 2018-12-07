import React from 'react'

//When there are no images from search filters, mount default gif
export default () => {
    return (<div className="default-result container flex-center flex-column">
        <img id="no-result-image" className='giphy-image responsive-img' cross-origin="anonymous" alt="gif" src="https://media.giphy.com/media/4eoO0NSdNY11K/giphy.gif"></img>
        <div className="default-line">OOPS! WE ARE OUT OF IMAGES. PLEASE SEARCH AGAIN. </div>
        <div className="default-line">IN THE MEANTIME, LETS LISTEN TO PHOEBE UNTIL THEN.</div>
    </div>)
}

