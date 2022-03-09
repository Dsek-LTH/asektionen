import React from 'react'
import { Container, Paper, Stack, Typography } from '@mui/material';
import { Box, styled, flexbox } from '@mui/system';
import { COLORS } from '../src/colors';
import BOARD_MEMBERS from '../src/mockData';
import BoardMember from '../components/BoardMember';

 const BackgroundPaper = styled(Paper)`
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: column;
  max-width: 1350px;
  border-radius: 135px;
  padding: 32px;
  margin: 32px;
`; 

export default function StyrelsenPage() {
  return(
		<Stack alignItems="center">
			<BackgroundPaper>
				<Typography
					variant="h1"
					fontSize={96}
					fontWeight="bold"
					align="center"
					color={COLORS.MAIN}
				>
					STYRELSEN
				</Typography>	
				<Stack direction="row" justifyContent="flex-start" spacing="0" flexWrap="wrap">
					{BOARD_MEMBERS.map((member) => <BoardMember {...member}/>	)}
					
				</Stack>
			</BackgroundPaper>
		</Stack>
    )

}