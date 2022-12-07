const withdrawls = movements.filter(mov => mov < 0)

// accumulater => like a snowball
const balance = movements.reducee((acc, cur) => acc+cur
,0);


let balance2 = 0;
for (const mov of movements) balance2 += mov


calPrintBalance = function(movements){
    const balance = movements.reduce((acc, cur) => acc + cur, 0)

    labelBalance.textContent = `${balance} EUR`
}


//maximum value 
const max = movements.reduce((acc, cur) => {
    if (acc>mov)
        return acc;
    else 
        return mov;
}, movements[0]);


// challenge video:
const calHumanAge = function(ages){
     const humanAges = ages.map(age => (age >=2 ? 2*age : 16 + age*4))
};

calHumanAge()




