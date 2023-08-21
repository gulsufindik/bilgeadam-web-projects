const DATA_USERS = [
  { id: 1, name: "Burak" },
  { id: 2, name: "Yasemin" },
  { id: 3, name: "Aykut" },
  { id: 4, name: "Süheyla" },
  { id: 5, name: "Kaan" },
  { id: 6, name: "Defne" },
  { id: 7, name: "Perihan" },
];

const DATA_NUMS = [1, 3, 4, 5, 7, 11];

// --- *** foreach *** ---
DATA_NUMS.forEach(logItem);

function logItem(item, index, arr) {
  console.log(item, index, arr);
}

DATA_NUMS.forEach((item, index, arr) => {
  console.log(item, index, arr);
});

DATA_NUMS.forEach((item) => console.log(item));

DATA_NUMS.forEach(function (item, index, arr) {
  console.log(item, index, arr);
});

// --- *** filter *** ---

const evenNumsArr = DATA_NUMS.filter(filterEvenNums);

function filterEvenNums(num) {
  /*
        if(num % 2 === 0){
            return true;
        }

        return false;
        */

  return num % 2 === 0;
}

console.log(evenNumsArr);

// filter users according to id

const selectedUsers = DATA_USERS.filter((user) => user.id > 4);

console.log(selectedUsers);

// *****
const filteredUsers = DATA_USERS.filter(selectUsers);

function selectUsers(user) {
  /*
    if(user.id>4){

        return true;

    }

    return false;
*/

  return user.id > 4;
}

console.log(filteredUsers);

// --- *** map *** ---

const doubles = DATA_NUMS.map(makeDouble);

function makeDouble(num) {
  return num * 2;
}

console.log(doubles);

// data { source:"01.jpg" , id:0 } // https://www.instagram.com/media/01.jpg

const images = [
  { id: 1, source: "01.jpg" },

  { id: 2, source: "02.jpg" },

  { id: 3, source: "03.jpg" },

  { id: 4, source: "04.jpg" },

  { id: 5, source: "05.jpg" },
];

const newImages = images.map((image) => {
  const newImage = {
    source: "https://www.instagram.com/media/" + image.source,
    id: image.id,
  };

  return newImage;
});

newImages[0].source = "x";

console.log(newImages, "***");

console.log(images, "***");

// --- *** reduce *** ---

const basket = [200, 300, 1200, 450];

const loan = 2400;

const total1 = basket.reduce(function (acc, price, index, arr) {
  return acc + price;
}, loan);

console.log(total1);

const total2 = basket.reduce((acc, price) => acc + price);

console.log(total2);

const userBasket = [
  { id: 1, title: "IBM laptop", price: 38000 },
  { id: 2, title: "Case", price: 1000 },
  { id: 3, title: "Bag", price: 2500 },
];

/*
acc, currentItem

reduce( callback )

*/

const userTotalSpending = userBasket.reduce((acc, item) => acc + item.price, 0);
console.log(userTotalSpending);

const str = "Dada";
const rev = str.split("").reduce((acc, currentLetter) => currentLetter + acc);

console.log(rev);

// ---  every ---

const nums = [1, 15, 5, 7, 9, 11];

const DATA_LOCATIONS = [
  { lat: 123.32, long: 34.5 },
  { lat: 88.32 , },
  { lat: 123.45, long: 28.5 },
];

const isAllOdd = nums.every((num) => num % 2 !== 0);

console.log(isAllOdd, "****");

const allHasLong=DATA_LOCATIONS.every(item=>{

  if(item.hasOwnProperty('long')){

      return false

  }

  return true

})



console.log(isLongExist)


const isAllDataHasLongField = DATA_LOCATIONS.every(x=>{

  let exists=false;

  for (const field in x) {

      if(field==="long")

      exists=true;

  }

  return exists;

})

console.log(isAllDataHasLongField);


// ---  some ---

// --- find ---

// --- findLast ---

// --- findIndex

// --- sort ---
