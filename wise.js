let str='Bienvenu au Centre de Calcul';
i=0;
dir = "D";
function f(){
  t = setTimeout("f()",20);
  document.getElementsByClassName("wisedan").item(0).value = str.substring(0,i);
  if (dir == "D"){
    if(i<str.length+1)
        i++;
  }
}