import { useLocation } from 'react-router-dom';

const useBreadCrumbs = () => {
  const { pathname } = useLocation();

  const locations = pathname.split('/');

  const currentLocation = pathname.split('/')[1];

  if (currentLocation === '') {
    return { currentLocation: ['Dashboard'] };
  }

  return { currentLocation: locations.slice(1, locations.length) };
};

export default useBreadCrumbs;
