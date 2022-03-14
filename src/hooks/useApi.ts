import useSWR from 'swr'

import { fetcher } from '@utils'

type UseApiProps = {
  url: string
  params?: URLSearchParams
  cb: () => void
  refreshInterval: number
}

const useApi = ({ url, params, cb, refreshInterval }: UseApiProps) => {
  const usp = new URLSearchParams(params)

  usp.sort()
  const qs = usp.toString()
  console.log(qs)
  const { data, error } = useSWR(`${url}?${qs}`, cb || fetcher, {
    refreshInterval,
  })

  return {
    loading: !error && !data,
    data,
    error,
  }
}

export default useApi
