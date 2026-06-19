import { Outlet } from 'react-router';
import ScrollToHash from '@/components/ScrollToHash.tsx';
import { CustomFooter } from '@/components/CustomFooter.tsx';
import { CustomHeader } from '@/components/CustomHeader.tsx';

export const MainLayout = () => {
  return (
    <div
      className="flex flex-col bg-[#0d0d0d]"
      style={{
        backgroundImage: `
            linear-gradient(45deg, #121212 25%, transparent 25%), 
            linear-gradient(-45deg, #121212 25%, transparent 25%), 
            linear-gradient(45deg, transparent 75%, #121212 75%), 
            linear-gradient(-45deg, transparent 75%, #121212 75%)
          `,
        backgroundSize: '10px 10px',
        backgroundPosition: '0 0, 0 5px, 5px -5px, -5px 0',
      }}
    >
      <ScrollToHash />
      <CustomHeader />
      <Outlet />
      <CustomFooter />
    </div>
  );
};
