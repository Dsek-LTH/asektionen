import React from 'react';
import { Stack, Typography } from '@mui/material';
import { styled } from '@mui/system';
import AsekIcon from '../VectorGraphics/AsekIcon';


const Bar = styled(Stack)`
  background-color: white;
  min-width: 100%;
  max-width: 100%;
  margin: auto;
`;

const TextBox = styled(Stack)`
  margin: 48px;
  width: 32%;
`;

const Footer = () => {
  return (
    <Bar
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      padding={4}
    >
      <TextBox
      spacing={0.5}
      >
        <Typography>
          Sektionen för Arkitektur och industridesign
        </Typography>
        <Typography>
          c/o Arkitektskolan, LTH, Box 118
        </Typography>
        <Typography>
          22100 Lund
        </Typography>
        <Typography>
          Org. nr: 802433-7175
        </Typography>
      </TextBox>

      <AsekIcon/>

      <TextBox
        spacing={0.5}
        textAlign="right"
      >
        <Typography>
          © A-sektionen 2021
        </Typography>
        <Typography>
          Ansvarig utgivare: Elvira Ståhlbom
        </Typography>
        <Typography>
          Webbdesign 2022 av: Ett gött gäng
        </Typography>
      </TextBox>
    </Bar>
  )
};

export default Footer;