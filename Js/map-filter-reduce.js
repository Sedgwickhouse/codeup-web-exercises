const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];


// .2
const usersWithThreeLangs = users.filter(user => users.languages.length !== [3]);
console.log(usersWithThreeLangs);

//.3

 const userEmails = users.map(personalEmail => personalEmail.email);
console.log(userEmails);

//.4

const totalExperience = users.reduce(function(accum, curr){
   return curr.yearsOfExperience + accum;
},0)

// . 5

const longestEmail = users.reduce(function(email1,email2){
    if(email1.length > email2.length) {
        return email1
},'')


const joinedString = users.reduce((joined, user) =>,
    string.concat(user.name + ', '),'These are your instructors:')

