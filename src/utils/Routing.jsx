import {
  BrowserRouter as Router,
  Routes,
  Route,
  HashRouter,
} from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Layout from '../components/Layout';
import ServicesPage from '../pages/ServicesPage';
import AboutUsPage from '../pages/AboutUsPage';
import ContactUsPage from '../pages/ContactUsPage';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import NotFoundPage from '../pages/NotFoundPage';
import WebDesignServicePage from '../pages/services/WebDesignServicePage';
import WebDevelopmentServicePage from '../pages/services/WebDevelopmentServicePage';
import WebsiteMaintenanceServicePage from '../pages/services/WebsiteMaintenanceServicePage';
import SeoServicePage from '../pages/services/SeoServicePage';

const Routing = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/' element={<HomePage />} />
            <Route path='/home' element={<HomePage />} />
            <Route path='/services' element={<ServicesPage />} />
            <Route path='/about' element={<AboutUsPage />} />
            <Route path='/contact' element={<ContactUsPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/signup' element={<SignupPage />} />

            {/* har service page ke liyeh */}
            <Route
              path='/services/webdesign'
              element={<WebDesignServicePage />}
            />
            <Route
              path='/services/webdevelopment'
              element={<WebDevelopmentServicePage />}
            />
            <Route
              path='/services/websitemaintenance'
              element={<WebsiteMaintenanceServicePage />}
            />
            <Route path='/services/seo' element={<SeoServicePage />} />

            {/* agar koi route se match nahi kiya to */}
            <Route path='*' element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default Routing;
