const accountId = 3423232
let accountEmail = "vaish@gmail.com"
var accountPassword = "23232"
accountCity = "Jaipur"
let accountState;

// accountId = 2 //not allowed

accountEmail = "djhdjh@gmail.com"
accountPassword = "242323"
accountCity = "Benguluru"

console.table([accountId, accountPassword, accountEmail, accountCity, accountState])
/* Prefer not to use var because
of issue in block scope and functional scope*/