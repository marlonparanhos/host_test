import React from 'react'
import PropTypes from 'prop-types'

import './styles.scss'

export default function RadioGroup(props) {
  const { selected, onChange, options } = props

  return (
    <div className="radio-group-back">
      {options.map((item, index) => {
        const activeRadio = selected === item && 'active-radio'
        const activeText = selected === item && 'active-text'

        return (
          <div key={index} className={`${activeRadio} radio-container`} onClick={() => onChange(item)}>
            <div className={`outer-circle ${item !== selected && 'unselected'}`}>
              <div className={`inner-circle ${item !== selected && 'unselected-circle'}`}/>
            </div>
            <div className={`${activeText} helper-text`}>{item}</div>
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
