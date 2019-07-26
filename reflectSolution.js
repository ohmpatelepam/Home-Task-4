
let course = {

}

// use  reflect API to define property,  delete a property, getOwnpropertydescriptor details
// property to define - name with value as "Javascript", make it read only (writable : false)
// property to define - duration with value as "3 hours", make it read only (writable : false)
// getOwnpropertydescriptor - check and print metadata about name property

Reflect.defineProperty(course,"name",{
  value:"Javascript",
  writable:false,
  configurable:true,
  enumerable:true
});
Reflect.defineProperty(course,"duration",{
  value:"3 Hours",
  writable:false,
  configurable:true,
  enumerable:true
});

if(Reflect.has(course,"name")){
  let obj = Reflect.getOwnPropertyDescriptor(course,"name");  
}

if(Reflect.has(course,"name")){
  Reflect.deleteProperty(course,"name");
}
