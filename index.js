/* console.log("Hello World!")

var userName = "Gamze"

userName = "Ebuzer"

console.log(userName)

let mail ="abc@gmail.com"

mail="xyz" 

console.log(mail)

let -> mutable (degistirilebilir degisken, yani tekrar let ile baslayan bir mail yamamam)

console.log(mail)

mail = "xyz@gmail.com"

console.log(mail)

const email = "ababab"

const -> immutable (degistirilemez degisken)

let uName="Afra";

const secondName;   ( yani bu sekilde hata verir, const un yanina yeni bir veri atayamassin)

let firstUserName;
let user1Name;
let _name;
let $name;
let leri olustururken bu sekilde olusturabiliriz)

JS te noktalivirgul koymak zorunda degiliz, ama satirin bittigini belli etmek icin koymakta fayda var

let a = 3;
let b = 8;

burada a yi 8 ´, b yi ise 3 nasil yapariz sorusuna cevap asagida
let c = a
a = b
b = c

console.log(a,b) */
/*
this is used for
multiline comments
*/

/* var ve let i bir nevi kutu gibi dusun, kutunun icindekileri degistirebilirsin
ama const un icindekileri degistiremezsin asagida bunla ilgili ornek var */
var fName = "Afra"
let fName2 = "Muhlise"  /*yeni isim verilebiliyor*/
fName2 = "Kemal"    /*yeni isim verilebiliyor*/
const fName3 = "Ebuzer"
/* fName3 = "Ahmet" */  /*yeni isim VerileMEZ*/



// ------------------------ DATA  TYPES ------------------------------------- // 

/* 
1. string     (tirnak isareti icerisine aldigimiz hersey)
2. number   (butun sayalarin data type console da number diye gorunur)
3. boolean   (dogru yanlis degerlere diyoruz-true-false)
4. undefined (tirnak isaretleri, atama yapmadim sadece tanimlama yaptim diyorsak bu yazar)
5. null (atama yaptim ama bos kalsin sonra doldurcam diyorsak null diyoruz)

 */


let name = "Afra" 

let phoneNummer ;
console.log("phoneNummer",phoneNummer)

let email = null;
console.log("email",email)

let variable = 'ali29';
console.log(typeof variable)

console.log(phoneNummer)
console.log(email)

/* const nummer = 3,14 */  /*bunu noktaya cebirebilmek icin replase yapilacak ilerde gorucez*/

console.log("111111",typeof 29)
console.log(typeof name)

console.log(typeof 29)

console.log(typeof "123")
console.log(typeof 3.14)
console.log("2222", typeof 3,14) /*Sayilari noktali yazmadigim icin Console da bu nummer ve 14 olarak gorunecek
sadece nummer olarak gorunmesi icin noktali yazilmali, yoksa virgulden sonrasi rakam olarak gorunecek*/
console.log(typeof true)    /*true ve false un degerleri boolean olarak gorunecek*/
console.log(typeof false)


// ------------------------ BASIC OPERATORS ---------------------------- //

let currentYear = 2021;
let age = currentYear - 1971;

console.log("age", age)

let a = 3

let b = 8

let total = a + b
let totalValue = 5 + 8;

console.log(total, totalValue)

let x = 3*5 ;
console.log(x)

let y = 8/4 ;
console.log(y)

let exponent = 2**3 ; /*üstü ifadesi kullanilirken 2 üzer 3 demek icin iki carpi kullaniyoruz */
console.log(exponent)



let mod = 10 % 3 ;  //bu bir bolme islemidir
console.log(mod)

/* let mod = 10 / 3 ;   kesme isareti ile mod yapilirsa bolme islemi kalani degil sonucu verir. 
kalan sayiyi bulmak icin yüzde ifadesi kullanilir*/


// ------------------------ Increment decrement ------------------------------------- //

let ab = 3;
let xy = --ab  //bu satirsa ab = 2 olur. Yani ab 1 eksiltilir
console.log(ab, xy)