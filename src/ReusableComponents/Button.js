import React from 'react';
import styled from 'styled-components';

const ButtonComponent = styled.button`
  font-family: Ubuntu;
  background: #ca1f3d;
  font-size: 22px;
  color: #f7f7f7;
  border-radius: 100px;
  border: none;
  font-weight: bold;
  line-height: 25px;
  padding: 9px 0;
  cursor: pointer;
  width: 155px;
  letter-spacing: 0.5px;

  &:hover {
    background: #820e22;
  }

  @media only screen and (min-width: 500px) {
    padding: 12px 0;
    font-size: 24px;
    width: 168px;
  }
`;

export default function Button({ textContent, type, isSubmitting }) {
  return (
    <ButtonComponent type={type} disabled={isSubmitting}>
      {isSubmitting ? 'Submitting ...' : textContent}
    </ButtonComponent>
  );
}
