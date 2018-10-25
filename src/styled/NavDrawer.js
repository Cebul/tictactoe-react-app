import React from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import MenuItem from '@material-ui/icons/Menu'


const StayVisible = styled.div`
  position: absolute;
  margin-left: ${(props) => (props.open) ? `${props.width}px` : 'none'};
  transition: margin .2s;
`

export const NavToggleButton = (props) => {
  return (
    <StayVisible
      {...props}
    >
      <Button
        variant='fab'
        onClick={props.toggle}
        color="primary"
      >
        <MenuItem/>
      </Button>
    </StayVisible>
  )
}
