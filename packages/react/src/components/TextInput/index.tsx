import { forwardRef, type InputHTMLAttributes } from 'react'
import { Input, Prefix, TextInputContainer } from './styles'

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  prefix?: string
  sizeInput?: 'sm' | 'md'
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ prefix, sizeInput = 'md', ...rest }, ref) => {
    return (
      <TextInputContainer size={sizeInput}>
        {!!prefix && <Prefix>{prefix}</Prefix>}
        <Input ref={ref} {...rest} />
      </TextInputContainer>
    )
  },
)

TextInput.displayName = 'TextInput'
