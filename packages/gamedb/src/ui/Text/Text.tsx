// @ts-nocheck
import React, { FC } from 'react'
import { Typography } from '@material-ui/core'
import styled, { css } from 'styled-components'

const thinCss = css`
  &{ font-weight: 300; }
`

const boldCss = css`
  &{ font-weight: 700; }
`

const paragraphCss = css`
  &{ margin-bottom: 0.7rem; }
`

const defaultCss = css`
  line-height: 1.2;
  font-size: 1rem;
  font-weight: 400;
  font-family: inherit !important;
  ${props => props.thin && thinCss};
  ${props => props.bold && boldCss};
  ${props => props.paragraph && paragraphCss};
  margin: 0;
  word-break: normal;
  color: ${p => (p.color ? p.color : p.theme.color.text)};
  ${props => props.withIcon && 'display: flex; align-items: center;'};
  text-align: start;
  @media screen and (min-width: 650px) and (max-width: 1500px) {
    flex-direction: column;
  }
  .MuiSvgIcon-root {
    margin-inline-end: 8px;
  }
`

const DefaultText = styled(({ bold, thin, withIcon, ...props }) => <Typography {...props} />)`
  ${defaultCss};
`

const SubText = styled(DefaultText)`
  opacity: 0.8;
  font-size: ${p => p.theme.fontSize.sub};
`

const Link = styled(DefaultText)`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  font-size: inherit;
  color: ${p => p.theme.color.link};
`

const Error = styled(DefaultText)`
  color: ${p => p.theme.color.red};
`

const Heading = styled(DefaultText)`
  margin: 0.2rem 0;
  font-weight: bold;
  color: ${p => (p.color ? p.color : p.theme.color.base)};
`

const Heading1 = styled(Heading)`
  line-height: 1.1;
  font-size: ${p => p.theme.fontSize.heading1};
`

const Heading2 = styled(Heading)`
  line-height: 1.1;
  font-size: ${p => p.theme.fontSize.heading2};
`

const Heading3 = styled(Heading)`
  line-height: 1.1;
  font-size: ${p => p.theme.fontSize.heading3};
`

const Heading4 = styled(Heading)`
  line-height: 1.1;
  font-size: ${p => p.theme.fontSize.heading4};
`

const Heading5 = styled(Heading)`
  line-height: 1.1;
  font-size: ${p => p.theme.fontSize.heading5};
`

const SubTitle = styled(Heading)``

const FormTitle = styled(DefaultText)`
  margin-bottom: 1rem;
  font-weight: bold;
  color: ${p => p.theme.color.primary};
`

const Heading6 = styled(Heading)`
  font-size: ${p => p.theme.fontSize.heading6};
`

const vars = {
  div: DefaultText,
  h1: Heading1,
  h2: Heading2,
  h3: Heading3,
  h4: Heading4,
  h5: Heading5,
  h6: Heading6,
  sub: SubText,
  subTitle: SubTitle,
  formTitle: FormTitle,
  error: Error,
  link: Link
} as const

export type IVariants = keyof typeof vars

const TextFactory = ({ variant, ...props }) => {
  console.log('--- Text.tsx -> TextFactory -> variant', variant)
  const Component = vars[variant] || DefaultText
  console.log('--- Text.tsx -> TextFactory -> Component', Component)
  return <Component {...props} />
}

interface Props {
  v?: IVariants
  component?: string
  thin?: boolean
  bold?: boolean
  paragraph?: boolean
}

const Text: FC<Props> = ({ v, ...props }) => <TextFactory {...props}  variant={v} />

Text.H1 = ({ v = 'h1', ...props }) => <TextFactory {...props} variant={v} />
Text.H2 = ({ v = 'h2', ...props }) => <TextFactory {...props} variant={v} />
Text.H3 = ({ v = 'h3', ...props }) => <TextFactory {...props} variant={v} />
Text.H4 = ({ v = 'h4', ...props }) => <TextFactory {...props} variant={v} />
Text.H5 = ({ v = 'h5', ...props }) => <TextFactory {...props} variant={v} />
Text.H6 = ({ v = 'h6', ...props }) => <TextFactory {...props} variant={v} />
Text.Sub = ({ v = 'sub', ...props }) => <TextFactory {...props} variant={v} />
Text.SubTitle = ({ v = 'subTitle', ...props }) => <TextFactory {...props} variant={v} />
Text.FormTitle = ({ v = 'formTitle', ...props }) => <TextFactory {...props} variant={v} />
Text.Link = ({ v = 'link', ...props }) => <TextFactory {...props} variant={v} />
Text.Error = ({ v = 'error', ...props }) => <TextFactory {...props} variant={v} />

Text.H1.displayName = 'Heading1'
Text.H2.displayName = 'Heading2'
Text.H3.displayName = 'Heading3'
Text.H4.displayName = 'Heading4'
Text.H5.displayName = 'Heading5'
Text.H6.displayName = 'Heading6'
Text.Sub.displayName = 'SubText'
Text.SubTitle.displayName = 'SubTitle'
Text.FormTitle.displayName = 'FormTitle'
Text.Link.displayName = 'Link'
Text.Error.displayName = 'Error'

export default Text as any
