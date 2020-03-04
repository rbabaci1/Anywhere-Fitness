import React, { useState } from 'react';
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

  section {
    .title {
      margin: 0 0 24px 120px;
      color: #f7f7f7;
      font-size: 54px;
      @media only screen and (max-width: 500px) {
        font-size: 30px;
        margin: 0 0 20px 0;
      }
    }

    .classes {
      display: flex;
      flex-wrap: wrap;
      @media only screen and (max-width: 500px) {
        flex-wrap: nowrap;
        overflow: auto;
      }
    }
  }
`;

export default function ClassesPage() {
  const [classes, setClasses] = useState([]);

  axios
    .get('https://anywhere-fitness1.herokuapp.com/api/classes')
    .then(response => {
      console.log(response);
      setClasses(response.data);
    })
    .catch(error => console.error(error));

  return (
    <ClassesContainer>
      <section className='nearby-popular'>
        <h1 className='title'>Nearby Popular</h1>
        {/* Testing */}
        <div className='classes'>
          <ClassCard classInfo={classData} />
          <ClassCard classInfo={classData} />
          <ClassCard classInfo={classData} />
          <ClassCard classInfo={classData} />
          <ClassCard classInfo={classData} />
        </div>
      </section>

      {/* <section className='preference'>
        <h1 className='title'>Based on Preference</h1>
      </section> */}

      {/* <section className='new-classes'>
        <h1 className='title'>New Classes Near you</h1>
      </section>{' '} */}
    </ClassesContainer>
  );
}
