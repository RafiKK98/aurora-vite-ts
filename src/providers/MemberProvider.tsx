import { PropsWithChildren, createContext, use, useCallback, useMemo, useReducer } from 'react';
import { members as initialMembers } from 'data/member';
import { MEMBER_ACTION, memberReducer } from 'reducers/MemberReducer';
import { Member } from 'types/member';

export type SortField = keyof Member | 'job.title' | 'job.team' | 'job.status' | 'job.hiredDate';
export type SortDirection = 'asc' | 'desc';

export interface MemberViewState {
  members: Member[];
  filteredMembers: Member[];
  paginatedMembers: Member[];
  searchTerm: string;
  page: number;
  rowsPerPage: number;
  viewType: 'list' | 'grid' | 'org-chart';
  sortField: SortField;
  sortDirection: SortDirection;
}

export interface MemberContextInterface {
  state: MemberViewState;
  dispatch: React.Dispatch<MEMBER_ACTION>;
  totalCount: number;
  totalPages: number;
  handleSearch: (term: string) => void;
  handlePageChange: (newPage: number) => void;
  handleRowsPerPageChange: (newRowsPerPage: number) => void;
  handleViewTypeChange: (newViewType: 'list' | 'grid' | 'org-chart') => void;
  handleSort: (field: SortField) => void;
}

export const initialState: MemberViewState = {
  members: [],
  filteredMembers: [],
  paginatedMembers: [],
  searchTerm: '',
  page: 0,
  rowsPerPage: 7,
  viewType: 'list',
  sortField: 'name',
  sortDirection: 'asc',
};

export const MemberContext = createContext({} as MemberContextInterface);

const MemberProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(memberReducer, {
    ...initialState,
    members: initialMembers,
    filteredMembers: initialMembers,
    paginatedMembers: paginateMembers(initialMembers, 0, initialState.rowsPerPage),
  });

  const totalCount = state.filteredMembers.length;
  const totalPages = Math.ceil(totalCount / state.rowsPerPage);

  const handleSearch = useCallback((term: string) => {
    dispatch({ type: 'SET_SEARCH', payload: term });
  }, []);

  const handlePageChange = useCallback((newPage: number) => {
    dispatch({ type: 'SET_PAGE', payload: newPage });
  }, []);

  const handleRowsPerPageChange = useCallback((newRowsPerPage: number) => {
    dispatch({ type: 'SET_ROWS_PER_PAGE', payload: newRowsPerPage });
  }, []);

  const handleViewTypeChange = useCallback((newViewType: 'list' | 'grid' | 'org-chart') => {
    dispatch({ type: 'SET_VIEW_TYPE', payload: newViewType });
  }, []);

  const handleSort = useCallback(
    (field: SortField) => {
      const direction = state.sortField === field && state.sortDirection === 'asc' ? 'desc' : 'asc';
      dispatch({ type: 'SET_SORT', payload: { field, direction } });
    },
    [state.sortField, state.sortDirection],
  );

  const value: MemberContextInterface = useMemo(
    () => ({
      state,
      dispatch,
      totalCount,
      totalPages,
      handleSearch,
      handlePageChange,
      handleRowsPerPageChange,
      handleViewTypeChange,
      handleSort,
    }),
    [
      state,
      totalCount,
      totalPages,
      handleSearch,
      handlePageChange,
      handleRowsPerPageChange,
      handleViewTypeChange,
      handleSort,
    ],
  );

  return <MemberContext value={{ ...value }}>{children}</MemberContext>;
};

export default MemberProvider;

export const useMemberContext = () => use(MemberContext);

const paginateMembers = (members: Member[], page: number, rowsPerPage: number): Member[] => {
  const startIndex = page * rowsPerPage;
  return members.slice(startIndex, startIndex + rowsPerPage);
};
