import React from 'react'
import PropTypes from 'prop-types'
import './radioGroup.scss'

export default function RadioGroup(props) {
  const { selected, onChange, text, value } = props
  const activeRadio = selected === value && 'activeRadio'
  const activeText = selected === value && 'activeText'

  return (
    <div className={`${activeRadio} modern-radio-container`} onClick={() => onChange(value)}>
      <div className={`radio-outer-circle ${value !== selected && 'unselected'}`}>
        <div className={`radio-inner-circle ${value !== selected && 'unselected-circle'}`}/>
      </div>
      <div className={`${activeText} helper-text`}>{text}</div>
    </div>
  )
}

RadioGroup.propTypes = {
  text: PropTypes.node.isRequired,
  onChange: PropTypes.func.isRequired,
  selected: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
}
