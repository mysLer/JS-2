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


/* let name = "Afra" 

let phoneNummer ;
console.log("phoneNummer",phoneNummer)

let email = null;
console.log("email",email)

let variable = 'ali29';
console.log(typeof variable)

console.log(phoneNummer)
console.log(email)

/* const nummer = 3,14 */  /*bunu noktaya cebirebilmek icin replase yapilacak ilerde gorucez*/

/* console.log("111111",typeof 29)
console.log(typeof name)

console.log(typeof 29)

console.log(typeof "123")
console.log(typeof 3.14)
console.log("2222", typeof 3,14) /*Sayilari noktali yazmadigim icin Console da bu nummer ve 14 olarak gorunecek
sadece nummer olarak gorunmesi icin noktali yazilmali, yoksa virgulden sonrasi rakam olarak gorunecek*/
/*console.log(typeof true)    /*true ve false un degerleri boolean olarak gorunecek*/
/*console.log(typeof false) */


// ------------------------ BASIC OPERATORS ---------------------------- //

/*let currentYear = 2021;
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
/*console.log(exponent)



let mod = 10 % 3 ;  //bu bir bolme islemidir
console.log(mod)

/* let mod = 10 / 3 ;   kesme isareti ile mod yapilirsa bolme islemi kalani degil sonucu verir. 
kalan sayiyi bulmak icin yüzde ifadesi kullanilir*/


// ------------------------ Increment decrement ------------------------------------- //
// "--" -> 1 azaltilir (azalt sonra ata demek
// "++" -> 1 artirir. (ata sonra azalt

/* let ab = 3;
let xy = --ab  //bu satirsa ab = 2 olur. Yani ab 1 eksiltilir
console.log(ab, xy) //bu satirda ab = 2 olur.

// eger sadece abc yi azaltmak istiyorsak xyz abc ilk hali gibi kalsin istiyorsak asagidaki gibi islemi yapmaliyiz.
let abc = 3;
let xyz= abc--  // bu satirda abc = 3 olur. genel kullanim bu sekildedir
console.log (xyz,abc)

let decrement = 5;
let assg = ++decrement;

console.log(decrement, assg)   //burada (6,6) gormus oluruz

let dec2 = 5;
let assg2 = dec2++;

console.log(assg2,dec2)  */  //burada (5,6) gormus oluruz




// String Concetanation
// buna parantez icindekilerini birlestirme islemi diyebiliriz

const firstName = "Jeff";
const surName = "Bezos";

console.log(firstName + surName)   //bu ifadeyle araya bosluk koymadan console da JeffBezos olarak goruruz

console.log(firstName + " " + surName)   //bu ifadeyle araya bosluk birakir Jeff Bezos olarak goruruz.




// Assignment Operator

let val = true;

let x = 2;

x = x + 5;
console.log("x=" + x)

x += 5;
console.log("x=" + x)  //burada x artik 7 oldugu icin 7+5 cevabini bulucaz yani cevap 12

let y = 10;
y /=2 ;
console.log("y=" + y) //burada y artik 10/2 demek yani 5 sonucunu verir

y *=4 ;
console.log("y=" + y) //burada en son y sonucu 5 oldugu icin 5*4 cevabini bulucaz yani cevap 5*4= 20 sonucunu verir

/* x = x + y;
console.log("x=" + x) */ //burada en on x sonucu ile en son y sonucu toplanmis olur cevap 32

x +=y ;
console.log("x=" + x) //burada en on x sonucu ile en son y sonucu toplanmis olur cevap 32
//x ile y yi kolay olarak toplamak icin x +=y ifadesi daha kisa bir kod olarak kullanilir






// Comparison Operators
// <, >, <=, >=, ==,!=, ===,!==

//   "==" birbirine esit mi? sorusunu sormak icin, Degerler karsilastirilir, veri türleri kontrol edilmez.
//   "!=" esit degildir? sorusunu sormak icin
//   "===" sadece strict olarak karsiligini alabildigimiz sorudur veri tipi ve degerleri arasinda kesin bir karsilastirma yapmak icin daha guvenlidir
let ageAhmet = 50;
let ageUtku = 28;

console.log(ageAhmet > ageUtku)  //this gives boolen value.
                                 // burada sonuc True olarak goruruz
                                 //yani dogru yanlis cevabini aliriz

console.log (ageAhmet < ageUtku)  //sonuc false olarak goruruz

console.log (ageAhmet == 50) //ahmedin yasi 50 mi? Console cevabi True veriyor.
console.log (ageUtku !=28)  //Utkunun yasi 28 degildir. Console cevabi False olur cunku utku 28 yasinda

console.log ("1", ageAhmet == "50")  // loose comparison (sadece icindeki onemli diyebiliriz yani sayida olabilir strict te olabilir farketmez sadece kontrol et demek)
                                     // örnegin bir imput a yas girmek istersin ama imputun type i karsiligi text tir. o zaman 15 girsede bize o text olarak gelir.
                                     // strict gelen 50 de dogru number gelen 50 de dogrudur. o 

console.log ("2", ageAhmet === "50") // strict comparison
                                    // burada datetype ini da kontrol ettigimiz icin false diye gorunur.
                                    // yukarida let ageAhmet = 50; diye yazilmisti orada strict (tirnak isarei icerisinde verilmedigi icin fasle olarak goruzndu.
                                    // yani  "===" ifadesini kullandigimizda sadece strict kontrol edilir. scrict degilse False karsiligini aliriz.
                                    //buarada let ageAhmet = "50"; diye yazilmis olsaydi sonuc True olurdu.

console.log ("3", ageAhmet!== "50") //strict  50 ye esit degil mi sorusunu sormus oluyoruz. yani sonuc True oldu.                                   



// ---- islem onceligi google`a "mnd web docs" yazinca gelen siteden TAble kismi -----


/* 8	Grouping	                      n/a	( … )
17	Member Access	left-to-right       	… . …
Optional chaining	                        … ?. …
Computed Member Access	n/a                	… [ … ]
new (with argument list)	               new … ( … )
Function Call	                            … ( … )
16	new (without argument list)	n/a	        new …
15	Postfix Increment	n/a	                … ++
Postfix Decrement	                        … --
14	Logical NOT (!)	n/a                    	! …
Bitwise NOT (~)                            	~ …
Unary plus (+)	                            + …
Unary negation (-)	                        - …
Prefix Increment	                        ++ …
Prefix Decrement	                        -- …
typeof	                                 typeof …
void	                                   void …
delete	                                 delete …
await                                  	  await …
13	Exponentiation (**)	right-to-left	   … ** …
12	Multiplication (*)	left-to-right	   … * …
Division (/)	                           … / …
Remainder (%)       	                   … % …
11	Addition (+)	left-to-right	       … + …
Subtraction (-)                            … - …
10	Bitwise Left Shift (<<)	left-to-right  … << …
Bitwise Right Shift (>>)	               … >> …
Bitwise Unsigned Right Shift (>>>)	       … >>> …
9	Less Than (<)	left-to-right	       … < …
Less Than Or Equal (<=)	                   … <= …
Greater Than (>)	                       … > …
Greater Than Or Equal (>=) 	               … >= …
in	                                       … in …
instanceof	                           … instanceof …
8	Equality (==)	left-to-right          … == …
Inequality (!=)	                           … != …
Strict Equality (===)	                   … === …
Strict Inequality (!==)	                   … !== …
7	Bitwise AND (&)	left-to-right	       … & …
6	Bitwise XOR (^)	left-to-right	       … ^ …
5	Bitwise OR (|)	left-to-right	       … | …
4	Logical AND (&&)	left-to-right	   … && …
3	Logical OR (||)	left-to-right	       … || …
Nullish coalescing operator (??)	       … ?? …
2	Assignment	right-to-left	           … = …
                                           … += …
                                           … -= …
                                           … **= …
                                           … *= …
                                           … /= …
                                           … %= …
                                           … <<= …
                                           … >>= …
                                           … >>>= …
                                           … &= …
                                           … ^= …
                                           … |= …
                                           … &&= …
                                           … ||= …
                                           … ??= …

Conditional (ternary) operator	right-to-left
(Groups on expressions after ?)	           … ? … : …
Arrow (=>)	right-to-left	               … => …
yield	n/a	                               yield …
yield*	                                   yield* …
Spread (...)	                           ... …
1	Comma / Sequence	left-to-right	   … , … */