import React from 'react';
import ClientOrInstructor from '../../ReusableComponents/ClientOrInstructor';
import AbsoluteWrapper from '../../ReusableComponents/AbsoluteWrapper';

export default function UserType({ match }) {
  const { userType } = match.params;
  return (
    <AbsoluteWrapper>
      <div>
        <ClientOrInstructor userType={userType} />
      </div>
    </AbsoluteWrapper>
  );
}
