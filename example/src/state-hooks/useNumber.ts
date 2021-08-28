import { createStatePiece } from 'react-pieceful-state';
import { useCallback, useMemo } from 'react';

const useNamesPiece = createStatePiece('number', 0);

const useNumber = () => {
  const [number, setNumber] = useNamesPiece();

  const increment = useCallback(() => {
    setNumber((n) => n + 1);
  }, [setNumber]);

  const decrement = useCallback(() => {
    setNumber((n) => n - 1);
  }, [setNumber]);

  return useMemo(
    () => [number, { increment, decrement }] as const,
    [number, increment, decrement]
  );
};

export default useNumber;
