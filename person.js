class person{
    constructor(name,age,education)
    {
        (this.name)=name;
        (this.age)=age;
        (this.education)=education;
    };
    greet()
    {
        console.log(`hello my name is ${this.name} i am ${this.age} old my qualification is ${this.education}`);
    };
};
const person1=new person("karthika",21,"B.E");
const person2=new person("hariii",22,"B.TECH");
person1.greet();
person2.greet();