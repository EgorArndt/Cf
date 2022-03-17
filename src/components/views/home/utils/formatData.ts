import { FormattedStory, RawStory } from '@views/home/models'

export const formatData = (data: {
  stories: Array<RawStory>
}): Array<FormattedStory> =>
  data.stories.map((story: RawStory) => ({
    imgUrl: story.imageUrls ? story.imageUrls[0] : '',
    title: story.title,
    domainName: story.domain_name,
    publishTime: story.publishTime,
    score: story.score,
    logo: story.domain_cached_logo_url,
    url: story.url,
    domainHost: story.domain_host,
    description: story.description,
  }))
