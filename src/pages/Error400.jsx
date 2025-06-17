import React from 'react';
import ErrorPage from './ErrorPage';

export default function Error400() {
  return (
    <ErrorPage
      code="400"
      description="Akses ditolak. Anda perlu login (Unauthorized)."
      imageSrc="/images/400.jpg"
    />
  );
}