import React from 'react'

const RoomText = ({text}) => {
  return (
    <>
      <div    dangerouslySetInnerHTML={{__html: text ?? 'Description'}} />
    </>
  )
}

export default RoomText