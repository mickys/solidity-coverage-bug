const { ZERO_ADDRESS, ROLE, Data } = require('./helpers/common');
const { expect } = require("chai");

describe("Solidity coverage bug example - 1.SecondContract", function () {

    let data, testingAccount1, testingAccount2, T1Artifacts, T2Artifacts, TestedContractInstance;

    before(async function () {

        data = new Data();
        await data.init();

        testingAccount1 = data.user1Signer;
        testingAccount2 = data.user2Signer;

        T1Artifacts = await ethers.getContractFactory("TC");
        let T1 = await T1Artifacts.deploy();

        T2Artifacts = await ethers.getContractFactory("SecondContract");
        TestedContractInstance = await T2Artifacts.deploy(T1.address);
    });

    describe("test()", async function () {

        it("returns ( a + b ) x 2", async function () {
            let a = 5;
            let b = 10;
            expect(await TestedContractInstance.test(a, b)).to.be.equal(a+b+a+b);
        });

    });

    describe("test2()", async function () {

        it("returns ( a + b )", async function () {
            let a = 5;
            let b = 10;
            expect(await TestedContractInstance.test2(a, b)).to.be.equal(a+b);
        });

    });

});