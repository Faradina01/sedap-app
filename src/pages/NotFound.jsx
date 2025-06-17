import React from 'react';
import ErrorPage from './ErrorPage';

export default function NotFound() {
  return (
    <ErrorPage
      code="404"
      description="Halaman tidak ditemukan"
    />
  );
}
