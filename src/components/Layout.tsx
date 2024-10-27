import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer'; // Import Footer component

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">{children}</main> {/* Ensures the main content grows to fill available space */}
      <Footer />
    </div>
  );
};

export default Layout;