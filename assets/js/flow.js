let button = document.getElementById("button");

button.addEventListener("click",function(){
    let input =document.getElementById("input");
    let answer =document.getElementById("answer");

    switch(input.value){
        case "生前整理" :
            answer.textContent = "約80,000円～約150,000円　＋諸経費";
            break;
        case "遺品整理" :
            answer.textContent = "約80,000円～約150,000円　＋諸経費";
            break;
        case "不用品回収・買い取り" :
            answer.textContent = "有価なら提示金額をお支払い。";
            break;
        case "お家に関する雑務" :
            answer.textContent = "35,000円　＋諸経費";
            break;
        case "人材派遣" :
            answer.textContent = "35,000円　＋諸経費";
            break;
        default:
            alert("その業務は取り扱っておりません。正しい業務名をご入力ください。");
            break;
    }
})
