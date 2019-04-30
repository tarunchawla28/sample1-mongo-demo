const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mongo-exercises');
const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: Date,
    isPublished: Boolean,
    price: Number
});

const Course = mongoose.model('Course', courseSchema);
/*async function getCourses1(){
    return await Course
                        .find({isPublished:true,tags:'backend'})
                        .sort({name:1})
                        .select({name:1, author:1})
}
async function run1(){
    const course1=await getCourses1();
    console.log(course1);
}
run1();*/

/*async function getCourses2() {
        return await Course
                            //.find({isPublished:true,tags:{$in: ['frontend','backend']}})
                            .find({isPublished:true})
                            .or([{tags:'frontend'},{tags:'backend'}])
                            .sort('-price')
                            .select('name author price')
}
async function run2() {
    const course2 = await getCourses2();
    console.log(course2);
}
run2();*/

async function getCourse3() {
    return await Course
                        .find({ isPublished: true})
                        .or([{price:{$gte:15}},{name:/.*by.*/i}])
}
async function run3() {
    const course3 = await getCourse3();
    console.log(course3);
}
run3();