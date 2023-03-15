import React from 'react'

const HeaderText = ({headertext,text}) => {
  return (
    <div>
        <p className="text-text lg:pb-12 pb-4 text-sm lg:text-base font-sans font-medium leading-10 text-center">
        {headertext}
      </p>
      <p className="text-headerText text-2xl lg:text-4xl font-sans font-medium leading-10 text-center">
        {text}
      </p>
    </div>
  )
}

export default HeaderText