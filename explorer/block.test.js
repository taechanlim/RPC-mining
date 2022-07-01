const Web3 = require("web3");

describe("Block", () => {
  let web3;

  it("web3연결테스트", async () => {
    web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:9000"));

    const block_number = await web3.eth.getBlockNumber();
    // console.log(block_number);

    for (let i = 1; i <= block_number; i++) {
      const block = await web3.eth.getBlock(i, true);
      //   console.log(block);
      for (let j = 0; j < block.transactions.length; j++) {
        console.log(block.transactions[j]);
      }
    }
  });

  //getTransactionReceipt()
  //getTransaction()

  it("getTransaction", async () => {
    const tx = await web3.eth.getTransaction(
      "0x253dc7a6338cc0d2e9b914747623107058ee3a6ed753ceaa87b0cddabe03ede6"
    );
    console.log(tx);
  });
  it("getTransactionRecipt", async () => {
    const tx = await web3.eth.getTransactionReceipt(
      "0x253dc7a6338cc0d2e9b914747623107058ee3a6ed753ceaa87b0cddabe03ede6"
    );
    console.log("tx recipt : ", tx);
  });
});
