import React from 'react';
import styled from 'styled-components';

import testImage from '../Pages/Images/yoga.png';

const ClassContainer = styled.div`
  margin: 0 30px 30px 0;

  h3 {
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 0.36px;
    color: gray;
    margin: 3px 0 0 0;
  }
  h2 {
    font-size: 24px;
    margin: 3px 0 0 0;
    color: #ca1f3d;
    letter-spacing: 0.36px;
  }
  p {
    color: #f7f7f7;
    font-size: 18px;
    letter-spacing: 0.36px;
    margin: 3px 0;
  }
  span {
    color: #f7f7f7;
    letter-spacing: 0.36px;
  }
`;

export default function ClassCard({ classInfo }) {
  return (
    <ClassContainer className='class-card'>
      <img src={testImage} />
      <h3>{classInfo.name}</h3>
      <h2>{classInfo.location}</h2>
      <p>{classInfo.teacher}</p>
      <span>{classInfo.rating}</span>
    </ClassContainer>
  );
}
