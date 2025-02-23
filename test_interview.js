// 1. Thuật toán kiểm tra chuỗi đối xứng.

function checkChuoiDoiXung(str){
    left = 0, right = str.length - 1;
    while(left < right){
        if(str[left] != str[right])
            return false;
        left ++;
        right --;
    }
    return true
}

console.log(checkChuoiDoiXung('level'));
console.log(checkChuoiDoiXung('hello'));

// // 2. Bài toán Two Sum

function twoSum(nums, target){

    let result = [];

    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            if(nums[i]+ nums[j] == target){
                result.push([i,j])
            }
        }
    }
    return result;
}

console.log(twoSum([2, 7, 11, 15],9));
console.log(twoSum([3, 2, 4, 3],6));

// 3. Compress file data.json để đạt được file size là nhỏ nhất có thể

const fs = require('fs')

const data = fs.readFileSync('data.json', 'utf-8');

const outputFile = JSON.stringify(JSON.parse(data))

fs.writeFileSync('data.min.json', outputFile)