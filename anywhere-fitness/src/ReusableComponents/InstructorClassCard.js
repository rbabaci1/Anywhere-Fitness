import React from 'react';
import styled from 'styled-components';

export default function InstructorClassCard({ classInfo }) {
  return (
    <div className='class-card'>
      <img />
      <h3>{classInfo.name}</h3>
      <h2>{classInfo.location}</h2>
      <p>{classInfo.teacher}</p>
    </div>
  );
}
