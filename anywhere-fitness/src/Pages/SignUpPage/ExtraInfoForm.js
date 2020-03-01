import React from 'react';

export default function ExtraInfoForm({ values }) {
  values = { ...values, age: 25 };
  return <div>Extra</div>;
}
