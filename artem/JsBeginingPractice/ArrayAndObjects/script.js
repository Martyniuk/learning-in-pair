function addTwoToEveryNumberInTheList (list) {
  // an example for you to see how the tests work
  
  const newList = [];

  for (let i = 0; i < list.length; i++) {
    newList.push(list[i] + 2);
  }
  
  return newList;
} 

function findLargestNumber(list) {
  // return the largest number in array
  
  return Math.max.apply(null, list);
}

function makeDogObject() {
  
    const dog = {
      name: "Fido",
      color: "white",
      age: 6,
      speak() {
      return "woof";
    }
  }
  // return a dog object that
  //   has a speak method that returns woof
  //   has a name property of "Fido"
  //   has a color property of "white"
  //   has an age property of 6

  return dog;
}

function getListOfNames(list) {
 /*let listOfNames = [];
  
 for (let i = 0; i < list.length; i++) {
   console.log(listOfNames.push(list[i].name));
 }
 return listOfNames;
 */
 /*let listOfNames = [];
  
  list.forEach(function(person) {
    console.log(listOfNames.push(person.name));
  });*/
  
  let listOfNames = [];
  
  list.map(function(person) {
    return listOfNames.push(person.name);
  });
  
  // list is an array of objects that looks like this
  // { name: "Some Person", jobTitle: "Boss Person", age: 30 }
  // return a list of all the workers' names

  return listOfNames;
}

function getAverageAge(list) {
  // using the same list as above, get the average age of all the workers'
  let totalAge = 0;
  let objectNumber = 0;
  
  for (let i = 0; i < list.length; i++) {
   totalAge += list[i].age;
   objectNumber += 1;
 }
  
  return totalAge / objectNumber;
}

function getAllEngineers(list) {
  // using the same list as above, return a list of all people who have the word "Engineer" in their jobTitle
  let engineerNames = [];
  
  for (let i = 0; i < list.length; i++)  {
    if (list[i].jobTitle.includes("Engineer")) {
      engineerNames.push(list[i].name);
    }
  }
  
  return engineerNames;
}

function sort(list) {
  // sort a list of numbers into ascending order
  // if you need more help, Google how to do bubble sort
  // you can sort, if you want to write it by hand, use bubble sort or insertion sort

    let len = list.length;
    let checked;
    do {
        checked = false;
        for (let i = 0; i < len; i++) {
            if (list[i] > list[i + 1]) {
                let tmp = list[i];
                list[i] = list[i + 1];
                list[i + 1] = tmp;
                checked = true;
            }
        }
    } while (checked);

  return list;
};

// unit tests
// do not modify the below code

describe("addTwoToEveryNumberInTheList", function() {
  it("should add two to every number in a list - test case", function() {
    expect(addTwoToEveryNumberInTheList([2, 3, 4, 6, 9, 1])).toEqual([4, 5, 6, 8, 11, 3]);
  });
  
  it("should add two to every number in a list - list of one", function() {
    expect(addTwoToEveryNumberInTheList([1])).toEqual([3]);
  });
  
  it("should add two to every number in a list - empty list", function() {
    expect(addTwoToEveryNumberInTheList([])).toEqual([]);
  });
});

describe("findLargestNumber", function() {
  it("test case 1", () => {
    const numbers = [5, 2, 9, 30, 12, 1, 0, 13];

    expect(findLargestNumber(numbers)).toBe(30);
  });
  it("test case 2", () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    expect(findLargestNumber(numbers)).toBe(10);
  });
  it("test case 3", () => {
    const numbers = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

    expect(findLargestNumber(numbers)).toBe(10);
  });
  it("test case 4", () => {
    const numbers = [1];

    expect(findLargestNumber(numbers)).toBe(1);
  });
});

describe("makeDogObject", function() {
  let dog;
  beforeEach(function() {
    dog = makeDogObject();
  });
  it("should should have a name", function() {
    expect(dog.name).toBe("Fido");
  });
  it("should should have an age", function() {
    expect(dog.age).toBe(6);
  });
  it("should should have a color", function() {
    expect(dog.color).toBe("white");
  });
  it("should speak", function() {
    expect(dog.speak()).toBe("woof");
  });
});

describe("tests with jobs", function() {
  const people = [
    {
      name: "Rafi Backe",
      jobTitle: "Research Assistant IV",
      age: 41
    },
    {
      name: "Gottfried Balser",
      jobTitle: "Mechanical Systems Engineer",
      age: 55
    },
    {
      name: "Lauraine Nore",
      jobTitle: "Assistant Media Planner",
      age: 61
    },
    {
      name: "Allayne Burstow",
      jobTitle: "Help Desk Technician",
      age: 48
    },
    {
      name: "Alan Tumber",
      jobTitle: "Senior Developer",
      age: 23
    },
    {
      name: "Carlyn Urrey",
      jobTitle: "Operator",
      age: 59
    },
    {
      name: "Kerrin Anstee",
      jobTitle: "Staff Accountant III",
      age: 38
    },
    {
      name: "Hube Tibbles",
      jobTitle: "VP Product Management",
      age: 41
    },
    {
      name: "Niki Core",
      jobTitle: "Engineer I",
      age: 18
    },
    {
      name: "Guntar Shailer",
      jobTitle: "Accounting Assistant I",
      age: 57
    },
    {
      name: "Sophi Brophy",
      jobTitle: "Senior Financial Analyst",
      age: 48
    },
    {
      name: "Arluene McRoberts",
      jobTitle: "Business Systems Development Analyst",
      age: 51
    },
    {
      name: "Belvia Fearnehough",
      jobTitle: "Paralegal",
      age: 50
    },
    {
      name: "Rickey Dorrance",
      jobTitle: "Administrative Officer",
      age: 25
    },
    {
      name: "Patrick McQueen",
      jobTitle: "Senior Editor",
      age: 23
    },
    {
      name: "Garland Clyne",
      jobTitle: "Sales Representative",
      age: 41
    },
    {
      name: "Oliver Smallwood",
      jobTitle: "Biostatistician IV",
      age: 21
    },
    {
      name: "Neile Ion",
      jobTitle: "Sales Representative",
      age: 51
    },
    {
      name: "Lissy Pursey",
      jobTitle: "VP Marketing",
      age: 30
    },
    {
      name: "Sile O'Devey",
      jobTitle: "Computer Systems Analyst I",
      age: 43
    },
    {
      name: "Conchita Astles",
      jobTitle: "Environmental Tech",
      age: 58
    },
    {
      name: "Rollie Rissen",
      jobTitle: "Senior Developer",
      age: 53
    },
    {
      name: "Werner Hathwood",
      jobTitle: "Food Chemist",
      age: 45
    },
    {
      name: "Edgard Ramel",
      jobTitle: "Account Executive",
      age: 55
    },
    {
      name: "Tisha Glashby",
      jobTitle: "Speech Pathologist",
      age: 23
    },
    {
      name: "Enos Doodson",
      jobTitle: "Office Assistant I",
      age: 57
    },
    {
      name: "Marys Midlane",
      jobTitle: "Software Engineer I",
      age: 37
    },
    {
      name: "Nelie Donn",
      jobTitle: "Editor",
      age: 60
    },
    {
      name: "Keary Reina",
      jobTitle: "Structural Analysis Engineer",
      age: 63
    },
    {
      name: "Lorin Mantha",
      jobTitle: "Account Representative III",
      age: 58
    },
    {
      name: "Marquita Oglevie",
      jobTitle: "Community Outreach Specialist",
      age: 30
    },
    {
      name: "Berte Grigs",
      jobTitle: "Account Representative II",
      age: 33
    },
    {
      name: "Travers Kasper",
      jobTitle: "Community Outreach Specialist",
      age: 52
    },
    {
      name: "Lelah Rodda",
      jobTitle: "Research Assistant II",
      age: 53
    },
    {
      name: "Louisette Justice",
      jobTitle: "Human Resources Assistant IV",
      age: 56
    },
    {
      name: "Hildagard Blabey",
      jobTitle: "Programmer Analyst I",
      age: 30
    },
    {
      name: "Otha Blenkinsopp",
      jobTitle: "Automation Specialist II",
      age: 37
    },
    {
      name: "Solly Ghidoli",
      jobTitle: "Programmer I",
      age: 31
    },
    {
      name: "Zahara Skipperbottom",
      jobTitle: "Geologist III",
      age: 33
    },
    {
      name: "Athena Carvill",
      jobTitle: "Pharmacist",
      age: 50
    },
    {
      name: "Nevile Kinchington",
      jobTitle: "Assistant Media Planner",
      age: 36
    },
    {
      name: "Stillmann Yourell",
      jobTitle: "Assistant Media Planner",
      age: 22
    },
    {
      name: "Reed Manwell",
      jobTitle: "Community Outreach Specialist",
      age: 41
    },
    {
      name: "Irene Blunsden",
      jobTitle: "Staff Accountant I",
      age: 44
    },
    {
      name: "Skipper Woodham",
      jobTitle: "Pharmacist",
      age: 63
    },
    {
      name: "Marabel Zavattiero",
      jobTitle: "Senior Sales Associate",
      age: 42
    },
    {
      name: "Patricio Girling",
      jobTitle: "Structural Engineer",
      age: 50
    },
    {
      name: "Gareth Gueny",
      jobTitle: "Design Engineer",
      age: 23
    },
    {
      name: "Gianina Giacobilio",
      jobTitle: "Analyst Programmer",
      age: 59
    },
    {
      name: "Aloisia Twaits",
      jobTitle: "Nuclear Power Engineer",
      age: 36
    },
    {
      name: "Bernadette Dougary",
      jobTitle: "Administrative Officer",
      age: 49
    },
    {
      name: "Larry Avo",
      jobTitle: "Research Nurse",
      age: 50
    },
    {
      name: "Yehudit Kynvin",
      jobTitle: "VP Marketing",
      age: 42
    },
    {
      name: "Krispin Rainsden",
      jobTitle: "Operator",
      age: 19
    },
    {
      name: "Erin Benbrick",
      jobTitle: "Web Designer III",
      age: 30
    },
    {
      name: "Naomi Binnes",
      jobTitle: "Paralegal",
      age: 37
    },
    {
      name: "Ferd Ollivierre",
      jobTitle: "Analog Circuit Design manager",
      age: 60
    },
    {
      name: "Haily Marchant",
      jobTitle: "Budget/Accounting Analyst IV",
      age: 37
    },
    {
      name: "Osborne Stiven",
      jobTitle: "Programmer Analyst III",
      age: 39
    },
    {
      name: "Pierre Whartonby",
      jobTitle: "Analyst Programmer",
      age: 54
    },
    {
      name: "Gypsy Emsley",
      jobTitle: "Systems Administrator I",
      age: 35
    },
    {
      name: "Alejandro Breit",
      jobTitle: "Paralegal",
      age: 65
    },
    {
      name: "Lindie Meadmore",
      jobTitle: "Geological Engineer",
      age: 41
    },
    {
      name: "Grethel Matteini",
      jobTitle: "Assistant Professor",
      age: 58
    },
    {
      name: "Flin Facchini",
      jobTitle: "Sales Representative",
      age: 60
    },
    {
      name: "Milissent Andrzejak",
      jobTitle: "Programmer Analyst I",
      age: 39
    },
    {
      name: "Gibby Keele",
      jobTitle: "Occupational Therapist",
      age: 41
    },
    {
      name: "Anne-corinne Edmenson",
      jobTitle: "Developer I",
      age: 32
    },
    {
      name: "Nataniel Chern",
      jobTitle: "Business Systems Development Analyst",
      age: 32
    },
    {
      name: "Sara Pinchin",
      jobTitle: "Tax Accountant",
      age: 26
    },
    {
      name: "Jordon Mabone",
      jobTitle: "Account Coordinator",
      age: 48
    },
    {
      name: "Kit Picknett",
      jobTitle: "Senior Cost Accountant",
      age: 53
    },
    {
      name: "Sherlocke Loverock",
      jobTitle: "Senior Sales Associate",
      age: 60
    },
    {
      name: "Phoebe Manuaud",
      jobTitle: "Nuclear Power Engineer",
      age: 33
    },
    {
      name: "Natasha Weekley",
      jobTitle: "Associate Professor",
      age: 54
    },
    {
      name: "Ayn Singers",
      jobTitle: "Design Engineer",
      age: 47
    },
    {
      name: "Claudina Goodhay",
      jobTitle: "Tax Accountant",
      age: 46
    },
    {
      name: "Nealson Baskerfield",
      jobTitle: "Social Worker",
      age: 42
    },
    {
      name: "Eberto Corn",
      jobTitle: "Budget/Accounting Analyst I",
      age: 19
    },
    {
      name: "Fonzie Ebourne",
      jobTitle: "Actuary",
      age: 26
    },
    {
      name: "Agretha Pendergrast",
      jobTitle: "VP Product Management",
      age: 36
    },
    {
      name: "Marquita Soame",
      jobTitle: "Environmental Specialist",
      age: 65
    },
    {
      name: "Caritta Klimsch",
      jobTitle: "Senior Financial Analyst",
      age: 43
    },
    {
      name: "Skippy Orans",
      jobTitle: "Payment Adjustment Coordinator",
      age: 63
    },
    {
      name: "Ruddie Westerman",
      jobTitle: "Biostatistician III",
      age: 44
    },
    {
      name: "Cletus Linsey",
      jobTitle: "Internal Auditor",
      age: 62
    },
    {
      name: "Ignaz Thursfield",
      jobTitle: "Nuclear Power Engineer",
      age: 55
    },
    {
      name: "Rafi Fullagar",
      jobTitle: "Quality Control Specialist",
      age: 52
    },
    {
      name: "Lib Pearmine",
      jobTitle: "Design Engineer",
      age: 27
    },
    {
      name: "Findley Riches",
      jobTitle: "Senior Cost Accountant",
      age: 32
    },
    {
      name: "Ines Alfonsetto",
      jobTitle: "Software Consultant",
      age: 52
    },
    {
      name: "Suzi Rothon",
      jobTitle: "Clinical Specialist",
      age: 25
    },
    {
      name: "Eddi Rapp",
      jobTitle: "Research Associate",
      age: 53
    },
    {
      name: "Kathi Cohani",
      jobTitle: "Automation Specialist I",
      age: 38
    },
    {
      name: "Shurwood Almeida",
      jobTitle: "Electrical Engineer",
      age: 26
    },
    {
      name: "Magdaia Dongate",
      jobTitle: "Sales Associate",
      age: 38
    },
    {
      name: "Naomi Aldhous",
      jobTitle: "Professor",
      age: 36
    },
    {
      name: "Deeanne Fenton",
      jobTitle: "Systems Administrator III",
      age: 37
    },
    {
      name: "Eddie Bramo",
      jobTitle: "Geological Engineer",
      age: 55
    },
    {
      name: "Karl Cowlam",
      jobTitle: "Software Consultant",
      age: 24
    }
  ];

  describe("getListOfNames", function() {
    it("should return a list of names", function() {
      const names = getListOfNames(people);

      expect(names).toEqual([
        "Rafi Backe",
        "Gottfried Balser",
        "Lauraine Nore",
        "Allayne Burstow",
        "Alan Tumber",
        "Carlyn Urrey",
        "Kerrin Anstee",
        "Hube Tibbles",
        "Niki Core",
        "Guntar Shailer",
        "Sophi Brophy",
        "Arluene McRoberts",
        "Belvia Fearnehough",
        "Rickey Dorrance",
        "Patrick McQueen",
        "Garland Clyne",
        "Oliver Smallwood",
        "Neile Ion",
        "Lissy Pursey",
        "Sile O'Devey",
        "Conchita Astles",
        "Rollie Rissen",
        "Werner Hathwood",
        "Edgard Ramel",
        "Tisha Glashby",
        "Enos Doodson",
        "Marys Midlane",
        "Nelie Donn",
        "Keary Reina",
        "Lorin Mantha",
        "Marquita Oglevie",
        "Berte Grigs",
        "Travers Kasper",
        "Lelah Rodda",
        "Louisette Justice",
        "Hildagard Blabey",
        "Otha Blenkinsopp",
        "Solly Ghidoli",
        "Zahara Skipperbottom",
        "Athena Carvill",
        "Nevile Kinchington",
        "Stillmann Yourell",
        "Reed Manwell",
        "Irene Blunsden",
        "Skipper Woodham",
        "Marabel Zavattiero",
        "Patricio Girling",
        "Gareth Gueny",
        "Gianina Giacobilio",
        "Aloisia Twaits",
        "Bernadette Dougary",
        "Larry Avo",
        "Yehudit Kynvin",
        "Krispin Rainsden",
        "Erin Benbrick",
        "Naomi Binnes",
        "Ferd Ollivierre",
        "Haily Marchant",
        "Osborne Stiven",
        "Pierre Whartonby",
        "Gypsy Emsley",
        "Alejandro Breit",
        "Lindie Meadmore",
        "Grethel Matteini",
        "Flin Facchini",
        "Milissent Andrzejak",
        "Gibby Keele",
        "Anne-corinne Edmenson",
        "Nataniel Chern",
        "Sara Pinchin",
        "Jordon Mabone",
        "Kit Picknett",
        "Sherlocke Loverock",
        "Phoebe Manuaud",
        "Natasha Weekley",
        "Ayn Singers",
        "Claudina Goodhay",
        "Nealson Baskerfield",
        "Eberto Corn",
        "Fonzie Ebourne",
        "Agretha Pendergrast",
        "Marquita Soame",
        "Caritta Klimsch",
        "Skippy Orans",
        "Ruddie Westerman",
        "Cletus Linsey",
        "Ignaz Thursfield",
        "Rafi Fullagar",
        "Lib Pearmine",
        "Findley Riches",
        "Ines Alfonsetto",
        "Suzi Rothon",
        "Eddi Rapp",
        "Kathi Cohani",
        "Shurwood Almeida",
        "Magdaia Dongate",
        "Naomi Aldhous",
        "Deeanne Fenton",
        "Eddie Bramo",
        "Karl Cowlam"
      ]);
    });
  });

  describe("getAverageAge", function() {
    it("should find the average age", function() {
      const age = getAverageAge(people);

      expect(age).toBeCloseTo(42.91, 1);
    });
  });

  describe("getAllEngineers", function() {
    it("should find the most common job", function() {
      const names = getAllEngineers(people);

      expect(names).toEqual([
        "Gottfried Balser",
        "Niki Core",
        "Marys Midlane",
        "Keary Reina",
        "Patricio Girling",
        "Gareth Gueny",
        "Aloisia Twaits",
        "Lindie Meadmore",
        "Phoebe Manuaud",
        "Ayn Singers",
        "Ignaz Thursfield",
        "Lib Pearmine",
        "Shurwood Almeida",
        "Eddie Bramo"
      ]);
    });
  });
});

describe("sort", function() {
  it("should sort a list of numbers, test case 1", function() {
    const numbers = [5, 9, 1, 3, 2, 11, 7];

    expect(sort(numbers)).toEqual([1, 2, 3, 5, 7, 9, 11]);
  });
  it("should sort a list of numbers, already sorted", function() {
    const numbers = [1, 2, 3, 4, 5, 6];

    expect(sort(numbers)).toEqual([1, 2, 3, 4, 5, 6]);
  });
  it("should sort a list of numbers, reverse sorted", function() {
    const numbers = [10, 9, 8, 7, 6, 5];

    expect(sort(numbers)).toEqual([5, 6, 7, 8, 9, 10]);
  });
  it("should sort a list of numbers, list of one", function() {
    const numbers = [1337];

    expect(sort(numbers)).toEqual([1337]);
  });
  it("should sort a list of numbers, empty list", function() {
    const numbers = [];

    expect(sort(numbers)).toEqual([]);
  });
});
