import { ChangeEvent, useCallback } from 'react';
import Stack from '@mui/material/Stack';
import { useGridApiRef } from '@mui/x-data-grid';
import { members as data } from 'data/member';
import MemberTable from './MemberTable';

const MemberListView = () => {
  const apiRef = useGridApiRef();

  const _handleSearch = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      apiRef.current?.setQuickFilterValues([e.target.value]);
    },
    [apiRef],
  );
  return (
    <Stack direction="column" sx={{ height: 1, width: 1 }}>
      <MemberTable data={data} apiRef={apiRef} />
    </Stack>
  );
};

export default MemberListView;
