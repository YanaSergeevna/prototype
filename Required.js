var bag = {
    documents: ['Паспорт','Водительские права','Диплом ВУЗа'],
    accessories: ['Ключи','Билеты в кино','Лекарство'],
    something:["Помада","Бутер"],
    getSomething: function (x) {
         for(keyInBag in this){
             var property = bag[keyInBag];
             if(Array.isArray(property)&& property.includes(x)){
                 var propertyIndex = property.indexOf(x);
                 property.splice(propertyIndex, 1);
                 return [this["documents"], this['accessories'], this['something']]
             }

         }   
         console.log(`В сумочке такого предмета нет.`);
     },
    pushSomething: function (item, key) {
        if(typeof key !== 'undefined' && typeof item !== 'undefined'){
            this[key] = item 
        }
        else{
           (typeof item !== 'undefined')? this["something"].push(item):console.log('Значение не найдено');      
        }
        return this
    }
}