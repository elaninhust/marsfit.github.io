function ajax(url,json,fnSucc,fnFail){
    url=url+'?'+getURL(json);
    if(window.XMLHttpRequest){
        var oAjax=new XMLHttpRequest();
    }else{
        var oAjax=new ActiveXObject('Microsoft.XMLHTTP');
    }
    oAjax.open('GET',url,true);
    oAjax.send();
    oAjax.onreadystatechange=function(){
        if(oAjax.readyState==4){
            if(oAjax.status>=200 && oAjax.status<=300 || oAjax.status==304){
                fnSucc && fnSucc(oAjax.responseText);
            }else{
                fnFail && fnFail();
            }
        }
    }
}
//user.php?act=add&user='+userName.value+'&pass='+userPas.value+'&t='+Math.random();
function getURL(json){
    var arr=[];
    for(var name in json){
        arr.push(name+'='+json[name]);
    }
    return arr.join('&');
}