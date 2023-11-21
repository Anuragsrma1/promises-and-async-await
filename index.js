console.log('person1: shows a ticket');
console.log('person2: shows a ticket');

const promiseWifeBringTickets = new Promise((resolve,reject) =>{
    setTimeout(() => {
      resolve('ticket');
    },1000)
});

const getPopcon = promiseWifeBringTickets.then((t) => {
    console.log('wife: i have tickets');
    console.log('husband: lets go in');
    console.log('wife: no i am hungry')
    return new Promise((resolve,reject) => resolve(`${t} popcon`));
});

const getButter = getPopcon.then((t) => {  
    console.log('husband: i got some popcon');
    console.log('husband: lets go in');
   console.log('wife: i need butter on my popcon')
   return new Promise((resolve,reject) => resolve(`${t} butter`));
});

getButter.then((t) => console.log(t));

console.log('person4: shows a ticket');
console.log('person5: shows a ticket');