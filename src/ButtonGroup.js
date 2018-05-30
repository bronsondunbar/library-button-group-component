import React, { Fragment } from 'react'

import ButtonGroupOptions from './buttonGroupOptionsContainer'

const ButtonGroupComponent = ({ buttonGroupData, handlebuttonGroupOptionClick }) => {

  let buttonGroup = buttonGroupData.map((buttonGroups, index) => {
    return (
      <ButtonGroupOptions
        key={index}
        buttonGroup={buttonGroups}
        buttonGroupOptions={buttonGroups.options}
        handlebuttonGroupOptionClick={handlebuttonGroupOptionClick} />
    )
  })

  return (
    <Fragment>
      {buttonGroup}
    </Fragment>
  )
}

export default ButtonGroupComponent