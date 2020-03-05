import React from 'react';
import styled from 'styled-components';

const ClassContainer = styled.div`
  margin: 0 30px 30px 20px;

  img {
    width: 240px;
    border-radius: 10px;
  }

  h3 {
    font-size: 24px;
    letter-spacing: 0.36px;
    color: gray;
    letter-spacing: 1.8px;
    margin: 3px 0 0 0;
  }
  h2 {
    font-size: 20px;
    margin: 8px 0;
    color: #f7f7f7;
    letter-spacing: 1.5px;
  }

  span {
    color: #fa2742;
    letter-spacing: 1px;
    font-size: 18px;
    text-decoration: none;
  }
`;

export default function InstructorClassCard({ classInfo }) {
  return (
    <ClassContainer className='class-card'>
      <img
        src={
          classInfo.imageUrl.length > 0
            ? classInfo.imageUrl
            : 'https://cdn.pixabay.com/photo/2013/09/23/18/22/kick-185384__340.jpg'
        }
        alt='a workout class'
      />
      <h3>{classInfo.name}</h3>
      <h2>{classInfo.location}</h2>
      <span>Edit</span>
    </ClassContainer>
  );
}
