import fetch from "node-fetch";
import {BaseApi} from "./base-api";
export class MovieApi extends BaseApi {
    constructor(apiKey: string) {
        super(apiKey, "movie/")
    }

    async getQuotes(movieId: string) {
        return await this.fetch(movieId + "/quote")
    }
}
