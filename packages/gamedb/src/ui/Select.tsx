import React, { FC } from 'react'
import styled from 'styled-components'
import { Select as MUISelect, FormControl, InputLabel, FormHelperText } from '@material-ui/core'
import MenuItem from '@material-ui/core/MenuItem';

const Error = styled(FormHelperText)`
  margin: 3px 14px 0 !important;
`

interface Props {
  options: ({ value: string | number, label: string | number})[]
  label?: string | number
}

const Select: FC<Props & any> = ({ options, label, error, helperText, onClear, ...rest }) => {
  return (
    <FormControl>
      <InputLabel variant='outlined'>{label}</InputLabel>
      <MUISelect variant='outlined' label={label} error={error} {...rest}>
        {options.map(({ value, label }: { value: any, label: any  }) => <MenuItem key={value} value={value}>{label}</MenuItem>)}
      </MUISelect>
      {helperText && <Error error={error}>{helperText}</Error>}
    </FormControl>
  )
}

export default Select
