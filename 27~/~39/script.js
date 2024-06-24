var number = 1;
console.log (number);
var strings = "a";
console.log (strings);
var boolean = "true";
console.log(boolean);
var x = 10;
var y = 20;
console.log(x + y);
console.log(y - x);
console.log(50 * 2);
console.log(20 / 2);
console.log(" " + 12 + 34);
var boolean = true;
if (boolean) {
 console.log(boolean);
};
var num = 100;
if(num == 100){
    console.log(num);
}
var text = "JavaScript";
if(text == "JavaScript"){
    console.log(text);
}
var boolean = false;
if(boolean){
 console.log("trueの処理");
 console.log(boolean);
} else {
 console.log("falseの処理");
 console.log(boolean);
};
var num = 777;
if(num == 666){
    console.log(num)
    console.log(true)
}else{
    console.log(num)
    console.log(false)
}
var text = "unk";
if(text == "tnk"){
    console.log(text)
    console.log(true)
}else{
    console.log(text)
    console.log(false)
}
var text = "dad";
if (text == "mum") { 
 console.log("マム");
 console.log(text);
} else if (text == "dad") { 
 console.log("ダッド");
 console.log(text);
} else {
 console.log("ドーター");
};
var boolean = true;
var numB = 0;
if (boolean && numB == 40) {
 console.log("ANDの条件と⼀致した処理");
 console.log(boolean && numB == 40);
} else {
 console.log("ANDの条件と⼀致しなかった処理");
 console.log(!boolean && numB == 40);
};
var boolean = false;
var text = "fxxx";
if (boolean || text == "sxxx") {
 console.log("ANDの条件と⼀致した処理");
 console.log(boolean || text);
} else {
 console.log("ANDの条件と⼀致しなかった処理");
 console.log(!boolean || text == "fxxx");
};
var num = 100;
if (!99) {
 console.log("NOTの条件と⼀致した処理");
 console.log(99);
} else {
 console.log("NOTの条件と⼀致しなかった処理");
 console.log(100);
};
var boolean = false;
var resultText = boolean ? "Aの処理" : "Bの処理";
console.log(resultText);
var x = 4
var resultNum = 5 < x ? true : false;
console.log(resultNum)
var y = 11
var resultNum = 10 <= y ? true : false;
console.log(resultNum)
var z = 2
var result = z ? true : false;
console.log(result)
var fruits = ["リンゴ", "バナナ", "イチゴ"]
console.log(fruits[0]);
var teachers = [
    {
    name: "太郎",
    age: 25,
    subject: "国語",
    },
    {
    name: "浩司",
    age: 30,
    subject: "数学",
    },
    {
    name: "花⼦",
    age: 26,
    subject: "社会",
    }
   ]
   console.log(teachers)
   console.log(teachers[2].name);
var family = ["kiyo", "asuka", "rurina"]
console.log(family[0],family[2])
var masked_riders = [
    {
        name: "sento",
        rider: "build",
        final: "genius",
    },
    {
        name: "ryuga",
        rider: "cross-z",
        final: "magma",
    },
    {
        name: "kazumi",
        rider: "grease",
        final: "blizzard,"
    }
]
console.log(masked_riders)
console.log(masked_riders[0].rider,masked_riders[2].rider)
for (var i = 1; i < 10; i++) {
    console.log("ループ" + i + "回⽬");
   };
var items = ["リンゴ", "バナナ", "イチゴ"];
for (index in items) {
 console.log(items[index]);
};
const array1 = ['a', 'b', 'c'];

for (const element of array1) {
  console.log(element);
}
for (var num = 5; num < 7; num++){
    console.log("and" + num);
};
var riders = ["kuuga", "agito", "ryuuki", "fize"];
for(index in riders) {
    console.log(riders[index]);
}
var KR = [
    {
    name: "yuusuke", henshin: "kuuga"
    },
    {
    name: "shouichi", henshin: "agito"
    },
    {
    name: "shinji", henshin: "ryuuki"
    }
]
for (rider of KR){console.log(rider);};
function  showAlert(){
    alert("welcome")
}
showAlert()
var getNum = function(){
    return (5 + 7)
};

console.log(getNum());

function sumNum(x) {
    const result = x + 1
    console.log(result);
   };
   sumNum(9)
   function tomato(price, func) {
    const name = "トマト";
    func(name, price);
   }
   const price = function price(name, price) {
    console.log(name + " の値段は" + price + "円です。");
   }
   tomato(100, price);
