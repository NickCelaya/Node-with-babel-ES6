import { expect } from "chai"
import { person } from "./../src/server/nick"

describe('#person function', () => {
    context("On success should return Hello Nick", () => {
        it("should return hello", () => {
            let input = person()
            let param = "Nick"
            let output = `Hello ${param}`
            expect( input ).to.equal( output )
        });
    });
});