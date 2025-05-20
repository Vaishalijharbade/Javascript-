//const tinderUser = newObject()//creates empty objects
const tinderUser={}//creates empty objects

tinderUser.id ="123abc"
tinderUser.name ="Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email: "some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"vaishali",
            lastname:"jharbade"
        }
    }
}

// console.log(regularUser.fullname.userfullname)

//combining objects

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}

const obj3 = {obj1,obj2}//object ke andar objects ban rhe

// console.log(obj3)

const obj4 =Object.assign({},obj1,obj2)//target object->{},source objects-> obj1,obj2
console.log (obj4)

//using spread operators

const obj5 = {...obj1, ...obj2}
console.log(obj5)


const users= [
    {
        id:1,
        email:"v@gmail.com"
    },
    {
        id:3,
        email:"k@gmail.com"
    }
]
// console.log(users[1].email)

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty('isLoggedIn'))

const course = {
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"hitesh"
}

//course.courseInstructor

const{courseInstructor: instructor} = course
console.log(instructor)

//APIs-> apna kaam kisi ke sar pr daal dena

{
    "name": "hitesh",
    "coursename":"js in hindi",
    "price": "free"
}

[

]

//go through video no. 18 again