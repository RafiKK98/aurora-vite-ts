import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  SxProps,
  TextField,
  Typography,
} from '@mui/material';
import sectionBg from 'assets/images/sections/misc/landing/illustrations/1.webp';
import { useThemeMode } from 'hooks/useThemeMode';
import IconifyIcon from 'components/base/IconifyIcon';
import SectionHeader from '../common/SectionHeader';

const FAQContact = ({ sx }: { sx?: SxProps }) => {
  const { isDark } = useThemeMode();

  return (
    <Box
      sx={{
        position: 'relative',
        width: 1,
        px: { xs: 3, md: 5 },
        '&:after': {
          content: '""',
          position: 'absolute',
          zIndex: -1,
          inset: 0,
          opacity: isDark ? 0.5 : 1,
          background: `url(${sectionBg}) no-repeat`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'bottom left',
        },
        mb: 3,

        ...sx,
      }}
    >
      <Container
        maxWidth={false}
        sx={{ position: 'relative', maxWidth: 1000, px: { xs: 0 }, py: 8 }}
      >
        <Grid container columns={{ md: 2 }} rowSpacing={10} columnSpacing={15} alignItems="center">
          <Grid size={1}>
            <Box sx={{ mb: 5 }}>
              <SectionHeader
                title="CONTACT"
                subtitle="Still have questions?"
                sx={{ textAlign: 'left', mb: 2 }}
              />

              <Typography variant="body2" color="textSecondary" sx={{ maxWidth: 400 }}>
                Still have questions? Don’t hesitate to ask! Our dedicated team is ready to assist
                you with any concerns, ensuring you have the clarity and support needed to proceed
                with confidence.
              </Typography>
            </Box>

            <List disablePadding>
              <ListItem sx={{ gap: 1 }} disableGutters>
                <ListItemIcon>
                  <IconifyIcon icon="material-symbols:call-outline" fontSize={24} />
                </ListItemIcon>
                <ListItemText disableTypography>
                  <Link href="#!" color="textSecondary" variant="body2">
                    (555) 123-4567
                  </Link>
                </ListItemText>
              </ListItem>
              <ListItem sx={{ gap: 1 }} disableGutters>
                <ListItemIcon>
                  <IconifyIcon icon="material-symbols:mail-outline-rounded" fontSize={24} />
                </ListItemIcon>
                <ListItemText disableTypography>
                  <Link href="#!" color="textSecondary" variant="body2">
                    hello@randommail.com
                  </Link>
                </ListItemText>
              </ListItem>
              <ListItem sx={{ gap: 1 }} disableGutters>
                <ListItemIcon>
                  <IconifyIcon icon="material-symbols:location-on-outline-rounded" fontSize={24} />
                </ListItemIcon>
                <ListItemText disableTypography>
                  <Typography color="textSecondary" variant="body2">
                    123 Sunnyvale Park, Springfield, IL, USA
                  </Typography>
                </ListItemText>
              </ListItem>
            </List>
          </Grid>

          <Grid container size={1} columns={12} spacing={2}>
            <Grid size={6}>
              <TextField variant="filled" label="First Name" sx={{ width: 1 }} />
            </Grid>
            <Grid size={6}>
              <TextField variant="filled" label="Last Name" sx={{ width: 1 }} />
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 12 }}>
              <TextField variant="filled" label="Email" sx={{ width: 1 }} />
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 12 }}>
              <TextField variant="filled" label="Phone" sx={{ width: 1 }} />
            </Grid>
            <Grid size={12}>
              <TextField multiline rows={2} variant="filled" label="Message" sx={{ width: 1 }} />
            </Grid>
            <Grid size={12} sx={{ textAlign: 'right' }}>
              <Button variant="soft">Send message</Button>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default FAQContact;
