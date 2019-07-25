// 1. SET 
// Rewrite the sample code below so that every time a property is set a callback runs.
// your callback will check if the property changed is employees.

//If it is employees, make sure if it is an Array, a string or null.
//If anything else comes, respond with an appropriate message
//If not employees, let it pass

let manager = {
    office: `Dubai`,
    dept: `sales`,
    employees: 0
}
let callBack={
    set: (target,proname,newValue) => {
 
        if(proname == 'employees'){
            if(typeof(newValue) == 'string' || Array.isArray(newValue) || newValue == null ){
                target[proname] = newValue;
                return;           
            }else{
              console.log("Inapproprite Type");
              return;
            }
        }
        target[proname] = newValue;       
    }
}
let pr = new Proxy(manager,callBack);

pr.office = `London` //updates
pr.employees = ['Jim', 'Patrick', 'Mary']; //updates
pr.employees = 3; // doesn't update
pr.employees = null; // updates
pr.employees = {name:'Jim'} // doesn't update

// 2. GET
// adjust the following code so that anytime an internal object with accessLevel of 1 is accessed,
//"Access Denied" is retur  ned.
const users = [
    {
        username: `bob`,
        accessLevel: 1,
        accessCode: 1234
    },
    {
        username: `Mary`,
        accessLevel: 2,
        accessCode: 2345
    },
    {
        username: `Harold`,
        accessLevel: 2,
        accessCode: 9999
    }
]
class error extends Error{
    constructor(text){
      super();
      this.accessLevel = text;
      this.accessCode = text;
      this.username = text;
    }
}

let handler = {
 
    get: (target,proname) => {
      try{
          if(target[proname].accessLevel == 1){
            throw new error("Access Denied");
          }else{
            return target[proname];
          }
      }catch(e){
        return e;
      }
    }
}
let p = new Proxy(users,handler);

console.log(p[0].username)  // Access Denied
console.log(p[0].accessCode) // Access Denied
console.log(p[1].accessCode) // 2345
console.log(p[2].username) // Harold