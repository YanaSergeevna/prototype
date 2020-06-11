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
