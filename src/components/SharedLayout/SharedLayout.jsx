import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import css from './SharedLayout.module.css';

export const LoadingIndicator = () => {
  return (
    <div className={css.loading_dots}>
      <div className={css.dot} delay="0s" />
      <div className={css.dot} delay=".2s" />
      <div className={css.dot} delay=".4s" />
    </div>
  );
};

const SharedLayout = () => {
  return (
    <>
      <div className={css.header}>
        <nav>
          <Link className={css.link} to="/">
            Home
          </Link>
          <Link className={css.link} to="/movies">
            Movies
          </Link>
        </nav>
      </div>

      <Suspense fallback={<LoadingIndicator />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
