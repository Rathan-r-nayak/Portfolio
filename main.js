const txtElem=document.getElementById('text');
const txt=["Machine Learning","Web Development","App Development"];
let curArrInd=0;
let curCharIndex=0;

function typeText()
{
    if(curCharIndex < txt[curArrInd].length)
    {
        txtElem.innerText=txt[curArrInd].substring(0,curCharIndex+1);
        curCharIndex++;
    }
    else
    {
        curCharIndex=0;
        curArrInd=(curArrInd+1)%txt.length;
    }
}
setInterval(typeText, 100);
