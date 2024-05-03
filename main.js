
const ai = document.querySelector(".ai");
const java = document.querySelector(".java");
const ds = document.querySelector(".ds");
const shell = document.querySelector(".shell");


ai.addEventListener("click",()=>{
    document.querySelector(".ai-content").style.display="block";
    document.querySelector(".java-content").style.display="none";
    document.querySelector(".ds-content").style.display="none";
    document.querySelector(".shell-content").style.display="none";
    //document.querySelector(".ai").className.add('.active');
    ai.style.backgroundColor='white';
    ai.style.color='black';
    java.style.color='white';
    ds.style.color='white';
    shell.style.color='white';
    ds.style.backgroundColor='transparent';
    java.style.backgroundColor='transparent';
    shell.style.backgroundColor='transparent';

})

java.addEventListener("click",()=>{
    document.querySelector(".java-content").style.display="block";
    document.querySelector(".ai-content").style.display="none";
    document.querySelector(".ds-content").style.display="none";
    document.querySelector(".shell-content").style.display="none";
    java.style.backgroundColor='white';
    java.style.color='black';
    ai.style.color='white';
    ds.style.color='white';
    shell.style.color='white';
    ai.style.backgroundColor='transparent';
    ds.style.backgroundColor='transparent';
    shell.style.backgroundColor='transparent';
})

ds.addEventListener("click",()=>{
    document.querySelector(".ds-content").style.display="block";
    document.querySelector(".ai-content").style.display="none";
    document.querySelector(".java-content").style.display="none";
    document.querySelector(".shell-content").style.display="none";
    ds.style.backgroundColor='white';
    ds.style.color='black';
    java.style.color='white';
    ai.style.color='white';
    shell.style.color='white';
    ai.style.backgroundColor='transparent';
    java.style.backgroundColor='transparent';
    shell.style.backgroundColor='transparent';
})
shell.addEventListener("click",()=>{
    document.querySelector(".shell-content").style.display="block";
    document.querySelector(".ai-content").style.display="none";
    document.querySelector(".java-content").style.display="none";
    document.querySelector(".ds-content").style.display="none";
    shell.style.backgroundColor='white';
    shell.style.color='black';
    java.style.color='white';
    ai.style.color='white';
    ds.style.color='white';
    ai.style.backgroundColor='transparent';
    java.style.backgroundColor='transparent';
    ds.style.backgroundColor='transparent';
})