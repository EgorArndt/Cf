import useSWR, { mutate, SWRConfiguration } from 'swr'

import { fetcher } from '@utils'

type UseApiProps = {
  url: string
  params?: URLSearchParams
  cb: () => void
  config?: SWRConfiguration
}

const useApi = ({ url, params, cb, config }: UseApiProps) => {
  const usp = new URLSearchParams(params)

  usp.sort()
  const qs = usp.toString()

  const { data, error } = useSWR(`${url}?${qs}`, cb || fetcher, config)
  mutate(
    url,
    async (data: unknown) => data,
    false
  )

  return {
    loading: !error && !data,
    data,
    error,
  }
}

export default useApi
