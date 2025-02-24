const { describe, expect, it } = require('@jest/globals');
const ServicePeople = require("../src/services/pessoa");

describe("First test of people", () => {
    const service = new ServicePeople();

    it("Add a name in list", () =>{
        const name = "Lucas";
        service.Add(name);

        const names = service.GetAll();

        console.log(names)
        expect(names[names.length - 1]).toBe(name);
    })
})