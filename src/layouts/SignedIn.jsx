import React from 'react'
import { Dropdown, DropdownItem, DropdownMenu, MenuItem,Image } from 'semantic-ui-react'

export default function SignedIn(props) {
  return (
    <div>
        <MenuItem>
        <Image avatar spaced="right" src="https://i.pinimg.com/736x/d7/b6/77/d7b6775b22df4ff9133e63cc5200cef6.jpg"/>
        <Dropdown pointing="top left" text='Merve'>
            <DropdownMenu>
                <DropdownItem text="Bilgilerim" icon="info"/>
                <DropdownItem onClick={props.signOut} text="Çıkış yap" icon="sign-out"/>

            </DropdownMenu>
        </Dropdown>
        </MenuItem>
    </div>
  )
}
