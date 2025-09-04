import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const CTA = () => {
  return (
    <Stack
      direction="column"
      gap={5}
      sx={{
        alignItems: 'center',
        maxWidth: 600,
        mx: 'auto',
        py: 16,
        px: { xs: 3, md: 5 },
      }}
    >
      <Box sx={{ textAlign: 'center' }}>
        <Typography
          variant="h2"
          sx={{ typography: { xs: 'h3', sm: 'h2' }, color: 'primary.dark', mb: 1 }}
        >
          Start with us today!
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Our platform's design and architecture are crafted to boost collaboration, helping your
          team work together more efficiently to achieve their goals.
        </Typography>
      </Box>

      <Stack gap={1}>
        <Button variant="contained">Create an account</Button>
        <Button color="neutral">Sign in</Button>
      </Stack>
    </Stack>
  );
};

export default CTA;
