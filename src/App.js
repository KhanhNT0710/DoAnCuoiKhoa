import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homePage';
import { ROUTES } from './constants/routes';
import MainLayout from './layouts/MainLayout';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import DetailProductPage from './pages/DetailProductPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { useDispatch, useSelector } from 'react-redux';
import { actClearCarts } from "./redux/features/cart/cartSlice";
import { useEffect } from 'react';
import { GlobalHistory } from "./utils/globalHistory";
import BlogPage from './pages/BlogPage';

function App() {
  const dispatch = useDispatch();
  const { isLogin } = useSelector((state) => state.user);

  useEffect(() => {
    if (!isLogin) {
      dispatch(actClearCarts());
    }
    // eslint-disable-next-line
  }, [isLogin]);
  return (
    <div className="App">
      <BrowserRouter>
        <GlobalHistory />
        <Routes >
          <Route element={<MainLayout />}>
            <Route path={ROUTES.HOME_PAGE} element={<HomePage />} />
            <Route path={ROUTES.CART_PAGE} element={<CartPage />} />
            <Route path={ROUTES.PRODUCT_PAGE} element={<ProductPage />} />
            <Route path={ROUTES.BLOG_PAGE} element={<BlogPage />} />
            <Route path={ROUTES.DETAIL_PRODUCT_PAGE} element={<DetailProductPage />} />
            <Route path={ROUTES.LOGIN_PAGE} element={<LoginPage />} />
            <Route path={ROUTES.REGISTER_PAGE} element={<RegisterPage />} />
          </Route>
          <Route path="/" element={<Navigate to={ROUTES.HOME_PAGE} />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
