import React from 'react';

export default function UserType(props) {
  const { typeName } = props.match.params;

  return (
    <div>
      <h1>User Type</h1>
    </div>
  );
}
