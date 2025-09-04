import { LayoutConfigValues } from '..';

const LAYOUTS = {
  'sidenav-default': { width: '15.7%', height: '100%' },
  'sidenav-slim': { width: '4.2%', height: '100%' },
  'sidenav-stacked': { width: '15.7%', height: '100%' },
  'topnav-default': { width: '100%', height: '7.8%' },
  'topnav-slim': { width: '100%', height: '3.7%' },
  'topnav-stacked': { width: '100%', height: '9.6%' },
};

const LAYOUT_ORDER = [
  'sidenav-default',
  'sidenav-slim',
  'sidenav-stacked',
  'topnav-default',
  'topnav-slim',
  'topnav-stacked',
  'combo-default-default',
  'combo-slim-default',
  'combo-stacked-default',
  'combo-default-slim',
  'combo-slim-slim',
  'combo-stacked-slim',
  'combo-default-stacked',
  'combo-slim-stacked',
  'combo-stacked-stacked',
];

export const getLayoutKey = (config: LayoutConfigValues): string => {
  const { layout, sidenavShape, topnavShape } = config;

  if (layout === 'combo') return `combo-${sidenavShape}-${topnavShape}`;
  if (layout === 'sidenav') return `sidenav-${sidenavShape}`;
  return `topnav-${topnavShape}`;
};

export const getLayoutConfig = (config: LayoutConfigValues) => {
  const key = getLayoutKey(config);

  if (key.startsWith('combo-')) {
    const [, sidenavShape, topnavShape] = key.split('-');
    return {
      [`sidenav-${sidenavShape}`]: LAYOUTS[`sidenav-${sidenavShape}` as keyof typeof LAYOUTS],
      [`topnav-${topnavShape}`]: LAYOUTS[`topnav-${topnavShape}` as keyof typeof LAYOUTS],
    };
  }

  return LAYOUTS[key as keyof typeof LAYOUTS];
};

export const getLayoutPosition = (config: LayoutConfigValues): string => {
  const key = getLayoutKey(config);
  const index = LAYOUT_ORDER.indexOf(key);
  return `${(index * 100) / (LAYOUT_ORDER.length - 1)}%`;
};

export const buildPreviewUrl = (
  config: LayoutConfigValues,
  isDark: boolean,
  path: string,
): string => {
  const params = new URLSearchParams({
    navigationMenuType: config.layout,
    sidenavType: config.sidenavShape,
    topnavType: config.topnavShape,
    themeMode: isDark ? 'dark' : 'light',
  });

  return `${path}?${params}`;
};
