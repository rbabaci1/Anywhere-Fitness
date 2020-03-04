import React from 'react';

import HomePageNav from '../../ReusableComponents/HomePageNav';
import ClassesPage from '../ClassesPage/ClassesPage';

export default function ClientHomePage() {
  return (
    <div>
      <HomePageNav />

      <ClassesPage />
    </div>
  );
}
