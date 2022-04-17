---
title: Cache
---

Microlink API has a built-in cache layer to speed up consecutive requests to the same resource.

The cache layer is enabled for any request under the following workflow:

- The first time a resource is requested, a cache copy will be created.
- Successive requests to this resource will consume the cached copy.

The cache layer is a combination of an unified cache and an edge node cache. The combination provides [eventual consistency](https://en.wikipedia.org/wiki/Eventual_consistency).

**Unified cache**

When you query for a resource against Microlink API for the first time, the request will generate a shallow cache copy.

That is known as **MISS** and it's reflected as `x-cache-status` in response headers.

Any successive API requests based on the same URL will consume the shallow copy created, showing a **HIT** in `x-cache-status` response headers.

**Edge node cache**

Since Microlink relies on [CloudFlare CDN](https://microlink.io/blog/edge-cdn/), after the unified cache is warm, any successive API access based on the sam URL will be served from the nearest edge node over [CloudFlare Network](https://www.cloudflare.com/network).

That means that the response will  not only be served from the cache, but it also will be served from the nearest distance relative to the origin of the request. That's reflected under the `cf-cache-status` response header as **HIT**.

Edge nodes cache is per edge location, meaning every edge node has its own cache, causing a **MISS** reflected at `cf-cache-status` response header when the access comes from a different location.

When this happens, the edge node cache will fallback automatically into the unified cache, creating a new edge cache copy.

**Cache invalidation**

The cached request will be considered as valid until it reached the expiration time, reflected at the cache-control response header.

There are two ways to set up the expiration:

- [ttl](/docs/api/parameters/ttl): It sets the maximum time the value is considered valid.
- [force](/docs/api/parameters/force): It invalidates the cache immediately, generating a new fresh cache copy.
