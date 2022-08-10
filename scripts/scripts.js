class Human {
    constructor(height, weight, name, date, gender, disability) {
        this.height = height;
        this.weight = weight;
        this.name = name;
        this.date = date;
        this.gender = gender;
        this.disability = !!disability;
    }

    sayHello () {
        console.log( `Hello, my name is ${this.name}`);
    }

    get getInfo () {
        const info = {
            height: this.height,
            weight: this.weight,
            name: this.name,
            date: this.date,
            gender: this.gender,
            disability: this.disability,
        }
        console.log(info);
    }

    set setNewName(name) {
        this.name = name
    }
    set setNewDisability(disability){
        this.disability = disability;
    }

}

const firstHuman= new Human (174,74,'Petya',new Date(1996,2,24),"male","have" );
firstHuman.sayHello();
console.log(firstHuman);
firstHuman.getInfo;
firstHuman.setNewName="Andrei";
firstHuman.setNewDisability= false;
console.log(firstHuman);

class frontendDeveloper extends Human {
    constructor(height, weight, name, date, gender, disability, careerStart, previousCompanies) {
        super(height, weight, name, date, gender, disability);
        this.careerStart = careerStart;
        this.previousCompanies = [{
            start: new Date(2006, 4, 12),
            end: new Date(2020, 6, 25),
            salaryPerMonth: Number(20000),
            position: 'middle',
            companyName: 'Oracle',
        }, {
            start: new Date(2012, 7, 5),
            end: new Date(2017, 8, 6),
            salaryPerMonth: Number(8000),
            position: 'junior',
            companyName: 'Wasted',
        }]

    }

    get getInfo() {
        return super.getInfo;
    }

    sayHello2() {
        console.log(`Привет, меня зовут ${this.name}, я Фронтенд разработчик. Работаю с ${this.careerStart}`)
    }

    SalaryPerMouth() {
        let salaryInCompany;
        this.previousCompanies.forEach((num) => {
            let salaryYear = (num.end.getFullYear() - num.start.getFullYear()) * 12;
            let salaryMonth = salaryYear + (num.end.getMonth() - num.start.getMonth());
            salaryInCompany = num.salaryPerMonth * salaryMonth
        })
        console.log(salaryInCompany, `salaryInCompany`);
    }
    nameCompany(){ let companyName = prompt("Enter name of company", "Oracle");
        this.previousCompanies.filter((num) => {
            if (num.companyName === companyName) {
                console.log(num);
            }
        });
    }
    setNewCompany (newCompany) {
        this.previousCompanies.push(newCompany);
        console.log(this.previousCompanies);
    }

}
const firstFrontendDeveloper = new frontendDeveloper(183,85,"Joi",new Date(1992,4,15),"female",false, new Date(2014,6,12) );
console.log(firstFrontendDeveloper);
firstFrontendDeveloper.sayHello2();
firstFrontendDeveloper.SalaryPerMouth();
firstFrontendDeveloper.nameCompany();
let newWork = {
    start: new Date(2005,6,4),
    end: new Date(2008,2,18),
    salaryPerMonth: 7000,
    position: 'midle',
    companyName: 'Clint',
}
firstFrontendDeveloper.setNewCompany(newWork);
firstFrontendDeveloper.getInfo;

class builder extends Human {
    constructor(height, weight, name, date, gender, disability,constructionSiteLocation, setOfTools,speed) {
        super(height, weight, name, date, gender, disability);
        this.constructionSiteLocation = constructionSiteLocation;
        this.setOfTools =setOfTools ;
        this.speed = Number(speed);
    }

    get getInfo() {
        return super.getInfo;
    }

    bildinHouse() {
        let squareMeter = prompt("Enter square Meters");
        let hourOfWOrk = (this.speed * squareMeter) / 60;

        let day = 0;
        let week = 0;
        let month = 0;
        let year = 0;

        if (hourOfWOrk < 24) {
            console.log(`На стройку уйдет ${hourOfWOrk} часов !`);
        }else if (hourOfWOrk >= 24 && hourOfWOrk <= 168) {
            day = (hourOfWOrk / 24).toString();

            hourOfWOrk = day[2] || 0;

            console.log(`На стройку уйдет ${parseInt(day)} дней и ${hourOfWOrk} часов!`);
        } else if (hourOfWOrk >= 168 && hourOfWOrk < 730) {
            week = (hourOfWOrk / 168).toString();

            day = week[2];
            hourOfWOrk = week[3];
            console.log(`На стройку уйдет ${parseInt(week)} недель, ${day} дней и ${hourOfWOrk} часов!`);
        } else if ( hourOfWOrk >= 730 && hourOfWOrk < 8760) {
            month = (hourOfWOrk / 730).toString();
            week = month[2];
            day = month[3];
            hourOfWOrk = month[4];

            console.log(`На стройку уйдет ${parseInt(month)} месяцев, ${week} недель, ${day} дней и ${hourOfWOrk} часов!`);
        } else  {
            year = (hourOfWOrk / 8666).toString()
            month = year[2];
            week = year[3];
            day = year [4];
            hourOfWOrk = year[5];
            console.log(`На стройку уйдет ${parseInt(year)} лет, ${month} месяцев, ${week} недель, ${day} дней и ${hourOfWOrk} часов!`);
        }
    }
}

const firstBuilder = new builder(172,68,"Sam",new Date(1984,3,16), "male","have","Palm Springs",["кирка", "топор"],30);
console.log(firstBuilder);
firstBuilder.bildinHouse();
firstBuilder.getInfo;



