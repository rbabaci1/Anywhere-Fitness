import React from 'react';
import ClientOrInstructor from '../../ReusableComponents/ClientOrInstructor';

export default function UserType({ match }) {
  const { userType } = match.params;
  return (
    <div>
      <ClientOrInstructor userType={userType} />
    </div>
  );
}
