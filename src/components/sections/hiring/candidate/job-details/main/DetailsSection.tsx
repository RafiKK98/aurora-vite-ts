import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

interface DetailsSectionProps {
  title: string;
  description: string | string[];
}

const DetailsSection = ({ title, description }: DetailsSectionProps) => {
  return (
    <Stack direction="column" gap={1}>
      <Typography variant="body1" fontWeight={700}>
        {title}
      </Typography>
      {typeof description === 'string' && (
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      )}
      {Array.isArray(description) && (
        <List sx={{ listStyleType: 'disc', pl: 3 }}>
          {description.map((item, index) => (
            <ListItem
              key={index}
              disableGutters
              disablePadding
              sx={{
                display: 'list-item',
                fontSize: 14,
                color: 'text.secondary',
              }}
            >
              {item}
            </ListItem>
          ))}
        </List>
      )}
    </Stack>
  );
};

export default DetailsSection;
