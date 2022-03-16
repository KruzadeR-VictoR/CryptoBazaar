import React from 'react'
import styled from 'styled-components'

function ErrorPage() {
  return (
      <>
    <div>ErrorPage</div>
        <Error className='d-flex flex-column justify-center gap-y-5'>
        <div className='d-flex justify-center'><iframe title='myGif' src="https://giphy.com/embed/UoeaPqYrimha6rdTFV" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/STARFACE-GmbH-looping-404-starface-UoeaPqYrimha6rdTFV"> </a></p></div>
            <h1 className='text-center font-majorMonoDisplay text-3xl font-bold text-slate-500'>Page not Found</h1>
        </Error>
    </>
  )
}
//| styles

const Error=styled.div`
    height:100vh;
`

export default ErrorPage