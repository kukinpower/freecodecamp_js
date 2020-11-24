/*
Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.
cid is a 2D array listing available currency.
The checkCashRegister() function should always return an object with a status key and a change key.
Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.
Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.
Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/cash-register
*/

function checkCashRegister(price, cash, cid) {
	var unitAmount = [
	  ["ONE HUNDRED", 100],
	  ["TWENTY", 20],
	  ["TEN", 10],
	  ["FIVE", 5],
	  ["ONE", 1],
	  ["QUARTER", 0.25],
	  ["DIME", 0.1],
	  ["NICKEL", 2.05],
	  ["PENNY", 0.01]
	];
  
	var change = {
	  status: "",
	  change: []
	}
	var diff = cash - price;
	var totalMoney = 0;
	for (var i = cid.length - 1; i >= 0; i--) {
	  totalMoney += cid[i][1];
	}
	if (totalMoney < diff) {
		change.status = "INSUFFICIENT_FUNDS";
	} else if (totalMoney === diff) {
		change.status = "CLOSED";
		change.change = cid;
	} else {
		var i = 0;
		var j = unitAmount.length - 1;
		while (i < unitAmount.length) {
			if (cid[j][1] > unitAmount[i][1] && diff >= unitAmount[i][1]) {
				var name = cid[j][0], howMuch = 0;
				while (cid[j][1] >= unitAmount[i][1] && diff >= unitAmount[i][1]) {
					howMuch += unitAmount[i][1];
					cid[j][1] -= unitAmount[i][1];
					diff -= unitAmount[i][1];
					diff = Math.round(diff * 100) / 100;
				}
				change.change.push([name, howMuch]);
			}
			i++;
			j--;
		}
		if (change.change.length == 0)
			change.status = "INSUFFICIENT_FUNDS";
		else
			change.status = "OPEN";
	}
	return change;
  }
  