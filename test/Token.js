const { expect } = require('chai');
const { ethers } = require('hardhat');

const tokens = (n) => {
    return ethers.utils.parseUnits(n.toString(), 'ether')
}


describe("Token", ()=> {
    let token, accounts, deployer

    beforeEach(async () => {
    const Token = await ethers.getContractFactory('Token')
    token = await Token.deploy('Decentralised Exchange','dEX', '1000000')

    accounts = await ethers.getSigners()
    deployer = accounts[0]
    }) 

    describe('Deployment', () => {
        const name = 'Decentralised Exchange'
        const symbol ="dEX"
        const decimals = "18"
        const totalSupply = tokens('1000000')


        it("Has correct name", async ()=> {
            expect(await token.name()).to.equal(name)
        })
    
    
        it("Has correct symbol", async ()=> {
            expect(await token.symbol()).to.equal(symbol)
        })
        it("Has correct decimals", async ()=> {
            expect(await token.decimals()).to.equal(decimals)
        })
    
        it("Has correct total supply", async ()=> {
            expect(await token.totalSupply()).to.equal(totalSupply)
        })
        it("assigns total supply to deployer", async ()=> {
            expect(await token.balanceOf(deployer.address)).to.equal(totalSupply)
        })
    })
})