import React, { FC, useRef } from 'react'
import styled from 'styled-components'

import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

const modules = {
  toolbar: ['bold', 'italic']
}

const formats = ['bold', 'italic']

interface Props {
  value?: any
  onChange: any
}

const StyledEditor = styled(ReactQuill)`
  .ql-toolbar.ql-snow {
    border-radius: 8px 8px 0 0;
  }
  .ql-toolbar.ql-snow + .ql-container.ql-snow {
    border-radius: 0 0 8px 8px;
  }
  .ql-editor {
    min-height: 6rem;
  }
`

const Editor: FC<Props> = ({ value = '', onChange }) => {
  return (
    <StyledEditor
      defaultValue={value}
      formats={formats}
      modules={modules}
      onChange={onChange}
    />
  )
}

export default Editor
