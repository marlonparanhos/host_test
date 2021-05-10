import React from 'react'
import PropTypes from 'prop-types'

import './styles.scss'

export default function RadioGroup(props) {
  const { selected, onChange, options } = props

  return (
    <div className="radioGroupBack">
      {options.map((item, index) => {
        const activeRadio = selected === item && 'activeRadio'
        const activeText = selected === item && 'activeText'

        return (
          <div key={index} className={`${activeRadio} radioContainer`} onClick={() => onChange(item)}>
            <div className={`outerCircle ${item !== selected && 'unselected'}`}>
              <div className={`innerCircle ${item !== selected && 'unselectedCircle'}`}/>
            </div>
            <div className={`${activeText} helperText`}>{item}</div>
          </div>
        )
      })}
    </div>
  )
}

RadioGroup.propTypes = {
  onChange: PropTypes.func.isRequired,
  selected: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired
}
