import React, { FC } from 'react'
import styled from 'styled-components'

import MdEditor, { bold, italic, ICommand, TextAreaTextApi, TextState } from '@uiw/react-md-editor'
import RedoSharp from '@material-ui/icons/RedoSharp'

const NewLine = styled(RedoSharp)`
  font-size: 14px !important;
  transform: rotate(90deg);
`

const newLine: ICommand = {
  name: 'newLine',
  keyCommand: 'newLine',
  buttonProps: { 'aria-label': 'Insert line breaker', title: 'Insert line breaker' },
  icon: <NewLine />,
  execute: (state: TextState, api: TextAreaTextApi) => {
    let modifyText = `${state.selectedText}  \n`;
    if (!state.selectedText) {
      modifyText = `  \n`;
    }
    api.replaceSelection(modifyText);
  },
}

const StyledEditor = styled(MdEditor)`
  border-radius: 8px;
`

interface Props {
  value?: any
  onChange: any
}

const Editor: FC<Props> = ({ value = '', onChange }) => {
  
  const change = (v: any) => {
    onChange(v.replace(/(\S)\n/g, '$1  \n'))
  }
  
  return (
    <StyledEditor
      value={value}
      onChange={change}
      commands={[bold, italic, newLine]}
    />
  )
}

export default Editor
