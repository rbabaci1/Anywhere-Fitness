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

const ClassesContainer = styled.div`
  margin-top: 80px;

  .title {
    margin: 0 0 24px 120px;
    color: #f7f7f7;
    font-size: 48px;
  }
`;

export default function ClassesPage() {
  return (
    <ClassesContainer>
      <section className='nearby-popular'>
        <h1 className='title'>Nearby Popular</h1>
        {/* Testing */}
        <ClassCard classInfo={classData} />
      </section>

      <section className='preference'>
        <h1 className='title'>Based on Preference</h1>
      </section>

      <section className='new-classes'>
        <h1 className='title'>New Classes Near you</h1>
      </section>
    </ClassesContainer>
  );
}
