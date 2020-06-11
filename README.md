# Homework Prototype
### Required
*Создайте объект, свойства которого описывают содержимое дамской сумочки*
- Создайте метод объекта, позволяющий удалить что-то из сумочки
- Создайте метод объекта, позволяющий положить что-то в сумочку
---
```js
var bag = {
    documents: ['Паспорт','Водительские права','Диплом ВУЗа'],
    accessories: ['Ключи','Билеты в кино','Лекарство'],
    something:[`Помада`,`Бутер`],
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
```
### Additional
*Объявите конструктор, который создает экземпляры с унаследованным методом addProperty*
*Метод addProperty должен принимать два аргумента:*
- имя свойства
- значение свойства
*и добавлять экземпляру новое свойство с указанным именем и значением*
---
```js
var tomato = function () {
    this.addProperty = function (name, prop){
            this[name] = prop
        
    } 
}

var getObj = new tomato ()
getObj.addProperty('color', 'red')

getObj
// tomato {color: "red", addProperty: ƒ}
getObj['color']
// "red"

```
