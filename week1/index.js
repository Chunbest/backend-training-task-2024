// ### 題目一：變數練習
// 情境：Alex 正在健身房鍛鍊，他正在使用跑步機慢跑，請用變數描述以下狀態：

// 1. 請宣告一個 `const` 變數名稱為 `alexAge`，並賦予值為 `25`。
// 2. 請宣告一個 `const` 變數名稱為 `alexMembershipID`，並賦予值為字串 `"GYM2024-12345"`。
// 3. 請宣告一個 `const` 變數名稱為 `isRunningOnTreadmill`，並賦予值為 `true`。
// 4. 使用 `console.log()` 輸出 `alexAge`、`alexMembershipID` 和 `isRunningOnTreadmill`。

// 1.1 範例

const alexAge = 25;
const alexMembershipID = "GYM2024-12345";
const isRunningOnTreadmill = true;
console.log(alexAge);
console.log(alexMembershipID);
console.log(isRunningOnTreadmill);

// ### 題目二：變數命名練習
// - 瑜伽團課 - 300 元
// - 重訓團課 - 500 元
// - 重訓 1 對 1 課程 - 1500 元
// 情境：Alex 這個月的運動預算有 3000 元
// 請修改以下中文變數名稱，讓他符合變數語意

const 變數一 = 300;
const 變數二 = 500;
const 變數三 = 1500;
const 變數四 = 3000;

const yoga = 300;
const training = 500;
const trainLessonObyo = 1500;
const alexBudget = 3000;

// ### 題目三：變數計算
// 呈上題，Alex 想要規劃好自己的運動課程，需符合以下三個條件，請將花費總數計算在 AlexBudget 上，一起幫幫他吧！
// 條件一：一定至少要買 1 堂重訓團課和瑜伽團課
// 條件二：瑜伽團課只能一次買 3 堂
// 條件三：一定要花到 2400 以上，並購買 5 堂課程

console.log(`Alex 買完課程了，他一共剩下 ${AlexBudget} 元`);

const yoga = 300;
const training = 500;
const trainClass = 1500;
const budget = 3000;
const total= yoga*2+training*1+ trainClass *1 //2600
const alexBudget = budget- total;
console.log(`alex買完課程了,他一共剩下$${alexBudget}元`);
//使用樣板字串(樣板字面值)，用console.log呈現結果
//alex買完課程了,他一共剩下了$400元


// ### 題目四：線稿圖截圖，看圖宣告變數
// 請參考資料夾內 q4.webp 圖片
// 請依照你看到的內容來嘗試設計變數和值（至少 3 個）
const groupClassPrice =2520;
//組合包方案價格為2520
const perTime = 50;
//每堂分鐘數為50分
const avgClassPrice = groupClassPrice / 14;
//平均每堂價格為2520/14=180

// ### 題目五：布林值與變數定義，看是否有用對 const, let
// 情境：Alex 在往健身房的路上，望向城市的風景，請描述她看到的一切，並宣告變數與賦予值
// 4-1. Alex 在等紅綠燈，他抬頭看一下現在是紅燈，還有 28 秒綠燈（最多 3 個宣告）
// 4-2. 目前一起等待的機車有 8 台
// 4.3. Alex 望向天空，看到天上有 5 朵白雲和 1 顆太陽

//4-1
const light=['red','green','yellow'];
//紅綠燈
let nowLight='red';
//現在是紅燈
let turnGreen = 28;
// 28 秒後是綠燈

//4-2
let scooter = 8;
//4-3
let cloud =5;
let sun=1;


// ### 題目六：情境題：簡單變數計算
// 情境：Alex 每天都會帶著 2000cc 的水壺
// 他早上喝了 500cc
// 中午又喝了 800cc
// 下午去健身前，先裝了 1000cc 的水
// 健身時，又喝掉了 700cc
// 那麼他的水壺還剩下多少 cc 的水？
// 以下的 Code 寫到一半，再請幫幫 Alex

let myWater = 2000; // 水壺容量
myWater -= 500; // 早上喝了 500cc
myWater -= 800; // 中午喝了 800cc
myWater += 1000; // 中午又裝了 1000cc
myWater -= 700;  //健身時喝了 700cc
console.log(`Alex 的水壺還有 ${myWater}cc 的水`);
//1000cc

// ### 題目七：情境題：變數計算
// 情境：Anna 每週都會到單次計費型的健身房運動，週日運動結束後，想知道自己本週的消費金額，但結帳系統出了點問題，Anna 決定自己用 JS 來計算。
// Anna 的總金額（totalBill）先從零開始計算。
// 健身房計費為：每小時器械使用費 50 元，每堂團體課程費用 150 元
// 她本週用了器械 3 小時。
// 她本週參加了 2 堂團體課程。

let totalBill = 0;
const machineUsePrice = 50;
const groupClasses=150;
const machineUsePriceTotal = machineUsePrice*3;
const groupClassesTotal= groupClasses*2;
const total= machineUsePriceTotal+ groupClassesTotal
console.log(
`Anna 本週器械使用費共 ${machineUsePriceTotal}元，團體課費用共 ${groupClassesTotal}元，一共消費金額是 ${total}元
`);

// ### 題目八：變數重新賦予值
// 情境：請依照以下程式碼告知答案是多少，並在下方用註解方式寫上這五行程式碼做了什麼事
// 以下程式碼請勿變更

let a = 8; // 範例：宣告了一個 a 的變數，並賦予了一個 8 的數字型別
let b = 0;// 宣告了一個b的變數，並賦予一個0的數字型別
a = 13;// a 的變數重新賦值一個13的數字型別
a = b + 4; // a 的變數重新賦值，b+ 4的計算為0+4=4
a - b; 
// 計算a-b，4-0 
// 4
b += 1;   
//複合賦值運子，運算之後再賦值回去變數
// b = b (b賦值是0)+1賦值後 b = 0+1
// 1



// ### 題目九：型別查詢
// 請不要觀看 console.log，透過註解告知解答每個變數的型別
let c = 'world';  //string(字串)
let d = 456;  //number(數字)
let e = c + d; //string(字串)
let f = false; //Boolean(布林值)
let g = d + d;  //number(數字)
let h = f + g; // number(數字)

// 請從以下新增註解，告知上面每行各別是哪些型別
// a 是 string
// b 是 ???

// a 是 number
// b 是 number
// c 是 string
// d 是 number
// e 是 string
// f 是 Boolean
// g 是 number
// h 是 number

// ### 題目十：傳值與傳參考
// 情境：請依照程式碼告知答案是多少，並在下方用註解方式寫上這五行程式碼做了什麼事
// 以下程式碼請勿變更

let numberArr1 = [5, 10, 15];
// 宣告一個 let變數名稱為 numberArr1，並賦予陣列為 [5, 10, 15]。
let numberArr2 = numberArr1;
// 宣告一個let變數名稱為 numberArr2，並賦予numberArr1的陣列
//此為傳址操作（reference assignment），numberArr2 和 numberArr1 指向同一個陣列，是共存相同記憶體位置。
numberArr2.push(20);
// 變數numberArr2的陣列新增新的資料20,並從最後一個新增
// 變數 numberArr1 與 numberArr2 指向同一個陣列，因此陣列內容同步更新為 [5, 10, 15, 20]。
numberArr2 = [25, 30, 35];
//變數numberArr2的陣列重新賦予新的陣列[25, 30, 35]
//此時 numberArr1 和 numberArr2 不再共享記憶體位置。

console.log(numberArr1, numberArr2);
// [5, 10, 15], [25, 30, 35]
// numberArr1 沒有改變，仍指向原本的陣列。 
// numberArr2 指向新陣列 [25, 30, 35] 另存新的記憶體位置。
