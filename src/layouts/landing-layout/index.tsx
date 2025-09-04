import { PropsWithChildren, useEffect, useRef } from 'react';
import useSettingsPanelMountEffect from 'hooks/useSettingsPanelMountEffect';
import { useSettingsContext } from 'providers/SettingsProvider';
import { mutate } from 'swr';
import LandingAppBar from './LandingAppBar';
import LandingFooter from './footer';

const LandingLayout = ({ children }: PropsWithChildren) => {
  const {
    config: { navColor },
    setConfig,
  } = useSettingsContext();

  const navColorRef = useRef(navColor);

  useSettingsPanelMountEffect({
    disableNavigationMenuSection: true,
    disableSidenavShapeSection: true,
    disableTopShapeSection: true,
  });

  useEffect(() => {
    setConfig({
      navColor: 'default',
    });
    return () => {
      setConfig({
        navColor: navColorRef.current,
      });
      mutate((key: any) => Array.isArray(key) && key[0].startsWith('e-commerce'), undefined, {
        revalidate: true,
      });
    };
  }, []);

  return (
    <div>
      <LandingAppBar />
      {children}
      <LandingFooter />
    </div>
  );
};

export default LandingLayout;
