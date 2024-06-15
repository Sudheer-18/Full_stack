function Happy_Number(n) {
    
} 
function Automorphic(n) {
    var sq = n * n;
    var digitsOfN = n.toString().length;
    var lastDigits = sq % Math.pow(10, digitsOfN);
    return lastDigits === n;
}

function ugly(n) {
    
}
function perfect(n) {
    s=0;
    for(var i=1;i<n;i++) {
        if(n%i==0) {
            s+=i;
        }
    }
    return s>=n;
}
function abundent(n) {
    s=0;
    for(var i=1;i<=n;i++) {
        if(n%i==0) {
            s+=i;
        }
    }
    return s<=n;
}
function isArmstrong(n) {
    var numberOfDigits = Math.floor(Math.log10(n)) + 1;
    var temp = n;
    var sum = 0;
    while (temp != 0) {
        var rem = temp % 10;
        sum += Math.pow(rem, numberOfDigits);
        temp = parseInt(temp / 10);
    }
    return sum==n;
}
function is_palindrome(n) {
    var temp =n,s=0
    if(n<0) {
        Math.abs(n-2*n);
    }
    while(n!=0) {
        r=n%10;
        s=s*10+r;
        n=parseInt(n/10);
    }
    return s==temp;
}
function is_prime(n) {
    if (n <= 1) return false; 
    if (n <= 3) return true;  
    if (n % 2 == 0 || n % 3 == 0) return false;
    
    for (var i = 5; i * i <= n; i += 6) {
        if (n % i == 0 || n % (i + 2) == 0) return false; 
    }
    return true;
}
function spy(n) {
    var s=0,p=1;
    while(n!=0) {
        var r=n%10;
        s+=r;
        p*=r;
        n=parseInt(n/10);
    }
    return p==s;
}
function neon(n) {
    if(n==1) return true;
     var sq = n*n,s=0;
     while(sq!=0) {
        var r=sq%10;
        s+=r;
        sq=parseInt(sq/10);
     }
    return s==n;
}
while(1) {
    var number = prompt("Enter a number or if u want to go back enter  quit or back");
    if(number == 'QUIT' || number =='quit' || number=='back' || number=='BACK') {
        alert("THANK YOU FOR VISITING THE PAGE!")
        alert("HAVE A NICE Day");
        break;
    }
    else if(number<0 || number >0 || number >0.0 || number <0.0) {
        isArmstrong(parseInt(number));
        if(isArmstrong(number)) {
            alert(number+" is Amstrong Number");
        }
        if(is_palindrome(number)) {
            alert("palindrone number");
        }
        if(is_prime(number)) {
            alert("prime Number")
        }
        else {
            alert("Composite Number");
        }
        if(neon(number)) {
            alert("Neon Number");
        }
        if(abundent(number)) {
            alert("abundent Number");
        }
        if(spy(number)) {
            alert("Spy Number");
        }
        if(Happy_Number(number)) {
            alert("HappyNumber");
        }
        if(perfect(number)) {
            alert("perfect")
        }
        if(Happy_Number(number)) {
            alert("Happy NUmber")
        }
        if(Automorphic(number)) {
            alert("AutoMorphic Number")
        }
        if(ugly(number)) {
            alert("Ugly Number")
        }
    }
    else {
        alert("Enter Valid Input");
    }   
}
