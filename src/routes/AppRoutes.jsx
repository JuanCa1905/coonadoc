import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import AboutUs from '../pages/AboutUs';
import MembershipServices from '../pages/MembershipServices';
import Documents from '../pages/Documents';
import Blog from '../pages/Blog';
import Contact from '../pages/Contact';
import DefaultLayout from '../layouts/DefaultLayout';

const AppRoutes = () => {
  return (
    <Router>
      <DefaultLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quienes-somos" element={<AboutUs />} />
          <Route path="/afiliacion-servicios" element={<MembershipServices />} />
          <Route path="/documentacion" element={<Documents />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contacto" element={<Contact />} />
        </Routes>
      </DefaultLayout>
    </Router>
  );
};

export default AppRoutes;