// the reason you write your code in diffrent files bcz of jam => Modules

const john = 'john'
const peter = 'peter'

const sayHi = (name) => {
    console.log(`Hello there ${name}`);
}

sayHi('susan')
sayHi(john)
sayHi(peter)

// now woulnt it make sense if the the names fn set eacha nd everything will be seprate and access throughout the app this will provide more structure thats what modules allow us to do