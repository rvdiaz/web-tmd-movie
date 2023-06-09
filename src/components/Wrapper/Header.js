import Bloodhound from 'bloodhound-js/lib/bloodhound'
import React, { useEffect } from 'react';
import { InputSearch } from '../ui/InputSearch'
import { LogoButton } from '../ui/LogoButton'
import $ from 'jquery';

export const Header = () => {
  return (
    <div className="header">
        <LogoButton/>
        <InputSearch/>
    </div>
  )
}
