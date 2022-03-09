import React from 'react'
import { Avatar, Stack, Typography } from '@mui/material'

const BoardMember = ({ id, name, title, email, image }) => {
  return (
    <Stack>
      <Avatar src={image} sx={{width: 180, height: 180}}></Avatar>
      <Typography>{name}</Typography>
      <Typography>{title}</Typography>
      <Typography>{email}</Typography>
    </Stack>

    //avatar
    //namn
    //post
    //email-ikon
    //email-adress
  ) 
}

export default BoardMember