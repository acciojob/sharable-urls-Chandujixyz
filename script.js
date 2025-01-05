// your code here
 const button=document.getElementById("button");
    button.addEventListener("click",fun);

    function fun(e){
        e.preventDefault();
        
        const name=document.getElementById("name").value;
        const year=document.getElementById("year").value;

        const h3=document.getElementById("url");
        if(name===""&&year===""){
            alert("please fill the form")
        }else if(name===""){
            h3.innerText=`https://localhost:8080/?year=${year}`;
        }else if(year===""){
            h3.innerText=`https://localhost:8080/?name=${name}`;
        }else{
            h3.innerText=`https://localhost:8080/?name=${name}&year=${year}`;
        }
    }