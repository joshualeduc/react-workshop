import React, { useState } from 'react'

const lightTheme = {
  height: '100px',
  width: '200px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderStyle: 'solid',
  padding: '20px',
  flexDirection: 'column' as 'column', // why does typescript require 'column' as 'column' for flexDirection?
  boxShadow: '0 3px 10px rgb(0 0 0 / 0.7)',
  borderColor: '#222',
  color: '#000',
}

const darkTheme = {
  height: '100px',
  width: '200px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderStyle: 'solid',
  padding: '20px',
  flexDirection: 'column' as 'column', // why does typescript require 'column' as 'column' for flexDirection?
  boxShadow: '0 3px 10px rgb(0 0 0 / 0.7)',
  borderColor: '#fff',
  backgroundColor: '#222',
  color: '#fff',
}

const activeButton = {
  backgroundColor: 'gray',
}

interface IAdData {
  flavor: string
  isLight: boolean
  fontSize: number
}

function AdDesigner() {
  const [adData, setAdData] = useState<IAdData>({
    flavor: 'chocolate',
    isLight: true,
    fontSize: 16,
  })

  const handleFlavorSelection = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault()
    const { name } = event.currentTarget

    setAdData({ ...adData, flavor: name })
  }

  const handleThemeSelection = (theme: boolean) => {
    setAdData({ ...adData, isLight: theme })
  }

  const handleFontSizeChange = (increment: number) => {
    setAdData(prev => ({
      ...adData,
      fontSize: prev?.fontSize + increment,
    }))
  }

  return (
    <div className='container'>
      <h1 className='fancy-font'>Ad Designer</h1>
      <div style={adData?.isLight ? lightTheme : darkTheme}>
        <p>Vote For</p>
        <p style={{ fontSize: adData?.fontSize, margin: '0 8px' }} className='fancy-font'>
          {adData?.flavor}
        </p>
      </div>
      <div>
        <h2>What to Support</h2>
        <div className='button-row'>
          {/*Do I need to add : React.MouseEvent<HTMLButtonElement, MouseEvent> inline to these onClick arrow functions? */}
          <button
            name='chocolate'
            onClick={event => handleFlavorSelection(event)}
            style={adData?.flavor === 'chocolate' ? activeButton : undefined}
          >
            Chocolate
          </button>
          <button
            name='vanilla'
            onClick={event => handleFlavorSelection(event)}
            style={adData?.flavor === 'vanilla' ? activeButton : undefined}
          >
            Vanilla
          </button>
          <button
            name='strawberry'
            onClick={event => handleFlavorSelection(event)}
            style={adData?.flavor === 'strawberry' ? activeButton : undefined}
          >
            Strawberry
          </button>
        </div>
      </div>
      <div>
        <h2>Color Theme</h2>
        <div className='button-row'>
          <button
            onClick={() => handleThemeSelection(true)}
            style={adData?.isLight === true ? activeButton : undefined}
          >
            Light
          </button>
          <button
            onClick={() => handleThemeSelection(false)}
            style={adData?.isLight === false ? activeButton : undefined}
          >
            Dark
          </button>
        </div>
      </div>
      <div>
        <h2>Font Size</h2>
        <div className='button-row'>
          <button onClick={() => handleFontSizeChange(-1)}>Down</button>
          <p>{adData?.fontSize}</p>
          <button onClick={() => handleFontSizeChange(1)}>Up</button>
        </div>
      </div>
    </div>
  )
}

export default AdDesigner
