import { useState, useEffect } from 'react'
import { findInvalid, hasError } from 'utils/validation'
import { Dict } from 'types'

export interface UseInputProps<T> {
  value?: T
  label?: string
  onChange?: (value: any) => void
  onFocus?: () => void
  type?: string
  validation?: any
  errorText?: string
  placeholder?: string | number
  helperText?: string
  icon?: string
  options?: any[]
  translation?: (value: any) => any
  format?: (value: any) => any
}

export function useInput<T = string>(props: (UseInputProps<T> & Dict) = {}) {
  let {
    value: initValue = '',
    label,
    onChange,
    onFocus,
    type = 'text',
    validation = () => true,
    errorText,
    placeholder = '',
    helperText,
    icon,
    options,
    translation = input => input,
    format = input => input,
    ...rest
  } = props
  const [ error, setError ] = useState(translation(errorText))
  const [ input, setInput ] = useState<T | string>(initValue)
  
  useEffect(() => {
    setInput(initValue);
  }, [ initValue ])
  
  const _validate = (value: any) => {
    const validationArray = Array.isArray(validation) ? validation : [validation]
    const error = translation(hasError(value, validationArray, true))
    setError(error)
    return error
  }
  
  const onClear = () => setInput('')
  
  if (typeof onFocus !== 'function') onFocus = () => setError('')
  
  const handleChange = (eventOrValue: any) => {
    const rawValue = eventOrValue?.target ? eventOrValue.target?.value : eventOrValue
    const value = format(rawValue)
    if (onChange) onChange(value)
    setInput(value)
  }
  
  return {
    value: input as T,
    type: type,
    label: label,
    placeholder: placeholder,
    icon: icon,
    error: !!error,
    helperText: error || helperText,
    onChange: handleChange,
    onFocus: onFocus,
    onClear: onClear,
    options,
    validate: () => _validate(input),
    ...rest
  }
}

export const inputsHasError = (inputs: any[]) => {
  const i = inputs.map((input: any) => input.validate())
  return i.findIndex((input: any) => input) !== -1
}
