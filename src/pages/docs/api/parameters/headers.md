---
title: 'headers'
isPro: true
--- 

Type: <Type children='<object>'/>

It sets any HTTP header that will be passed along over the [url](/docs/api/parameters/url).

<MultiCodeEditor languages={mqlCode('https://news.ycombinator.com', { 
  headers: {
    'user-agent': 'googlebot',
    'accept-language': 'en-US'
  } 
})} />

Passing headers must the way to authenticate a non-public target URL, providing the necessary headers to make it reachable for Microlink API.

One consideration to keep in mind is that values provided will be passed as query parameters, meaning anyone can see them since they are public.

In case you are treating with sensible headers (e.g., [authorization](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Authorization) or [cookie](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cookie)) you can pass them as part of the request headers rather than query parameters.

For doing that, you need to pass the values with `x-api-header-*` prefix:

<MultiCodeEditor languages={mqlCode('https://test-http-login.vercel.app', { 
  headers: {
    'accept-language': 'en-US',
    'x-api-header-authorization': 'Basic YWRtaW46YWRtaW4='
  } 
})} />

In that way, they will be not publicly exposed.
