// check the given age is eligible for voting

function checkEligibility(age){
    if (age >= 18){
        return "Eligible for voting";
    }else{
        return "Not Eligible for voting"
    }
}
console.log(checkEligibility(20));
console.log(checkEligibility(5));

