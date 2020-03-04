import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

import ClassCard from '../../ReusableComponents/ClassCard';

export default function ClassesPage() {
  return (
    <div>
      <section className='nearby-popular'></section>

      <section className='preference'></section>

      <section className='new-classes'></section>
    </div>
  );
}
