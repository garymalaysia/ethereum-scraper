// Author: Gary Tsai
// Fordham Univeristy
// Prerequisites: 
//	 Install Nodejs && Truffle Framework 
// Usage: 
// 	$ truffle exec getTrax.js

var b = web3.eth.blockNumber; // gather all block number

for (var i = 0; i < b; i++){
	if (web3.eth.getTransactionFromBlock(i) != null) 
		{ var trx = web3.eth.getTransactionFromBlock(i); 
			console.log("Input Value: " + web3.toAscii(trx.input) + "\n"); } }
