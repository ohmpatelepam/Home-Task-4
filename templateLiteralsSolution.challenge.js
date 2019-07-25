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

const checkDiscountMultiplier = (user) => {
    if(user.newuser){
        return 0.04;
    }else{
        return 0.05;
    }
}

console.log(checkDiscountMultiplier(users[0]));