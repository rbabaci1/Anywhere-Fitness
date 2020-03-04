import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

import ClassCard from '../../ReusableComponents/ClassCard';

const classData = {
  name: 'Yoga',
  location: 'Cincy Yoga Club',
  teacher: 'Cincinnati',
  rating: '4.5'
};

export default function ClassesPage() {
  return (
    <div>
      <section className='nearby-popular'>
        {/* Testing */}
        <ClassCard classInfo={classData} />
      </section>

      <section className='preference'></section>

      <section className='new-classes'></section>
    </div>
  );
}
