import {MovieApi} from "../src/movie-api"
import {expect} from "chai";

const API_KEY="oIwuqYMdYUS6xxcn9bz6"

describe('Integration LOTR SDK Tests', () => {
    it("check the movies returned without filter", async () => {
        const result = await new MovieApi(API_KEY).list();
        expect(result.docs.length).eq(8)
        expect(result.total).eq(8)
    })

    it("check the movies returned with filter", async () => {
        const result = await new MovieApi(API_KEY).setFilter("runtimeInMinutes", '<', 300).list();
        expect(result.docs.length).eq(6)
    })

    it("get specific movie", async () => {
        const result = await new MovieApi(API_KEY).get("5cd95395de30eff6ebccde5c");
        expect(result.docs[0]).to.be.deep.equal({
            "_id": "5cd95395de30eff6ebccde5c",
            "name": "The Fellowship of the Ring",
            "runtimeInMinutes": 178,
            "budgetInMillions": 93,
            "boxOfficeRevenueInMillions": 871.5,
            "academyAwardNominations": 13,
            "academyAwardWins": 4,
            "rottenTomatoesScore": 91
        })
        expect(result.docs.length).eq(1)
    })

    it("get all quotes for a movie with modifiers", async () => {
        const result = await new MovieApi(API_KEY).setLimit(10).setPage(2).getQuotes("5cd95395de30eff6ebccde5c");
        expect(result.docs.length).eq(10)
        expect(result.total).eq(503)
        expect(result.page).eq(2)
        expect(result.pages).eq(51)
    })
});
