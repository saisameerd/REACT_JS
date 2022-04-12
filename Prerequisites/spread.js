let arr = [ "HI" , "sai", "sameer" , "king"];

let arr2 = JSON.parse(JSON.stringify(arr));

arr[1] = 9;
arr[0] = 18 ;

console.log(arr);


console.log(arr2);




