"use strict";
let firtsName;
let lastName;
let fullName;
firtsName = "Nguyễn";
lastName = "Xuân Nhất";
if (firtsName[0].toUpperCase() && lastName[0].toUpperCase()) {
    fullName = firtsName + " " + lastName;
}
else {
    firtsName[0].toUpperCase();
    lastName[0].toUpperCase();
    fullName = firtsName + " " + lastName;
}
console.log(fullName);
