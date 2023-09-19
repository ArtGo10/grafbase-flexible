import React from 'react'

type Props = {
  type?: string
  title: string
  state: string
  placeholder: string
  isTextArea?: boolean
  setState: (value: string) => void
}

const FormField = ({ title, state, setState, type, placeholder, isTextArea }: Props) => {
  return (
    <div className='flexStart flex-col w-full gap-4'>
      <label className='w-full text-gray-100 '>{title}</label>

      {isTextArea ? (
        <textarea placeholder={placeholder} value={state} onChange={(e) => setState(e.target.value)} required className='form_field-input'></textarea>
      ) : (
        <input type={type || 'text'} placeholder={placeholder} value={state} onChange={(e) => setState(e.target.value)} required className='form_field-input' />
      )}
    </div>
  )
}

export default FormField