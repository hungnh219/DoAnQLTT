// connect to metamask
let account
const connectMetamask = async () => {
    if(window.ethereum !== "undefined"){
        const accounts = await ethereum.request({method: "eth_requestAccounts"});
        account = accounts[0];
        document.getElementById("accountArea").innerHTML = account;
    }
}

// connect to smart contract
const connectContract = async () => {
    const ABI = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_mssv",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_HoTen",
				"type": "string"
			},
			{
				"internalType": "int256",
				"name": "_Tuoi",
				"type": "int256"
			},
			{
				"internalType": "string",
				"name": "_TienDu",
				"type": "string"
			}
		],
		"name": "changeAcc",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_balance",
				"type": "string"
			}
		],
		"name": "changeBalance",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "int256",
				"name": "ranNumber",
				"type": "int256"
			}
		],
		"name": "countStepUser1",
		"outputs": [
			{
				"internalType": "int256",
				"name": "",
				"type": "int256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "int256",
				"name": "ranNumber",
				"type": "int256"
			}
		],
		"name": "countStepUser2",
		"outputs": [
			{
				"internalType": "int256",
				"name": "",
				"type": "int256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "int256",
				"name": "ranNumber",
				"type": "int256"
			}
		],
		"name": "countStepUser3",
		"outputs": [
			{
				"internalType": "int256",
				"name": "",
				"type": "int256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "int256",
				"name": "ranNumber",
				"type": "int256"
			}
		],
		"name": "countStepUser4",
		"outputs": [
			{
				"internalType": "int256",
				"name": "",
				"type": "int256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "acc",
		"outputs": [
			{
				"internalType": "string",
				"name": "MSSV",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "HoTen",
				"type": "string"
			},
			{
				"internalType": "int256",
				"name": "Tuoi",
				"type": "int256"
			},
			{
				"internalType": "string",
				"name": "TienDu",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "int256",
				"name": "left",
				"type": "int256"
			},
			{
				"internalType": "int256",
				"name": "right",
				"type": "int256"
			},
			{
				"internalType": "int256",
				"name": "ranNumber",
				"type": "int256"
			},
			{
				"internalType": "int256",
				"name": "__count",
				"type": "int256"
			}
		],
		"name": "binarySearch",
		"outputs": [
			{
				"internalType": "int256",
				"name": "",
				"type": "int256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "expression",
				"type": "string"
			}
		],
		"name": "calculateExpression",
		"outputs": [
			{
				"internalType": "int256",
				"name": "",
				"type": "int256"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "int256",
				"name": "x",
				"type": "int256"
			},
			{
				"internalType": "int256",
				"name": "y",
				"type": "int256"
			}
		],
		"name": "checkAnswerExpression",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAcc",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "MSSV",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "HoTen",
						"type": "string"
					},
					{
						"internalType": "int256",
						"name": "Tuoi",
						"type": "int256"
					},
					{
						"internalType": "string",
						"name": "TienDu",
						"type": "string"
					}
				],
				"internalType": "struct RewardSystem.Acc",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "int256",
				"name": "x",
				"type": "int256"
			},
			{
				"internalType": "int256",
				"name": "y",
				"type": "int256"
			}
		],
		"name": "min",
		"outputs": [
			{
				"internalType": "int256",
				"name": "",
				"type": "int256"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	}
	];

    const Address = "0xe6dCcA7C941cBA426525D78678ED516139719C9A";
    window.web3 = await new Web3(window.ethereum);
    window.contract = await new window.web3.eth.Contract(ABI, Address);
    document.getElementById("contractArea").innerHTML = "Connected to Smart Contract";
}
// read data from smart contract
// const readContract = async () => {
//     const data = await window.contract.methods.getName().call();
//     document.getElementById("dataArea").innerHTML = data;
// }
const readContract = async () => {
    const data = await window.contract.methods.getAcc().call();

// Hiển thị dữ liệu trên giao diện web
    document.getElementById("dataArea_mssv").innerHTML = data[0];
    document.getElementById("dataArea_hoTen").innerHTML = data[1];
    document.getElementById("dataArea_tienDu").innerHTML = data[3] + " ETH";
}

// change data from smart contract
const changeContract = async () => {
    const myEntry = document.getElementById("inputArea").value;
    await window.contract.methods.changeBalance(myEntry).send({from: account});
    readContract();  
}

const randomNumber = async () => {
    function rewardToken(x){
        if (x <= 5)
            return 10;
        else if (x <= 30)
            return 5;
        else if (x <= 50)
            return 2;
        else
            return 0;
    }
                
    // random number   
    var ranNumber = Math.floor(Math.random() * 100) + 1;
    document.getElementById("number").innerHTML = ranNumber;
    
    
    // count step
    var stepUser1, stepUser2, stepUser3, stepUser4;
    stepUser1 = await window.contract.methods.countStepUser1(ranNumber).call();
    stepUser2 = await window.contract.methods.countStepUser2(ranNumber).call();
    stepUser3 = await window.contract.methods.countStepUser3(ranNumber).call(); 
    stepUser4 = await window.contract.methods.countStepUser4(ranNumber).call();
    
    document.getElementById("stepUser1").innerHTML = stepUser1;
    document.getElementById("stepUser2").innerHTML = stepUser2;
    document.getElementById("stepUser3").innerHTML = stepUser3;
    document.getElementById("stepUser4").innerHTML = stepUser4;
    
    document.getElementById("tokenUser1").innerHTML = rewardToken(stepUser1);
    document.getElementById("tokenUser2").innerHTML = rewardToken(stepUser2);
    document.getElementById("tokenUser3").innerHTML = rewardToken(stepUser3);
    document.getElementById("tokenUser4").innerHTML = rewardToken(stepUser4);

    document.tokenUser1.style.backgroundColor = "red";
}
let expression_test = 'fdsfsdf';

const randomExpression = async () => {
	function generateExpression() {
        const operators = ['+', '-'];
        const numOperands = Math.floor(Math.random() * 3) + 2; // Randomly generate 2 to 4 operands
        let expression = '';
        
        for (let i = 0; i < numOperands; i++) {
            const operand = Math.floor(Math.random() * 9) + 1; // Randomly generate operand from 1 to 9
            expression += operand;
        
            if (i < numOperands - 1) {
            const operator = operators[Math.floor(Math.random() * operators.length)]; // Randomly select operator
            expression += ` ${operator} `;
            }
        }
        
        return expression;
    }

    const expression1 = generateExpression();
	expression_test = expression1;
    document.getElementById("expression").innerHTML = expression1;
    // const data = await window.contract.methods.calculateExpression(expression1).call();   
    // document.getElementById("dataArea_Name").innerHTML = data;
}

const checkAnswerExpression = async () => {
	// document.getElementById("expression_test").innerHTML = expression_test;
    const answerExpression = await window.contract.methods.calculateExpression(expression_test).call();

	const answerUser1 = document.getElementById("answer_User1").value;
	const answerUser2 = document.getElementById("answer_User2").value;
	const answerUser3 = document.getElementById("answer_User3").value;
	const answerUser4 = document.getElementById("answer_User4").value;

	if (answerUser1 == answerExpression)
		document.getElementById("tokenTask2User1").innerHTML = 10;
	else
		document.getElementById("tokenTask2User1").innerHTML = 0;

	if (answerUser2 == answerExpression)
		document.getElementById("tokenTask2User2").innerHTML = 10;
	else
		document.getElementById("tokenTask2User2").innerHTML = 0;

	if (answerUser3 == answerExpression)
		document.getElementById("tokenTask2User3").innerHTML = 10;
	else
		document.getElementById("tokenTask2User3").innerHTML = 0;

	if (answerUser4 == answerExpression)
		document.getElementById("tokenTask2User4").innerHTML = 10;
	else
		document.getElementById("tokenTask2User4").innerHTML = 0;

}



