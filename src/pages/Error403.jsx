import React from 'react';
import ErrorPage from './ErrorPage';
import img403 from '../assets/403.svg';

export default function Error403() {
  return (
    <ErrorPage
      code="403"
      description="Maaf, Anda tidak memiliki izin untuk mengakses halaman ini (Forbidden)."
      image={img403}
    />
  );
}