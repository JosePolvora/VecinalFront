import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const PublicLayout = () => (
  <>
    <Navbar />
    <main className="min-h-screen px-4 py-6 bg-[#e5eaf5]">
      <Outlet />
    </main>
    <Footer />
  </>
);

export default PublicLayout;
