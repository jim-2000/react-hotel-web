import React from 'react'

const GridTwoLayout = ({firstLayout, SecondLayout,css}) => {
  return (
    <div className={css ? `${css}` : ` grid grid-cols-1 gap-y-3 gap-x-0 md:gap-y-0 md:gap-x-5 md:grid-cols-2 container`}>
        <div>
            {firstLayout}
        </div>
        <div>
            {SecondLayout}
        </div>
    </div>
  )
}

export default GridTwoLayout