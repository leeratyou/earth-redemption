import React, { FC, useEffect, useState } from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react-lite'

import { Button, Divider, Typography, Switch, FormControlLabel, InputAdornment } from '@material-ui/core'
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete'

import { inputsHasError, useInput } from 'utils/hooks'
import { isNotEmpty, withError } from 'utils/validation'

import { Input, Row, Select, Space } from 'ui'
import { ArmyType, CardStatus, CardType, CostColors, IArmyType, IArmyTypeValue, ICard, ICardType, ICardTypeValue } from 'types/ICard'
import { useStore } from 'store'
import Editor from 'components/Editor'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'

const Form = styled.div`
  display: flex;
  flex-direction: column;
  > div, .MuiFormControlLabel-root {
    margin-bottom: 1rem;
  }
`

const filter = createFilterOptions()
const filterOptions = (options: any, params: any) => {
  const filtered = filter(options, params)
  if (params.inputValue !== '') {
    filtered.push(`Add "${params.inputValue}"`)
  }
  return filtered
}

const isNotEmptyText = withError(isNotEmpty, 'Input is empty')

function formatCost(cost: number) {
  if (cost >= 0) return cost
  return 0
}

interface Props {
  onSubmit: (formData: any) => void
  onClose: () => void
  edit?: boolean
  card?: ICard
}

const CardForm: FC<Props> = ({ edit, onSubmit, onClose, card }) => {
  
  const {
    cardsStore: { traits: existingTraits },
    userStore: { userId }
  } = useStore()
  
  const name = useInput({
    label: 'Name',
    value: card?.data.name || '',
    placeholder: 'Overpowered drone from outer space',
    validation: isNotEmptyText,
    fullWidth: true
  })
  
  const [ unique, setUnique ] = useState(card?.data.unique || false)
  
  const army = useInput<IArmyTypeValue>({
    label: 'Army',
    value: card?.data.army,
    validation: isNotEmptyText,
    options: Object.entries(ArmyType).map(([key, value]) => ({ value: value, label: key }))
  })
  
  const type = useInput<ICardTypeValue>({
    label: 'Type',
    value: card?.data.type,
    validation: isNotEmptyText,
    options: Object.entries(CardType).map(([key, value]) => ({ value: value, label: key }))
  })
  
  const img = useInput({
    label: 'Image link',
    value: card?.data.img,
    validation: isNotEmptyText,
    placeholder: 'Some url to not proprietary image'
  })
  
  const [ description, setDescription ] = useState(card?.data.description)
  
  const [ traits, setTraits ] = useState<string[]>(card?.data.traits || [])
  const handleTraits = (v: string[]) => setTraits(v.map(t => t.replace(/(Add |")/g, '')))
  
  const attack = useInput<number>({
    label: 'Attack',
    type: 'number',
    value: card?.data.attack,
    placeholder: 0
  })
  
  const hp = useInput<number>({
    label: 'Hp',
    type: 'number',
    value: card?.data.hp,
    placeholder: 0
  })
  
  const command = useInput<number>({
    label: 'Command',
    type: 'number',
    value: card?.data.command,
    placeholder: 0
  })
  
  const tags = useInput<string[]>({
    label: 'Tags',
    value: card?.meta.tags,
    placeholder: `e.g. 'experimental' or 'blocker'`
  })
  
  const red = useInput<number>({
    label: 'Material cost',
    type: 'number',
    placeholder: 0,
    value: card?.data.cost.materials,
    format: formatCost,
    InputProps: {
      endAdornment: (
        <InputAdornment position="end">
          <FiberManualRecordIcon style={{color: CostColors.materials }} />
        </InputAdornment>
      )
    }
  })
  
  const green = useInput<number>({
    label: 'Manpower cost',
    type: 'number',
    placeholder: 0,
    value: card?.data.cost.manpower,
    format: formatCost,
    InputProps: {
      endAdornment: (
        <InputAdornment position="end">
          <FiberManualRecordIcon style={{color: CostColors.manpower }} />
        </InputAdornment>
      )
    }
  })
  
  const blue = useInput<number>({
    label: 'Energy cost',
    type: 'number',
    placeholder: 0,
    format: formatCost,
    value: card?.data.cost.energy,
    InputProps: {
      endAdornment: (
        <InputAdornment position="end">
          <FiberManualRecordIcon style={{color: CostColors.energy }} />
        </InputAdornment>
      )
    }
  })
  
  const gray = useInput<number>({
    label: 'Any cost',
    type: 'number',
    placeholder: 0,
    format: formatCost,
    value: card?.data.cost.any,
    InputProps: {
      endAdornment: (
        <InputAdornment position="end">
          <FiberManualRecordIcon style={{color: CostColors.any }} />
        </InputAdornment>
      )
    }
  })
  
  const submit = () => {
    if (!inputsHasError([name, type, army, img])) {
      const card: Omit<ICard, '_id'> = {
        data: {
          name: name.value,
          unique: unique,
          cost: { materials: red.value || 0, manpower: green.value || 0, energy: blue.value || 0, any: gray.value || 0 },
          type: type.value,
          army: army.value,
          traits: traits,
          img: img.value,
          description: description,
          attack: attack.value,
          hp: hp.value,
          command: command.value,
        },
        meta: {
          author: userId!,
          status: CardStatus.Pending,
          tags: tags.value
        }
      }
      onSubmit(card)
    }
  }
  
  return (
    <Form>
      <Divider />
      <Space height={0.2} />
      <Typography variant='h6'>Card main data</Typography>
      <Space height={0.33} />
      <Row>
        <Input {...name} />
        <Space width={1} />
        <FormControlLabel
          // @ts-ignore
          control={<Switch checked={unique} onChange={e => setUnique(e.target.checked)} />}
          label="Unique"
        />
      </Row>
      <Select {...army} />
      <Select {...type} />
      <Row>
        <Input {...red} />
        <Space width={1} />
        <Input {...green} />
        <Space width={1} />
        <Input {...blue} />
      </Row>
      <Autocomplete
        options={existingTraits}
        multiple
        value={traits}
        onChange={(e, v: any[]) => handleTraits(v)}
        // @ts-ignore
        renderInput={(params) => <Input {...params} placeholder="e.g. 'AI' or 'Spell'" label='Traits' />}
        filterOptions={filterOptions}
      />
      <Input {...img} />
      <Editor value={description} onChange={setDescription} />
      {type.value === CardType.Unit && (
        <Row>
          <Input {...attack} />
          <Input {...command} />
          <Input {...hp} />
        </Row>
      )}
      <Divider />
      <Space height={0.2} />
      <Typography variant='h6'>Card meta</Typography>
      <Space height={0.33} />
      <Input {...tags} />
      <Divider />
      <Space height={0.33} />
      <Row justify='end'>
        <Button variant='contained' color='secondary' onClick={submit}>Ok</Button>
        <Space width={1} />
        <Button variant='contained' onClick={onClose}>Cancel</Button>
      </Row>
    </Form>
  )
}

export default observer(CardForm)
