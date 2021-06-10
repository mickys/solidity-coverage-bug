const { ZERO_ADDRESS, ROLE, Data } = require('./helpers/common');
const { expect } = require("chai");

describe("Solidity coverage bug example - 1.TC", function () {

    let data, testingAccount1, testingAccount2, Artifacts, TestedContractInstance;

    before(async function () {

        data = new Data();
        await data.init();

        testingAccount1 = data.user1Signer;
        testingAccount2 = data.user2Signer;

        Artifacts = await ethers.getContractFactory("TC");
        TestedContractInstance = await Artifacts.deploy();

    });

    describe("add()", async function () {

        it("returns sum of a and b", async function () {
            let a = 5;
            let b = 10;

            expect(await TestedContractInstance.add(a, b)).to.be.equal(a+b);
        });

    });

    describe("sub()", async function () {

        it("returns substraction of a and b", async function () {
            let a = 50;
            let b = 10;
            expect(await TestedContractInstance.sub(a, b)).to.be.equal(a-b);
        });
        
    });


});