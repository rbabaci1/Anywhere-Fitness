import React from 'react';
import styled from 'styled-components';

import Header from './Header';
import ClientType from './ClientType';

export default function ClientSelected() {
  return (
    <div>
      <Header />
      <ClientType />

      <p>
        As a client, you will be able to search and sign up for fitness classes
        based on location, skill level, and preferred work out type.
      </p>
    </div>
  );
}
