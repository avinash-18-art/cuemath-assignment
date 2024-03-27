import React, {useState} from 'react'
import './App.css'

function App() {
  const [rookPosition, setRookPosition] = useState(63)

  const handleSquareClick = index => {
    const rookRow = Math.floor(rookPosition / 8)
    const clickedRow = Math.floor(index / 8)
    const rookCol = rookPosition % 8
    const clickedCol = index % 8

    if (index === rookPosition) return

    // Move down
    if (clickedCol === rookCol && clickedRow > rookRow) {
      setRookPosition(index)
    }
    // Move left
    else if (clickedRow === rookRow && clickedCol < rookCol) {
      setRookPosition(index)
    }
  }

  const renderChessboard = () => {
    const squares = []
    for (let i = 0; i < 64; i++) {
      const isLightSquare = (Math.floor(i / 8) + i) % 2 === 0
      const isRookSquare = i === rookPosition
      squares.push(
        <div
          key={i}
          className={`chess-square ${isLightSquare ? 'light' : 'dark'} ${
            isRookSquare ? 'rook' : ''
          }`}
          onClick={() => handleSquareClick(i)}
        />,
      )
    }
    return squares
  }

  return <div id="chessboard">{renderChessboard()}</div>
}

export default App
