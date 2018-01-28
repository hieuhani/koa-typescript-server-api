import { InMemoryCache } from './libs/inMemoryCache'

const AppCache = new InMemoryCache({ ttl: 5000 })
export default AppCache
