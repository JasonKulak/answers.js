////////////////////
//PART 1: HTML & CSS
////////////////////



////////
//PART 2
////////

////////////
//EASY GOING
////////////

for (let i = 1; i <= 20; i++) {
    console.log(i)
}

//////////
//Get Even
//////////

for (let i = 2; i <= 200; i+=2) {
    console.log(i)
}

///////////
//Fizz Buzz
///////////

{
for (let i = 1; i <= 100; i++) {
    
if ((i % 3 === 0) && (i % 5 === 0)){
        console.log('FizzBuzz')
    } else if  (i % 3 === 0){
        console.log('Fizz')
    } else if (i % 5 === 0){
        console.log('Buzz')
    } else console.log(i); {
        
        
}

}

}
////////////////
//Wild Wild Life
////////////////

const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

//1. Plantee just had her birthday; change Plantee's array to reflect her being a year older.
{
const index = 2;
const newAge = 5001;
plantee[2] = newAge;
console.log(plantee);
}
//2. Change Wolfy's hometown from "Yukon Territory" to "Gotham City".
{
const index = 3;
const newHomeTown = "Gotham City";
wolfy[3] = newHomeTown;
console.log(wolfy);
}
//3. Give D'Art a second hometown by adding "Hawkins"
{
dart.push("Hawkins");
console.log(dart);
}
//4. Porgee decides that Wolfy can't be named "Wolfy" anymore. 
//Remove "Wolfy" from the wolfy array and replace it with "Gameboy".
{
const index = 0;
const newName = "Gameboy";
wolfy[0] = newName;
console.log(wolfy);
}

///////////////////////////
//Yell at the Ninja Turtles
///////////////////////////

//

{
const ninjaTurtles = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo']
for (let i = 0; i <= 3; i++);
const i = ninjaTurtles
console.log(i);
}

//


////////////////////
//Methods, Revisited
////////////////////

{
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
//console log: the index of Titanic
{
console.log(favMovies.indexOf('Titanic'));
}
//1. use the .sort method - what did this do to the array? It sorted the movies in alphabetical order
//Did it  permanently alter it?  I don't believe so.  I take that back, it has
{
favMovies.sort();
console.log(favMovies)
}

//2. Use the method pop
favMovies.pop();
console.log(favMovies)

//3. push "Guardians of the Galaxy"
{
favMovies.push('Guardians of the Galaxy');
console.log(favMovies)
}

//4. Reverse the array
{
    favMovies.reverse();
    console.log(favMovies)
}

//5. Use the shift method
{
    favMovies.shift();
    console.log(favMovies)
}

//6. unshift - what does it return?
{
    favMovies.unshift('Guardians of the Galaxy');
    console.log(favMovies)
}
//7. splice "Django Unchained" and add "Avatar" (try finding the index of "Django Unchained", instead of counting it yourself) 
//Thought question: did this permanently alter our array?
{
favMovies.splice(15, 1, 'Avatar');
//(15 is the index, 1 is the element being replaced(if not replacing an element put 0), 'Avatar' is replacing 'Django')
console.log(favMovies)
}
//8. slice the last half of the array (challenge yourself and try to programatically determine the middle of the array 
//rather than counting it and hard coding it) - Thought question: did this permanently alter our array?
{
const half = Math.ceil(favMovies.length / 2)
const firstHalf = favMovies.slice(0, half)
const secondHalf = favMovies.slice(half)
console.log(firstHalf);
}
//9. store the value of your slice in a variable, console.log it - Thought question: what is going on here?
{
//Answer is above in question 8
}
//10. console.log your final results
console.log(favMovies)
//After running the above tasks, console.log the index of "Fast and Furious" 
//-We removed it from the array, what value do we get when we look for the index of something that is not in the array?
console.log(favMovies.indexOf('Fast and Furious'));
//Not sure what happened here ^^^^

//Thought question: that we declared the variable favMovies with const, and yet, we were allowed to change the array. 
//Weird? Should we have used let?

//That is weird! I'm not sure if we should've used let.  I mean, if it's not broke, don't fix it? 
//I'd love to hear/learn about how/why this worked

}

////////////////
//Where is Waldo
////////////////
{
const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                    ["Lucinda", "Jacc", "Neff", "Snoop"],
                    ["Petunia", 
                    ["Baked Goods", "Waldo"]
                            ]
                        ];

//Remove Eggbert (hint look at the slice/splice method(s))
//NOTE: Index placement is different
{
const names = whereIsWaldo.slice(1, 2);
console.log(names)

}
//Change "Neff" to "No One"
{
newIndexTwo = ["Lucinda", "Jacc", "No One", "Snoop"];
whereIsWaldo.splice(2, 1, newIndexTwo);
console.log(whereIsWaldo)
}

//Access and console.log "Waldo"
{
    console.log(whereIsWaldo.indexOf("Waldo"));
}
}

////////////////
//Excited Kitten
////////////////

//Write code that logs "Love me, pet me! HSSSSSS!" 20 times.
{


const catTalk = ['...human...why you taking pictures of me?...', '...the catnip made me do it...','...why does the red dot always get away...'];
for (let i = 1; i <=20; i++) {
    const i = 'Love me, pet me! HSSSSSS!'
    console.log(i)
    if  (i % 2 === 0){
        console.log(Math.random(catTalk))

let meow = 0;
let paw = 1;
let whiskers = 2;
catTalk[meow];
catTalk[paw];
catTalk[whiskers];

} 

}
//Not sure where I'm going wrong but time is running out and I need to submit this :/
}

//For every even number in your loop, log "...human...why you taking pictures of me?...", 
//"...the catnip made me do it...", 
//or "...why does the red dot always get away..." at random.

/////////////////
//Find the Median
/////////////////

//Find the median number in the following nums array, then console.log that number.
//hint if you check the length of the array / 2, you might get not get a whole number. 
//In which case, look into Math.floor( // something )
{
const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];

function findMedian(nums) {
    nums.sort((a, b) => a - b);
    const middleIndex = Math.ceil(nums.length / 2);

    if (nums.length % 2 === 0) {
        return (nums[middleIndex - 1] + nums[middleIndex]) / 2;
    } else {
        return nums[middleIndex];
    }
}
console.log(findMedian(nums))
}
// I read and read and read about the function above but I don't think I fully understand it