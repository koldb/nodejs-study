//array
var members = ['ldb', 'cho', 'hyu'];
console.log(members[1]);
var i = 0;
while(i<members.length){
    console.log('array loop',members[i]);
    i += 1;
}


//object
var roles = {'programmer':'ldb',
             'designer':'cho',
             'manager':'hyu'};
console.log(roles.designer);
console.log(roles['designer']);
for(var name in roles){
    console.log('object => ', name, 'value =>', roles[name]);
}