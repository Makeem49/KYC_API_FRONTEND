import { useEffect, useMemo, useRef } from 'react';

import debounce from 'lodash/debounce';

const useAsyncDebounce = <T extends (...args: any[]) => void>(callback: T) => {
  const ref = useRef<T>();

  useEffect(() => {
    ref.current = callback;
  }, [callback]);

  const debouncedCallback = useMemo(() => {
    const func = () => {
      ref.current?.();
    };

    return debounce(func, 1000);
  }, []);

  return debouncedCallback;
};

export default useAsyncDebounce;
