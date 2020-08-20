console.log("hello from external javascript")

alert("Welcome to My Website")

var question4 = "What is your favorite color?"
var answer4 = prompt(question4)
console.log("great" + answer4 + "Thats My Favorite Color Too!!")

var brotherBearRentalDays = prompt("number of days rented brother bear")
var littleMermaidRentalDays =prompt("number of days rented little mermaid")
var herculesRentalDays = prompt("number of days rented hercules")
var allOfMovies = (+brotherBearRentalDays + +littleMermaidRentalDays + +herculesRentalDays) * 3
alert(allOfMovies)


var googlePay = 400
var amazonPay = 380
var faceBookPay = 350

var numberOfHours = "sum of all hours worked for the week";
console.log((googlePay + amazonPay + faceBookPay) * numberOfHours)
var googleHours = prompt("How many hours did you work for Google")
var amazonHours = prompt("How many hours did you work for Amazon")
var facebookHours = prompt("How many hours did you work for Facebook")
var  conFlictingSchedules = "does not conflict with schedule"

var weeklyPay = (+googleHours * googlePay) + (+amazonHours * amazonPay) + (+facebookHours * faceBookPay);
console.log(weeklyPay)

var classSize = 30
var allStuedtnsEnrolled = 20
var messesWithSchedule = true
var allowedToEnroll = (classSize > allStuedtnsEnrolled) && !messesWithSchedule;
console.log("Student can Join The Class" + allowedToEnroll)


var offerIsExpired = confirm("press Ok if offer not expired")
var numberOfItems = prompt("How Many Items are you Purchasing?")
var premiumMembership = confirm( "press ok if you have a premium membership")
var offerAdded = (numberOfItems > 2 || premiumMembership) && !offerIsExpired

console.log("offer is applied" + offerAdded);

