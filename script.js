const fooddata = require('./data.json');


function listAll(){
    for (  item of fooddata){
        console.log( item);
    }
}

function listCategory(category){
    for (  item of fooddata){
        if(item.category===category){
            console.log( item);
        }
    }
}

function listCaloriegt100(){
    for (  item of fooddata){
        if(item.calorie>100){
            console.log( item);
        }
    }
}

function listCalorielt100(){
    for (  item of fooddata){
        if(item.calorie<100){
            console.log( item);
        }
    }
}

function sortProtein(){
    let list=fooddata;
    list.sort(function(a,b) {
        return a.protiens - b.protiens;
    });
    list.reverse();
    for (  item of list){
        console.log( item);
    }
}

function sortCab(){
    let list=fooddata;
    list.sort(function(a,b) {
        return a.cab - b.cab;
    });

    list.reverse();
    for (  item of list){
        console.log( item);
    }
}

//Task 1 : List All
listAll();

//Task 2: Category Vegetable
listCategory('Vegetable');

//Task 3: Category Fruit
listCategory('Fruit');

//Task 4: Category Protein
listCategory('Protein');

//Task 5: Category nuts
listCategory('Nuts');

//Task 6: Category Grains
listCategory('Grain');

//Task 7: Category dairy
listCategory('Dairy');

//Task 8 : Calorie above 100
listCaloriegt100();

//Task 9 : Calorie below 100
listCalorielt100();

//Task 10 : Protein Content Hight->Low
sortProtein();

//Task 190;1 : Protein Content Hight->Low
sortCab();