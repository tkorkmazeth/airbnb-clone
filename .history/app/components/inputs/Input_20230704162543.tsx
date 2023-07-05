'use client'

import React from 'react'
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'
import { BiDollar } from 'react-icons/bi'

interface IconProps {
    id: string
    label: string
    type?:string
    disabled?: boolean
    formatPrice?: boolean
    register: UseFormRegister<FieldValues>
    required?: boolean
    errors: FieldErrors
}

const Input: React.FC<IconProps> = ({id, label, type='text', disabled, formatPrice, register, required, errors}) => {
  return (
    <div className='w-full relative'>
        {formatPrice && (
            <BiDollar
            size={24}
            className='
            text-neutral-700
            absolute
            top-5
            left-2'
            />
        )}
        <input
        id={id}
        disabled={disabled}
        {...register(id, {required})}
        placeholder=' '
        type={type}
        className={`
        peer
        w-full
        p-4
        pt-6
        font-light
        bg-white
        border-2
        rounded-md
        outline-none
        transition
        disabled:opacity-70
        disabled:cursor-not-allowed
        ${formatPrice ? 'pl-9' : 'pl-4'}
        ${errors[id] ? 'border-rose-500' : 'border-neutral-300'}
        ${errors[id] ? 'focus:border-rose-500' : 'focus:border-black'}
        `}
        />
    </div>
  )
}

export default Input