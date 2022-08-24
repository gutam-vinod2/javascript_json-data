const data = {
"name": "vinod",
"age" : 23,
"hobby" : {
       "reading" : true,
       "gaming"  : false,
       "sport"   : "football"
},
"class" :["javascript", "html","css"]
}

//accesing JSON object
console.log(data.name);
console.log(data.hobby);

console.log(data.hobby.sport);
console.log(data.class[1]);