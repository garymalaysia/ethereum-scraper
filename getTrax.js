
var b = web3.eth.blockNumber;

for (var i = 0; i < b; i++){
	var block = web3.eth.getBlock(i); 
	if (web3.eth.getTransactionFromBlock(i) != null) 
		{ var trx = web3.eth.getTransactionFromBlock(i); 
			console.log("Input Value: " + web3.toAscii(trx.input) + "\n"); } }