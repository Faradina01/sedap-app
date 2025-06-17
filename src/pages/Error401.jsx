import React from 'react';
import ErrorPage from './ErrorPage';
import img401 from '../assets/401.svg';

export default function Error401() {
  return (
    <ErrorPage
      code="401"
      description="Akses ditolak. Anda perlu login (Unauthorized)."
      image={img401}
    />
  );
}