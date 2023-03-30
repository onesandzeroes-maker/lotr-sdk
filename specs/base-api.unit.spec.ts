import {MovieApi} from "../src/movie-api"
import {expect} from "chai";
import sinon from 'sinon'
import * as fetchModule from 'node-fetch'

describe('Unit tests for Base API', () => {
    let stub;

    const API_KEY = "NA";

    beforeEach(() => {
        stub = sinon.stub(fetchModule, 'default')
        stub.resolves({
            json: () => Promise.resolve({ data: "some data" }),
        });
    });

    afterEach(() => {
        stub.restore()
    });

    it("list movies", async () => {
        const api = await new MovieApi(API_KEY);
        const result = await api.list();
        expect(result).to.deep.equal({ data: "some data" });
        expect(stub.calledOnce).to.be.true;
        expect(stub.args[0][0]).to.equal("https://the-one-api.dev/v2/movie/");
        expect(stub.args[0][1].headers.Authorization).to.equal(
            `Bearer ${API_KEY}`
        );
    })

    it("get movie", async () => {
        const api = await new MovieApi(API_KEY);
        const result = await api.get('123');
        expect(stub.args[0][0]).to.equal("https://the-one-api.dev/v2/movie/123");
    })

    it("quotes for a movie", async () => {
        const api = await new MovieApi(API_KEY);
        const result = await api.getQuotes('123');
        expect(stub.args[0][0]).to.equal("https://the-one-api.dev/v2/movie/123/quote");
    })

    it("chained setters", async () => {
        const api = await new MovieApi(API_KEY);
        const result = await api.setLimit(2).setPage(3).setFilter("name", "!=", "Foo").getQuotes('123');
        expect(stub.args[0][0]).to.equal("https://the-one-api.dev/v2/movie/123/quote?limit=2&page=3&name!=Foo");
    })
});

