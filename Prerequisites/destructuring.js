let obj = {
    name : "sameer",
    address : {
        country :"India"
    },
}

let {name , address : {country}} = obj



console.log(obj)
console.log(name , country)