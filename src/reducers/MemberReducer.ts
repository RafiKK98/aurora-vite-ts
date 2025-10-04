import { MemberViewState, SortDirection, SortField } from 'providers/MemberProvider';
import { Member } from 'types/member';

export type MEMBER_ACTION =
  | { type: 'SET_SEARCH'; payload: string }
  | { type: 'SET_PAGE'; payload: number }
  | { type: 'SET_ROWS_PER_PAGE'; payload: number }
  | { type: 'SET_VIEW_TYPE'; payload: 'list' | 'grid' | 'org-chart' }
  | { type: 'SET_MEMBERS'; payload: Member[] }
  | { type: 'SET_SORT'; payload: { field: SortField; direction: SortDirection } }
  | { type: 'RESET_FILTERS' };

export const memberReducer = (state: MemberViewState, action: MEMBER_ACTION): MemberViewState => {
  switch (action.type) {
    case 'SET_MEMBERS': {
      const filteredMembers = filterMembers(action.payload, state.searchTerm);
      const sortedMembers = sortMembers(filteredMembers, state.sortField, state.sortDirection);
      const paginatedMembers = paginateMembers(sortedMembers, state.page, state.rowsPerPage);

      return {
        ...state,
        members: action.payload,
        filteredMembers: sortedMembers,
        paginatedMembers,
      };
    }

    case 'SET_SEARCH': {
      const filteredMembers = filterMembers(state.members, action.payload);
      const sortedMembers = sortMembers(filteredMembers, state.sortField, state.sortDirection);
      const paginatedMembers = paginateMembers(sortedMembers, 0, state.rowsPerPage);

      return {
        ...state,
        searchTerm: action.payload,
        filteredMembers: sortedMembers,
        paginatedMembers,
        page: 0,
      };
    }

    case 'SET_PAGE': {
      const paginatedMembers = paginateMembers(
        state.filteredMembers,
        action.payload,
        state.rowsPerPage,
      );

      return {
        ...state,
        page: action.payload,
        paginatedMembers,
      };
    }

    case 'SET_ROWS_PER_PAGE': {
      const paginatedMembers = paginateMembers(state.filteredMembers, 0, action.payload);

      return {
        ...state,
        rowsPerPage: action.payload,
        page: 0,
        paginatedMembers,
      };
    }

    case 'SET_VIEW_TYPE':
      return {
        ...state,
        viewType: action.payload,
      };

    case 'SET_SORT': {
      const sortedMembers = sortMembers(
        state.filteredMembers,
        action.payload.field,
        action.payload.direction,
      );
      const paginatedMembers = paginateMembers(sortedMembers, 0, state.rowsPerPage);

      return {
        ...state,
        sortField: action.payload.field,
        sortDirection: action.payload.direction,
        filteredMembers: sortedMembers,
        paginatedMembers,
        page: 0,
      };
    }

    case 'RESET_FILTERS': {
      const filteredMembers = filterMembers(state.members, '');
      const sortedMembers = sortMembers(filteredMembers, state.sortField, state.sortDirection);
      const paginatedMembers = paginateMembers(sortedMembers, 0, state.rowsPerPage);

      return {
        ...state,
        searchTerm: '',
        page: 0,
        filteredMembers: sortedMembers,
        paginatedMembers,
      };
    }

    default:
      return state;
  }
};

// Helper functions
const filterMembers = (members: Member[], searchTerm: string): Member[] => {
  if (!searchTerm.trim()) return members;

  const lowercasedSearch = searchTerm.toLowerCase();
  return members.filter(
    (member) =>
      member.name.toLowerCase().includes(lowercasedSearch) ||
      member.email.toLowerCase().includes(lowercasedSearch) ||
      member.job.title.toLowerCase().includes(lowercasedSearch) ||
      member.job.team.toLowerCase().includes(lowercasedSearch) ||
      member.city.toLowerCase().includes(lowercasedSearch) ||
      member.id.toLowerCase().includes(lowercasedSearch),
  );
};

const sortMembers = (members: Member[], field: SortField, direction: SortDirection): Member[] => {
  return [...members].sort((a, b) => {
    let aValue: any = a;
    let bValue: any = b;

    // Handle nested properties
    if (field.startsWith('job.')) {
      const jobField = field.split('.')[1] as keyof Member['job'];
      aValue = a.job[jobField];
      bValue = b.job[jobField];
    } else {
      aValue = a[field as keyof Member];
      bValue = b[field as keyof Member];
    }

    // Convert to string for comparison
    const aString = String(aValue).toLowerCase();
    const bString = String(bValue).toLowerCase();

    if (direction === 'asc') {
      return aString.localeCompare(bString);
    } else {
      return bString.localeCompare(aString);
    }
  });
};

const paginateMembers = (members: Member[], page: number, rowsPerPage: number): Member[] => {
  const startIndex = page * rowsPerPage;
  return members.slice(startIndex, startIndex + rowsPerPage);
};
