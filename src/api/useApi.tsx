import { useState } from 'react'

type ApiFn = <T>(...args: T[]) => Promise<T> | T
export const useApi = <TData = unknown, TError = unknown>(fn: ApiFn) => {
  const [data, setData] = useState<TData | null>(null)
  const [error, setError] = useState<TError | null>(null)

  const exec = async <A,>(...args: A[]) => {
    // setError('PENDING')
    const newData = await fn(...args)
  }
}
