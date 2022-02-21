function check(str1, str2){
    let check_str1 = str1.split('').sort().join('');
    let check_str2 = str2.split('').sort().join('');
    if(check_str1 == check_str2)
    {
       console.log("True");
    } 
    else 
    { 
       console.log("False");
    }
 }
 check("student","eudntst")
 check("student","eudnts")
 check("student","eudntsa")