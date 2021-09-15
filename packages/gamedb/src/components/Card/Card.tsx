import React, { FC } from 'react'
import styled from 'styled-components'

import MDEditor from '@uiw/react-md-editor'
import StarIcon from '@material-ui/icons/Star'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'

import type { ICard, ICostColors } from 'types/ICard'
import { Row, Space } from 'ui'
import { CostColors } from 'types/ICard'

const W = 18
const H = W * 1.57

const CardContainer = styled.div`
  width: ${W}rem;
  height: ${H}rem;
  box-shadow: 0 2px 10px -4px rgba(0,0,0,0.2);
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
`

const Top = styled(Row)`
  padding: 0.5rem 1rem;
`

const Name = styled.b`

`

const Type = styled.div`
  font-style: italic;
  font-size: 0.9rem;
`

const ImgWrap = styled.div`
  width: ${W}rem;
  height: ${W*3/4}rem;
`

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const Content = styled.div`
  padding: 1rem;
  flex: 1;
`

const ContentItem = styled.div`
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
`

const Traits = styled.div`
  margin-bottom: 0.5rem;
  text-align: center;
`

const Command = styled.div`
  width: 2rem;
  height: 2rem;
  color: white;
  background: gray;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`

const Attack = styled.div`
  padding: 0.66rem;
  font-size: 1.8rem;
  color: white;
  background:#bc4141;
`

const Hp = styled.div`
  padding: 0.66rem;
  font-size: 1.8rem;
  color: white;
  background: #5f6bd4;
`

const Cost = styled.div`
  display: flex;
  align-items: center;
`

const CostIcon = styled(FiberManualRecordIcon)`
  color: ${props => CostColors[(props.color as keyof ICostColors)]};
  :not(:last-child) {
    margin-right: -5px !important;
  }
`

const CostColor = (color: any, count: number): any => [...new Array(count)].map((_, i) => <CostIcon key={color+i} color={color} />)

const Unique = styled(StarIcon)`
  font-size: 0.8rem !important;
`

function capitalize(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

interface Props {}

const Card: FC<Props & ICard> = ({ _id, data, meta }) => {
  const { name, traits, img, description, cost, command, attack, hp, type, unique } = data
  
  return (
    <CardContainer>
      <Top justify='start'>
        <div>
          <Name>{unique && <Unique />} {name}</Name>
          <Type>{capitalize(type)}</Type>
        </div>
        <Space grow />
        <Cost>{Object.entries(cost).reduce((arr, [key, value]) => arr.concat(...(CostColor(key, value))), [])}</Cost>
      </Top>
      <ImgWrap>
        <Img src={img} alt='' height={W*3/4}/>
      </ImgWrap>
      <Content>
        <Traits>{traits.map((t,i) => <i key={t+i}>{t + ' '}</i>)}</Traits>
        <ContentItem><MDEditor.Markdown source={description} /></ContentItem>
      </Content>
      <Bottom>
        {Number.isInteger(attack) && <Attack>{attack}</Attack>}
        {Number.isInteger(command) && <Command>{command}</Command>}
        {Number.isInteger(hp) && <Hp>{hp}</Hp>}
      </Bottom>
    </CardContainer>
  )
}

export default Card
