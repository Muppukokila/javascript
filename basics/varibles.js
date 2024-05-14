const accountId = 1445533;
let accountEmail = "kokila@gmail.com";
var accountPassword = "12345";
accountCity = "Jaipur";
let accountStatus;

//accountId = 2;  --not allowed
/*
Prefer not to use var
because of issue in block scope & functional scope
*/

accountEmail="kok@gmail.com";
accountPassword="2535";
accountCity="Hyderabad";
console.log(accountId);
console.log(accountEmail);
console.table([accountId,accountEmail,accountPassword,accountCity,accountStatus]);