import React, { useState } from 'react'

interface IVoteCount {
  [flavor: string]: number
}

function formatPercentage(percent: number): string {
  return `${(percent * 100).toFixed(2)}%`
}

function Votes() {
  const [voteCount, setVoteCount] = useState<IVoteCount>({
    chocolate: 0,
    vanilla: 0,
    strawberry: 0,
  })
  const [totalVotes, setTotalVotes] = useState<number>(0)

  const handleVoteClick = (flavorName: string) => {
    const updatedValue = voteCount
    updatedValue[flavorName] = voteCount[flavorName] + 1

    const updatedTotal = Object.values(updatedValue).reduce((total, votes) => total + votes, 0)

    setVoteCount(updatedValue)
    setTotalVotes(updatedTotal)
  }

  return (
    <div className='container'>
      <h1 className='fancy-font'>Vote Here</h1>
      <div className='button-row'>
        <button name='chocolate' onClick={e => handleVoteClick(e.currentTarget.name)}>
          Chocolate
        </button>
        <button name='vanilla' onClick={e => handleVoteClick(e.currentTarget.name)}>
          Vanilla
        </button>
        <button name='strawberry' onClick={e => handleVoteClick(e.currentTarget.name)}>
          Strawberry
        </button>
      </div>
      <div>
        <div>
          {voteCount?.chocolate > 0 && (
            <>
              <p>
                Chocolate: {voteCount?.chocolate} ({formatPercentage(voteCount?.chocolate / totalVotes)})
              </p>
              <div
                className='chocolate-bar'
                style={{ width: formatPercentage(voteCount?.chocolate / totalVotes) }}
              ></div>
            </>
          )}
          {voteCount?.vanilla > 0 && (
            <>
              <p>
                Vanilla: {voteCount?.vanilla} ({formatPercentage(voteCount?.vanilla / totalVotes)})
              </p>
              <div className='vanilla-bar' style={{ width: formatPercentage(voteCount?.vanilla / totalVotes) }}></div>
            </>
          )}
          {voteCount?.strawberry > 0 && (
            <>
              <p>
                Strawberry: {voteCount?.strawberry} ({formatPercentage(voteCount?.strawberry / totalVotes)})
              </p>
              <div
                className='strawberry-bar'
                style={{ width: formatPercentage(voteCount?.strawberry / totalVotes) }}
              ></div>
            </>
          )}
          {totalVotes === 0 && <p>No Votes Yet</p>}
        </div>
      </div>
    </div>
  )
}

export default Votes
