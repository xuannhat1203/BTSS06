let firtsName1:string;
let lastName1:string;
let fullName1:string;
firtsName1 = "Nguyễn";
lastName1 = "Xuân Nhất";
if(firtsName1[0].toUpperCase()&&lastName1[0].toUpperCase()){
    fullName1 = firtsName1 + " " + lastName1;
}else{
    firtsName1[0].toUpperCase()
    lastName1[0].toUpperCase()
    fullName1 = firtsName1 + " " + lastName1;
}
console.log(fullName1);