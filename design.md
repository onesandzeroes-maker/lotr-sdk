# Lord of the Rings Typescript SDK Design
The SDK is a proof of concept implementation of a wrapper to https://the-one-api.dev/ and implements a small subset of available endpoints.

## Current features
* The base-api class implements common methods that allows FAST implementation of new api endpoints with maximum code reuse.
* The builder pattern simplifies and abstracts out complex interactions with the API.
* Installation is a one line command and usage is two lines of code:
```
npm install  @onesandzeroes-maker/lotr-sdk --save

import { MovieApi } from '@onesandzeroes-maker/lotr-sdk'
const allMovies = new MovieApi("YOUR_API_KEY_from_the-one-api.dev").list()
```

## Next Phase
* Allow a safe parallel use of the class instances utilizing builder pattern to issue requests.
* Support configurable retries and improve error handling.
* Provide concrete implementation of data classes.
* Support match/non-match filtering.

## Testing
Unit tests focus on verifying the functionality of base-api class without making http requests (through mocking).
Integration tests ensure main functionality is working end-to-end. They will be increasing less going forward due to slower execution speed.

