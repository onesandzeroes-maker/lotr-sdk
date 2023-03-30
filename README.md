# Lord of the Rings Typescript SDK
This is a wrapper SDK over the subset of https://the-one-api.dev/ API, that can be further extended to cover the rest of endpoints.

## Installation
Use the following command to install the SDK:
```
npm install  @onesandzeroes-maker/lotr-sdk --save
```

## Usage Examples
```
import { MovieApi } from '@onesandzeroes-maker/lotr-sdk'

const movieApi = new MovieApi("YOUR_API_KEY_from_the-one-api.dev")

const allMovies = await movieApi.list();

const oneMovie = await movieApi.get("5cd95395de30eff6ebccde5c");

const moviesLessThanFourHours = movieApi.setFilter("runtimeInMinutes", '<', 240).list();

const quotesByMovieIdWithPageLimit = await movieApi.setLimit(10).setPage(2).getQuotes("5cd95395de30eff6ebccde5c");
```
