// HTML要素は定数に代入

const btn = document.getElementById('btn');

btn.addEventListener('click',()=>{
    const text = document.getElementById('text');
    setTimeout(() => {
        text.textContent = 'ボタンをクリックしました'; 
    },2000);
        
});

