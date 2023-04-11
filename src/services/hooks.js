import { useState } from 'react';

export const useFetch = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [showLoader, setShowLoader] = useState(false);

  return {
    errorMessage,
    setErrorMessage,
    showLoader,
    setShowLoader,
  };
};
