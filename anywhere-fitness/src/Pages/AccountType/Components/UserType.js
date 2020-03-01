import React from 'react';
import ClientOrInstructor from '../../../ReusableComponents/ClientOrInstructor';

export default function UserType(props) {
  const { typeName } = props.match.params;

  return (
    <div>
      <ClientOrInstructor type={typeName} />
    </div>
  );
}
