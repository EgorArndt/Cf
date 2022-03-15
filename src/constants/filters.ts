enum filterIds {
  autorefresh = 'autorefresh',
  order = 'order_by',
  languages = 'languages',
}

export const mappedFilterOptions = {
  [filterIds.autorefresh]: {
    '10 seconds': 10000,
    '30 seconds': 30000,
    '1 min': 60000,
    '10 min': 600000,
  },
  [filterIds.languages]: {
    'select all': '',
    english: 'en',
    german: 'de',
    chinese: 'zh',
    italian: 'it',
  },
  [filterIds.order]: {
    'top rated': 'top',
    latest: 'latest',
    'most read': 'read',
    popular: 'retweeted',
  },
}

export const filters = [
  {
    defaultValue: '1 min',
    id: filterIds.autorefresh,
    label: 'autorefresh',
    options: Object.keys(mappedFilterOptions[filterIds.autorefresh]),
  },
  {
    defaultValue: 'top rated',
    id: filterIds.order,
    label: 'order',
    options: Object.keys(mappedFilterOptions[filterIds.order]),
  },
  {
    defaultValue: 'select all',
    id: filterIds.languages,
    label: 'languages',
    options: Object.keys(mappedFilterOptions[filterIds.languages]),
  },
]
