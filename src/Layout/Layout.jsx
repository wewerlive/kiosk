import CookieBanner from '../components/CookieBanner';
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className='flex flex-col justify-between items-center'>
      <Header />
      <Outlet />
      {/* <CookieBanner /> */}
    </div>
  );
};
export default Layout;
