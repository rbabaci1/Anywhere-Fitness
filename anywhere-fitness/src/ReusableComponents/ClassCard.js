import React from 'react';
import styled from 'styled-components';

import testImage from '../Pages/Images/yoga.png';

const ClassContainer = styled.div``;

export default function ClassCard({ classInfo }) {
  return (
    <div className='class-card'>
      <img src={testImage} />
      <h3>{classInfo.name}</h3>
      <h2>{classInfo.location}</h2>
      <p>{classInfo.teacher}</p>
      <span>{classInfo.rating}</span>
    </div>
  );
}
