export type RawStory = FormattedStory & {imageUrls: string[], domain_host: string, domain_name: string, domain_cached_logo_url: string}

export type FormattedStory = {
  imgUrl: string
  title: string
  domainName: string
  publishTime: string
  score: number
  logo: string
  url: string
  domainHost: string
  description: string
}