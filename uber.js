class uber{
constructor(name,loaction,designation,km)
    {

        (this.name)=name;
       (this.location)=loaction;
       (this.designation)=designation;
       (this.amount)=50*km;

    
    }
    customer()
    {
         console.log(`customer name:${this.name} from loaction ${this.location} to designation ${this.designation} total amount${this.amount}`)
    };
};
const travel=new uber("karthika","sivakasi","cbe",280);
travel.customer();
