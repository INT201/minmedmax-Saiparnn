const { template } = require('@babel/core')

function minMedMax(n1, n2, n3) {
  if (n1>=n2 && n1>=n3) {
    if (n2>=n3) {
      return obj1 = {min:n3, mid:n2, max: n1}
    } else if (n3>=n2) {
      return obj2 = {min:n3, mid:n2, max: n1}
    }
  } 
  if (n2>=n1 && n2>=n3) {
    if (n1>=n3) {
      return obj3 = {min:n3, mid:n1, max:n2}
    } else if (n3>=n1) {
      return obj4 = {min:n1, mid:n3, max:n2}
    }
  }
  if (n3>=n2 && n3>=n1) {
    if (n2>=n1) {
      return obj5 = {min:n1, mid:n2, max:n3}
    } else if (n1>=n2) {
      return obj6 = {min:n2, mid:n1, max:n3}
    }
  }
}
module.exports = minMedMax

// ให้เขียน Function ชื่อ minMedMax (num1, num2, num3) โดยส่งเลข 3 ตัว แล้วหาค่าน้อยที่สุด ค่ากลาง และค่ามากที่สุด โดยให้ return ผลลัพธ์เป็นชนิดข้อมูล object เพื่อแสดงค่าน้อยที่สุด ค่ากลาง และค่ามากที่สุด ดังนี้

// ตัวอย่างเช่น
// 85, 30, 1 จะได้ { min: 1, mid: 30, max: 85 }
// 10, 0, 20 จะได้ { min: 0, mid: 10, max: 20 }
// -5, 0, 10 จะได้ { min: -5, mid: 0, max: 10 }
// 5, 1, 1 จะได้ { min: 1, mid: 5, max: 5 }
// -1, -8, 0 จะได้ { min: -8, mid: -1, max: 0 }
// หมายเหตุ ให้พยายามออกแบบวิธีการแก้ปัญหาโดยหลีกเลี่ยงการใช้ฟังก์ชันสำเร็จรูปจาก library เช่น Math หรือ Sort เป็นต้น