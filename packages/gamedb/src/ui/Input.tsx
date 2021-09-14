import React, { FC } from 'react'
import styled from 'styled-components'
import { TextField, BaseTextFieldProps } from '@material-ui/core'

interface Props extends Omit<BaseTextFieldProps, 'placeholder'> {
  placeholder?: string | number
}

// @ts-ignore
const Input: FC<Props> = props => <TextField variant='outlined' {...props} />

export default Input
