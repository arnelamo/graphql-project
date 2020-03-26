import React, { useContext } from 'react'
import { Context } from '../store/Store'
import { findString } from '../utils/helpers'

const Console = () => {
  const [state] = useContext(Context)
  const {currentBook, operation} = state

  const renderOperation = () => {
    if (operation) {
      const string = findString(currentBook, operation)
      return (
        <div>
          <pre>{string}</pre>
        </div>
      )
    } else {
      return null
    }
  }

  return (
    <div id="console">
      <h2>GraphQL operation executed:</h2>
      {renderOperation()}
    </div>
  )
}

export default Console