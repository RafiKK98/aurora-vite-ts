import { Dispatch, SetStateAction } from 'react';
import { Box, IconButton, Stack, SxProps, Typography } from '@mui/material';
import IconifyIcon from 'components/base/IconifyIcon';
import InfoRow from './InfoRow';

interface RecipientCardProps {
  title: string;
  data: {
    name: string;
    phone: string;
    email: string;
    address: string;
    issueDate?: string;
  };
  editButton?: boolean;
  setOpen?: Dispatch<SetStateAction<boolean>>;
  sxProps?: SxProps;
}

const RecipientCard = ({
  title,
  data,
  editButton = true,
  setOpen,
  sxProps,
}: RecipientCardProps) => {
  return (
    <>
      <Stack
        sx={{ gap: 1, justifyContent: 'space-between', alignItems: 'center', mb: 3 }}
        direction="row"
      >
        <Typography variant="h6" sx={{ ...sxProps }}>
          {title}
        </Typography>
        {editButton && (
          <IconButton onClick={() => setOpen && setOpen(true)}>
            <IconifyIcon
              icon="material-symbols-light:edit-outline"
              sx={{ fontSize: 20, color: 'neutral.dark' }}
            />
          </IconButton>
        )}
      </Stack>
      <Box>
        <InfoRow label="Name" value={data.name} />
        <InfoRow label="Phone Number" value={data.phone} />
        <InfoRow label="Email Address" value={data.email} />
        <InfoRow label="Address" value={data.address} />
        {data.issueDate && <InfoRow label="Issue date" value={data.issueDate} />}
      </Box>
    </>
  );
};

export default RecipientCard;
