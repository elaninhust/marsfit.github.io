function setCookie(name,value,iDay){
    var oDate=new Date();
    oDate.setDate(oDate.getDate()+iDay);
    if(iDay){
        document.cookie=name+'='+value+';path=/;expires='+oDate;
    }else{
        document.cookie=name+'='+value+';path=/';
    }
}

function getCookie(name){
    var arr=document.cookie.split('; ');
    for(var i=0;i<arr.length;i++){
        var arr1=arr[i].split('=');
        if(name==arr1[0]){
            return arr1[1];
        }
    }
    return '';
}

function removeCookie(name){
    setCookie(name,'',-1);
}