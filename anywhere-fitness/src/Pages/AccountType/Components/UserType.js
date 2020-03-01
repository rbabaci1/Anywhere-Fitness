import React from 'react';
import ClientOrInstructor from '../../../ReusableComponents/ClientOrInstructor';

export default function UserType({ match }) {
  const { typeName } = match.params;

  return (
    <div>
      <ClientOrInstructor type={typeName} />
    </div>
  );
}
