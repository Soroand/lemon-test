import React from 'react'
import SelectDropdown from 'atoms/SelectDropdown'

const SettingsRegionDropdown = ({
  fieldTitle,
  selectItems,
  defaultSelection,
  setSelection,
}) => {
  return (
    <SelectDropdown
      title={fieldTitle}
      textSize={'15@ms'}
      textColor={'#242E29'}
      marginT={'20@ms'}
      data={selectItems}
      value={defaultSelection}
      setValue={setSelection}
      customPlaceholderStyles={{ opacity: 0.3 }}
      dropdownBtnStyle={{ borderWidth: 0 }}
    />
  )
}

export default SettingsRegionDropdown
