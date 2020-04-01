import { useState, useCallback } from 'react';

const useToggle = (defaultState = false) => {
  const [value, setValue] = useState(defaultState);

  const toggle = useCallback(() => {
    setValue((state) => !state);
  }, []);
  return [value, toggle];
};

export default useToggle;
