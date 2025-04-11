import ReactGA from 'react-ga4';

const TRACKING_ID = 'G-XM9QJXR0QB';

export const initGA = () => {
  ReactGA.initialize(TRACKING_ID);
};

export const trackPageView = (url) => {
  ReactGA.send({ hitType: 'pageview', page: url });
};
