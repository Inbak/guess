let i=9;
const ans = document.querySelector('#ans');

function Guess()
{
        const x = Math.ceil(Math.random()*100)
        var b = (document.getElementById("num").value);

        if(x==b)
        {
            ans.setAttribute("style",'color: green');
            document.getElementById("ans").innerText= " YES ";
            document.getElementById("life").innerText="Chances Remaining : "+i
            
        }
        else
        {
            ans.setAttribute("style",'color: red')
            document.getElementById("ans").innerText ="Nothing"
            document.getElementById("life").innerText="Chances Remaining : "+i
        }
        if(i==0)
        {
            ans.setAttribute("style",'color: yellow')
            document.getElementById("ans").innerText="Better lucknext time"
            document.getElementById("life").innerText="Chances Remaining : "+i
        }
        else{
            i--;
        }
        
        }