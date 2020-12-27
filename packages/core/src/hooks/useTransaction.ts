import { useCallback, useState } from 'react';
import { ErrorResult } from '../infra/client';
import { useMounted } from './useMounted';

export type TransactionStatus = Partial<{
  running: boolean;
  error: boolean;
}>;

/**
 * Decorator の transaction の hooks 版（機能的には同じ）
 *
 * @param onAction 非同期処理する関数
 * @param onError エラー時に実行する関数
 * @example
 * const fooStore = useContext(FooStore.Context);
 *
 * const [handler, status] = useTransaction(
 *   async () => {
 *     await fooStore.loadAsync();
 *   },
 *   (e: ErrorResult) => console.error(e.message),
 * );
 */
export function useTransaction<T extends any[]>(
  onAction: (...args: T) => Promise<void>,
  onError?: (error: ErrorResult) => void,
): [(...args: T) => Promise<void>, TransactionStatus] {
  const [status, setStatus] = useState<TransactionStatus>({});

  const mounted = useMounted();

  const handler = useCallback(
    async (...args: T) => {
      try {
        setStatus({ running: true, error: false });

        await onAction(...args);

        if (mounted.current) {
          setStatus({ running: false, error: false });
        }
      } catch (e) {
        console.error(`@transaction`, e);

        onError?.(e);

        if (mounted.current) {
          setStatus({ running: false, error: true });
        }

        throw e;
      }
    },
    [mounted, onAction, onError],
  );

  return [handler, status];
}
