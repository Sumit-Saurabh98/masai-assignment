
function createBankAccount(amt){
    var initialAmount = amt;

    return {
        deposite: function(depositeAmount){
            if(depositeAmount > 0){
                initialAmount += depositeAmount;
                return initialAmount
            }
            return initialAmount
        },

        withdraw: (withdrawAmount) =>{
            if(withdrawAmount < initialAmount){
                initialAmount -= withdrawAmount
                return initialAmount
            }

            return "insufficient balance"
        },

        getBalance: function(){
            return initialAmount;
        }
    }
}

const bank = createBankAccount(100);

console.log(bank.deposite(50))
console.log(bank.withdraw(30))
console.log(bank.getBalance())