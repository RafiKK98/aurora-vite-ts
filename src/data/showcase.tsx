import illustration1 from 'assets/images/showcase/illustrations/1.webp';
import illustration2 from 'assets/images/showcase/illustrations/2.webp';
import illustration3 from 'assets/images/showcase/illustrations/3.webp';
import illustration4 from 'assets/images/showcase/illustrations/4.webp';
import ss1 from 'assets/images/showcase/screenshots/1.webp';
import ss2 from 'assets/images/showcase/screenshots/2.webp';
import ss3 from 'assets/images/showcase/screenshots/3.webp';
import ss4 from 'assets/images/showcase/screenshots/4.webp';
import ss5 from 'assets/images/showcase/screenshots/5.webp';
import ss6 from 'assets/images/showcase/screenshots/6.webp';
import ss7 from 'assets/images/showcase/screenshots/7.webp';
import ss8 from 'assets/images/showcase/screenshots/8.webp';
import ss9 from 'assets/images/showcase/screenshots/9.webp';
import ss10 from 'assets/images/showcase/screenshots/10.webp';
import ss11 from 'assets/images/showcase/screenshots/11.webp';
import ss12 from 'assets/images/showcase/screenshots/12.webp';
import ss13 from 'assets/images/showcase/screenshots/13.webp';
import ss14 from 'assets/images/showcase/screenshots/14.webp';
import ss15 from 'assets/images/showcase/screenshots/15.webp';
import auroraBeam from 'assets/videos/showcase/beam.webm';
import paths from 'routes/paths';
import { LayoutConfig, PrefixedLayoutItem, WebApp } from 'types/showcase';

export const showcaseAssets = {
  hero: {
    video: auroraBeam,
    planet: illustration1,
  },
  customizeLayout: {
    dark: ss1,
    light: ss2,
  },
  prefixedLayout: {
    dark: ss3,
    light: ss4,
    illustrations: [illustration2, illustration3],
  },
  elegantCards: [ss5, ss6, ss7, ss8],
  webApps: { apps: [ss9, ss10, ss11, ss12, ss13], illustrations: [illustration4] },
  figmaCTA: [ss14, ss15],
};

export const preloadAssets = [auroraBeam, illustration1, ss1, ss2, ss3, ss4];

export const figmaPreviewLink =
  'https://www.figma.com/design/Uu7B3vKIKlvV4vdRP43Ioe/Aurora--Preview--v1.4.0-?node-id=201-89946&p=f&t=56oBqoaSE8rhh6Ks-0';

export const navItems = [
  { label: 'Documentation', href: paths.gettingStared },
  { label: 'Support', href: 'mailto:support@themewagon.com' },
  { label: 'Hire us', href: 'https://themewagon.com/hire-us/' },
];

export const footerNavItems = [
  {
    label: 'Support',
    to: 'mailto:support@themewagon.com',
  },
  {
    label: 'Documentations',
    to: paths.gettingStared,
  },
  {
    label: 'Changelog',
    to: paths.changelog,
  },
];

export const layoutConfigs: LayoutConfig[] = [
  {
    fieldname: 'sidenavShape',
    title: 'Sidenav Shape',
    options: [
      { value: 'default', label: 'Default' },
      { value: 'slim', label: 'Slim' },
      { value: 'stacked', label: 'Stacked' },
    ],
  },
  {
    fieldname: 'layout',
    title: 'Layout',
    options: [
      { value: 'combo', label: 'Combo' },
      { value: 'sidenav', label: 'Sidenav' },
      { value: 'topnav', label: 'Topnav' },
    ],
  },
  {
    fieldname: 'topnavShape',
    title: 'Topnav Shape',
    options: [
      { value: 'default', label: 'Default' },
      { value: 'slim', label: 'Slim' },
      { value: 'stacked', label: 'Stacked' },
    ],
  },
];

export const prefixedLayouts: PrefixedLayoutItem[] = [
  {
    title: 'Combo Default',
    link: `${paths.ecommerce}?navigationMenuType=combo&sidenavType=default&topnavType=default`,
  },
  {
    title: 'RTL',
    link: `${paths.project}?textDirection=rtl`,
  },
  {
    title: 'TopNav Default',
    link: `${paths.crm}?navigationMenuType=topnav&topnavType=default`,
  },
  {
    title: 'SideNav Slim',
    link: `${paths.analytics}?navigationMenuType=sidenav&sidenavType=slim`,
  },
  {
    title: 'TopNav Stacked',
    link: `${paths.hrm}?navigationMenuType=topnav&topnavType=stacked`,
  },
  {
    title: 'Vibrant SideNav',
    link: `${paths.timeTracker}?navigationMenuType=sidenav&navColor=vibrant`,
  },
];

export const webApps: WebApp[] = [
  {
    title: 'E commerce',
    link: `${paths.ecommerceHomepage}?defaultConfigs=true`,
  },
  {
    title: 'Kanban',
    link: `${paths.kanban}?defaultConfigs=true`,
  },
  {
    title: 'Calendar',
    link: `${paths.calendar}?defaultConfigs=true`,
  },
  {
    title: 'Chat',
    link: `${paths.chat}?defaultConfigs=true`,
  },
  {
    title: 'CRM',
    link: `${paths.deals}?defaultConfigs=true`,
  },
];
