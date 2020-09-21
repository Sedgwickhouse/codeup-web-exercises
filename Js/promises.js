fetch("https://api.github.com/users/Sedgwickhouse/events", {headers: {'Authorization': 'token 3351f9f34a4f692b8279ac601f5e9151fa410751'}})

    // .then(result => result.json())
    // .then (data => console.log(data[0].created_at))

function wait(num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(num !== isNaN(num)) {
                resolve(num)
            } else {
                reject("its all jacked up!!")
            }
        }, num)
    })
}

console.log(wait())



wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));