import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const SectionPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  height: '100%',
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(5),
  },
}));

export default SectionPaper;
