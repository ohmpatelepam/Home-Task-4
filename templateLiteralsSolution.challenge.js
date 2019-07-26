// using template literals build a JS program to check if a person is eligible for a price discount or not
// check if 
// if a registered member - discount is 5% 
// if not registered member - discount is 4%

let users = [
    {
        name:"ohm",
        age:21,
        newuser:false
    },
    {
        name:"patel",
        age:25,
        newuser:true
    }

]

const checkDiscount = (user) => {
   
   return (user.newuser)?(4):(5);
}

console.log(`The discount for ${users[0].name} is ${checkDiscount(users[0])} %`);