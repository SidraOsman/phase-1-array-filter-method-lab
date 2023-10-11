// Code your solution here

const drivers = ['Bobby' , 'Sammy' , 'Sally' , 'Annette' , 'Sarah' , 'bobby'];
const searchName = 'Bobby';
function findMatching(drivers , searchName){
    return drivers.filter(driver => driver.toLowerCase() === searchName.toLowerCase());
}

function fuzzyMatch(drivers , query){
    return drivers.filter(driver => driver.toLowerCase().startsWith(query.toLowerCase()));

}

const driversHomeTowns = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

  function matchName(drivers , searchName){
    return drivers.filter(driver => driver.name.toLowerCase() === searchName.toLowerCase());
  }
