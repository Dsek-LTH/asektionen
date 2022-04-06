import React from 'react'
import { Button } from '@mui/material'
import { Menu } from '@mui/material'
import { MenuItem } from '@mui/material'
import { useState } from 'react'
import styled from '@emotion/styled'
import theme from '../../src/theme'
import Link from 'next/link'

import HoverMenu from 'material-ui-popup-state/HoverMenu'
import {
  usePopupState,
  bindHover,
  bindMenu,
} from 'material-ui-popup-state/hooks'

const MenuButton = ({ name, path, links }) => {

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    if (anchorEl !== event.currentTarget) {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const popupState = usePopupState({
    variant: 'popover',
    popupId: 'demoMenu',
  })

  const StyledButton = styled(Button)`

  `

  return (
    <>
      <Link href={path}>
        <Button
          /* id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          onMouseOver={handleClick} */
          variant="text"
          
          {...bindHover(popupState)}
          style={{
            fontFamily: 'Noto Sans', 
            fontSize: 24, color: 'white',
          }}
        >
          {name}
        </Button>
      </Link>
      
      {links.length !== 0 &&
      /* <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        disableScrollLock={true}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
          onMouseLeave: handleClose
        }}
      >
        {links.map((link) => <MenuItem onClick={handleClose}>{link.title}</MenuItem>)}
      </Menu> */
      <HoverMenu 
        {...bindMenu(popupState)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
        disableScrollLock={true}
      >
        {links.map((link) => {
          return(
            <Link href={link.path}>
              <MenuItem onClick={popupState.close}>{link.title}</MenuItem>
            </Link>)
        })}
      
      </HoverMenu>
}
    </>
  );
}

export default MenuButton