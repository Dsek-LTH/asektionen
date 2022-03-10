import React from 'react'
import { Avatar, Stack, Typography } from '@mui/material'

const BoardMember = ({ id, name, title, email, image }) => {
  return (
    <Stack alignItems="center" flex="0 24%" marginBottom="5%" spacing={1}>
      <Avatar src={image} sx={{width: 180, height: 180}} />
      <Typography>
        <b>{name}</b>
      </Typography>
      <Typography>{title}</Typography>
      <svg width="26" height="20" viewBox="0 0 26 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M23 0H3C1.625 0 0.5125 1.125 0.5125 2.5L0.5 17.5C0.5 18.875 1.625 20 3 20H23C24.375 20 25.5 18.875 25.5 17.5V2.5C25.5 1.125 24.375 0 23 0ZM23 5L13 11.25L3 5V2.5L13 8.75L23 2.5V5Z" fill="#1A141F"/>
      </svg>
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