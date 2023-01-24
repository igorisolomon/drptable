import { Box, Typography } from '@mui/material'
import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    
    <Box
      sx={{
        width: "100vw",
        height: 100,
        display: "flex",
        alignItems:  "center",
        justifyContent: "center",
      }}
    >
        <Typography ml={5}>&copy;Copyright <span>{new Date().getFullYear()}</span>, Created by Solomon Igori</Typography>
    </Box>
  )
}

export default Footer