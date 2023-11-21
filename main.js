console.log('person1: shows a ticket');
console.log('person2: shows a ticket');

const premovie = async() => {
    const promiseWifeBringTickets = new Promise((resolve,reject) => resolve('ticket'));
   
    const getPopcon = new Promise((resolve,reject) => resolve(`popcon`));
    const getButter = new Promise((resolve,reject) => resolve(`butter`));
    const getColdDrinks  = new Promise((resolve,reject) => resolve(`colddrink`));

    let ticket = await promiseWifeBringTickets;

  let [popcon, butter ,colddrink] = await Promise.all([getPopcon,getButter,getColdDrinks]);
  console.log(`${popcon} , ${butter} , ${colddrink}`);

//     console.log(`wife: i have ${ticket}`);
//     console.log('husband: lets go in');
//     console.log('wife: no i am hungry')
     
//      let popcon = await getPopcon;
//      console.log(`husband: i got some ${popcon}`);
//     console.log('husband: lets go in');
//    console.log('wife: i need butter on my popcon')

//    let butter = await getButter;
//    console.log(`husband: i got some ${butter}`);
//    console.log('husband: anything else');
//    console.log('wife: no i wanna cold Drink too');
//    console.log('husband: ok my lord')

//    let colddrink = await getColdDrinks;
//    console.log(`husband: i got some ${colddrink}`);
//    console.log('husband: anything else');
//    console.log('wife: no lets go in we are late');
//    console.log('thank you');
    return ticket;
}
premovie().then((m) => console.log(`person3: shows ${m}`));

console.log('person4: shows a ticket');
console.log('person5: shows a ticket');