import React from 'react'
import { InputSearch } from '../ui/InputSearch'
import { LogoButton } from '../ui/LogoButton'

export const Header = () => {
  return (
    <div className="header">
        <LogoButton/>
        <InputSearch/>
    </div>
  )
}
