let recepieLists = []
const recepie = {
    name: '',
    description: '',
    ingridients: []
}
let recipesAll = "";
// add ingriendient
function addingridient() {
    let ingriform = document.getElementById('ingredientform')
    if (ingriform.value == 0) {
      recepie.ingridients = "No Ingridient";
    }
    else {
        recepie.ingridients.push(ingriform.value);
    }
    console.log("ghddgfdgfdgsgd")
    let formdivision = document.getElementById('ingredientformdiv');
    let ingri = document.createElement('p');
    let ingredientData = document.createTextNode(recepie.ingridients);
    ingri.appendChild(ingredientData);
    formdivision.appendChild(ingri);
    recepieLists = [];

}
// add Recepie
function addnewRecepie() {
    let recepiename = document.getElementById('recepiename');
    let recepiesteps = document.getElementById('recepiesteps');
    let ingriendientsform = document.getElementById('ingredientformdiv');
    console.log(ingriendientsform.value)
    if (recepiename.value.length === 0) {
        recepie.name = "Unnamed Recepie";
    }
    else {
        recepie.name = recepiename.value;
    }
    recepie.description = recepiesteps.value;

    // push the values to local storage
    recepieLists.push(recepie);
    const recipesStringified = JSON.stringify(recepieLists)
    localStorage.setItem('Recipe', recipesStringified)
    const recipesJSON = localStorage.getItem('Recipe')
    if (recipesJSON === null) {
        recipesAll = [];
    } else {
        const recipesJSON = localStorage.getItem('Recipe')
        recipesAll = JSON.parse(recipesJSON)
    }
    console.log(recipesAll, "ygfyurtyu");
    for (let i of recipesAll) {
        let division = document.getElementById('display');
        let name = document.createElement('p');
        let nameAtt = document.createTextNode(i.name);
        name.appendChild(nameAtt);
        division.appendChild(name);
        name.innerHTML = "Recepie Name : " + i.name


        let steps = document.createElement('p');
        let stepsData = document.createTextNode(i.description);
        steps.appendChild(stepsData);
        division.appendChild(steps);
        steps.innerHTML = "Recepie Steps : " + i.description


        let ingriData = document.createElement('li');
        let ingriDatastepsData = document.createTextNode(i.ingridients);
        ingriData.appendChild(ingriDatastepsData);
        division.appendChild(ingriData);
        ingriData.innerHTML = "Ingriedients : " + i.ingridients


        // Buttons
        let button1 = document.createElement('button')
        let button2 = document.createElement('button')
        let buttonvalue = document.createTextNode('edit')
        let buttonvalue1 = document.createTextNode('delete')
        button1.appendChild(buttonvalue);
        button2.appendChild(buttonvalue1);

        division.appendChild(button1);
        button1.addEventListener("click", function(){
            document.getElementById("recepiename").value= i.name ;
            document.getElementById("recepiesteps").value= i.description;
            document.getElementById("ingredientformdiv").value= i.ingridients;
            console.log(i.name,"edit")
          });
        division.appendChild(button2);
         button2.addEventListener("click", function(){
           delete i.name ;
           delete i.description;
           delete i.ingridients;
            console.log(i.name,"dele")
          });
    }
    recepieLists = [];
}
// Search
function searchfunction(){
    input = document.getElementById("searchbar").value;
    // filter = input.value.toUpperCase();
    const recipesJSON = localStorage.getItem('Recipe')
    if (recipesJSON === null) {
        recipesAll = [];
    } else {
        const recipesJSON = localStorage.getItem('Recipe')
        recipesAll = JSON.parse(recipesJSON)
    }
    console.log(recipesAll, "search");
    for (let i of recepieLists) {
      let filteredList = recipesAll.filter(value => {
            return value.name == input 
          });
          for(let i of filteredList){
              const filter1=i.name;
              console.log(filteredList,"aaaaaaaaaaaa");
          let division1 = document.getElementById('search');
          let searchname = document.createElement('p');
          let searchData = document.createTextNode(filter1);
          searchname.appendChild(searchData);
          division1.appendChild(searchname);
          }
        }
}

function myFunction() {
    var x = document.getElementById("addReceipeshow");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}

// function removelist(){

// }
    


       