import { FC, ChangeEvent, RefObject } from 'react'

import { withStyles, WithStylesProps } from '@hocs'

export type CheckboxProps = {
  checked?: boolean
  id?: string
  value?: string | number
  disabled?: boolean
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  componentRef?: RefObject<HTMLInputElement>
}

export type EnhancedCheckboxProps = CheckboxProps & WithStylesProps

const _Checkbox: FC<CheckboxProps> = ({
  id,
  componentRef,
  ...props
}: CheckboxProps) => (
  <input type='checkbox' id={id} name={id} ref={componentRef} {...props} />
)

const Checkbox = withStyles<EnhancedCheckboxProps>(_Checkbox)

export default Checkbox
