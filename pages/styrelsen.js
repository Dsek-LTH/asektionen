import React from 'react';
import { Container, Paper, Stack, Typography } from '@mui/material';
import { Box, styled, flexbox } from '@mui/system';
import { COLORS } from '../src/colors';
import BOARD_MEMBERS from '../src/mockData/boardMemberMock';
import BoardMember from '../components/BoardMember';

const BackgroundPaper = styled(Paper)`
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: column;
  max-width: 1350px;
  border-radius: 135px;
  padding: 80px;
  margin: 16px;
`;

//Change Stack to Grid?
export default function StyrelsenPage() {
  return (
    <Stack alignItems="center">
      <BackgroundPaper>
        <Typography
          marginBottom={8}
          variant="h1"
          fontSize={96}
          fontWeight="bold"
          align="center"
          color={COLORS.MAIN}
        >
          STYRELSEN
        </Typography>
        <Stack direction="row" justifyContent="space-between" flexWrap="wrap">
          {BOARD_MEMBERS.map((member) => (
            <BoardMember {...member} />
          ))}
        </Stack>
      </BackgroundPaper>
    </Stack>
  );
}
