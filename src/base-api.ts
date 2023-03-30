import fetch from "node-fetch";
import {API_URL, OPERATOR} from "./constants";
export class BaseApi {
    #apiKey: string
    #endpoint: string
    #urlQuery: string = ""

    constructor(apiKey: string, endpoint: string) {
        this.#apiKey = apiKey
        this.#endpoint = endpoint
    }

    setLimit(limit: number) {
        this.addQueryParam(`limit=${limit}`);
        return this;
    }

    setPage(page: number) {
        this.addQueryParam(`page=${page}`)
        return this;
    }

    setOffset(offset: number) {
        this.addQueryParam(`offset=${offset}`)
        return this;
    }

    setSortBy(item: string, ascending: boolean) {
        this.addQueryParam(`sort=${item}:${ascending?'asc':'desc'}`)
        return this;
    }

    setFilter(item: string, op: OPERATOR, filter: any) {
        this.addQueryParam(`${item}${op}${filter}`)
        return this;
    }

    protected async fetch(suffix: string = ""): Promise<any> {
        const response = await fetch(API_URL + this.#endpoint + suffix + this.#urlQuery, {
            headers: {
                Authorization: "Bearer " +  this.#apiKey
            }
        })
        //reset url query to allow further use of api instance
        this.#urlQuery = ""
        return await response.json()
    }

    private addQueryParam(param: string): void {
        if (param == null || param.length == 0) return
        if (this.#urlQuery.length > 0) {
            this.#urlQuery += `&${param}`
        } else {
            this.#urlQuery += `?${param}`
        }
    }

    async list() {
        return this.fetch()
    }

    async get(movieId: string) {
        return this.fetch(movieId)
    }
}
