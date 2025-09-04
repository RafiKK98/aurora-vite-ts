import { InputAdornment } from '@mui/material';
import IconifyIcon from 'components/base/IconifyIcon';
import StyledTextField from 'components/styled/StyledTextField';
import PageHeader from '../common/PageHeader';
import SectionHeader from '../common/SectionHeader';

const FAQHeader = () => {
  return (
    <PageHeader>
      <SectionHeader title="FAQ" subtitle="How can we help?" sx={{ mb: 3 }} />

      <StyledTextField
        placeholder="Search by keyword"
        autoComplete="off"
        sx={{ maxWidth: 400, width: 1 }}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <IconifyIcon icon="material-symbols:search-rounded" fontSize={20} />
              </InputAdornment>
            ),
          },
        }}
      />
    </PageHeader>
  );
};

export default FAQHeader;
