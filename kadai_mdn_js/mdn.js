// 課題　関数をMDNで調べて使ってみよう
// 今日の日付を表示する

/* 
const beToday = () => {
    Date.prototype.getFullYear(),
    Date.prototype.getMonth(),
    Date.prototype.getDate()
}

beToday();
*/ 

const today = new Date();
const year1 = today.getFullYear();
const month1 = today.getMonth() + 1;
const date1 = today.getDate();

console.log(year1 + '年' + month1 + '月' + date1 +'日');
