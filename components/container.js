import React from 'react'

const Container = props => {
  return (
    <div
      className={`container max-w-screen-xl p-8 mx-auto xl:px-0 ${
        props.className ? props.className : ''
      }`}
    >
      {props.children}
    </div>
  )
}

export default Container
