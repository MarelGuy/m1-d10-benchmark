// 1st JS exercise

    let x = "john";
    let y = "doe";

    console.log(x + " <> " + y);

// 2nd JS exercise

let myObj = {
    "Name": "Duke",
    "Surname":"Nukem",
    "Email":"duke.nukem@gmail.com"
}

// 3rd JS exercise

console.log("Before deleting the Email: ", myObj)
delete myObj.Email;
console.log("After deleting the email:", myObj);


// 4th JS exercise

let myArr0 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];

// 5th JS exercise

console.log(myArr0);

// 6th JS exercise

   let myArr1 = [];
for (let i=0, t=100; i<t; i++) {
    myArr1.push(Math.round(Math.random() * t))
}
console.log(myArr1);

// 7th JS exercise

console.log(Math.min(...myArr1));
console.log(Math.max(...myArr1));

//8th JS exercise

let myArr2 = [[0], [1], [2], [3], [4], [5], [6], [7], [8], [9]];
console.log(myArr2[1]);
for (let i = 0; i < 10; i++) {

    for (let i = 0, t = 10; i < t; i++) {

        myArr2[i].push(Math.round(Math.random() * t))
    }

}

console.log(myArr2[3]);

//9th JS exercise

let myLilArr0 = [1, 3, 2, 11, 4, 6];
let myLilArr1 = [1, 7, 7, 4, 12];
    
function whoIsBigger() {
    

    if (myLilArr0 > myLilArr1) {
        return myLilArr0;
    } else {
        return myLilArr1;
    }
}

console.log(whoIsBigger(myLilArr0, myLilArr1));

// 10th JS exercise

let sumArr0 = myLilArr0.reduce((a, b) => a + b);
let sumArr1 = myLilArr1.reduce((a, b) => a + b);

function whoSumIsBigger() {
    if (sumArr0 > sumArr1) {
        return sumArr0;
    } else {
        return sumArr1;
    }
}

console.log(whoSumIsBigger(sumArr0, sumArr1));
