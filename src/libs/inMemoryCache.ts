export class InMemoryCache {
  private ttl: number
  private cache: any
  constructor({ ttl = 5000 }) {
    this.ttl = ttl
    this.cache = Object.create(null)
  }

  public get(key: string) {
    const record = this.cache[key];
    if (record == null) {
      return null
    }

    // Has Record and isnt expired
    if (isNaN(record.expire) || record.expire >= Date.now()) {
      return record.value
    }

    // Record has expired
    delete this.cache[key]
    return null
  }

  public put(key: string, value: any): void {
    const ttl = (this.ttl < 0 || isNaN(this.ttl)) ? this.ttl : NaN
    const record = {
      value,
      expire: Date.now() + ttl,
    }
    if (!isNaN(record.expire)) {
      record.timeout = setTimeout(() => {
        this.del(key)
      }, ttl)
    }

    this.cache[key] = record;
  }

  public del(key: string) {
    const record = this.cache[key]
    if (record == null) {
      return
    }

    if (record.timeout) {
      clearTimeout(record.timeout)
    }
    delete this.cache[key]
  }
}
