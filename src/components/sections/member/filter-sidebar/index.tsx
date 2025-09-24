import Drawer, { drawerClasses } from '@mui/material/Drawer';
import SidebarContent from './Content';

interface FilterSidebarProps {
  isDrawerOpen: boolean;
  toggleDrawer: () => void;
  up: boolean;
}
const FilterSidebar = ({ isDrawerOpen, toggleDrawer, up }: FilterSidebarProps) => {
  return (
    <>
      {up ? (
        <Drawer
          open={isDrawerOpen}
          variant="persistent"
          sx={(theme) => ({
            [`& .${drawerClasses.paper}`]: {
              position: 'sticky',
              zIndex: 'unset',
              border: 0,
              overflowY: 'auto',
              width: 280,
              py: 2,
              px: 3,
              outline: `1px solid ${theme.vars.palette.divider}`,
              bgcolor: theme.vars.palette.background.elevation1,
            },
          })}
        >
          <SidebarContent toggleDrawer={toggleDrawer} />
        </Drawer>
      ) : (
        <Drawer
          variant="temporary"
          open={isDrawerOpen}
          onClose={toggleDrawer}
          ModalProps={{
            keepMounted: true,
          }}
          sx={[
            {
              [`& .${drawerClasses.paper}`]: {
                width: 280,
                border: 0,
                outline: (theme) => `1px solid ${theme.vars.palette.divider}`,
                bgcolor: 'background.elevation1',
                py: 2,
                px: 3,
              },
            },
          ]}
        >
          <SidebarContent toggleDrawer={toggleDrawer} />
        </Drawer>
      )}
    </>
  );
};

export default FilterSidebar;
