const nums = [1,2,3,4,5,6,7,8,9]

for(x in nums){
    if (x == 5) {
        break
    }
    console.log('x = ' +x +' num = ' +nums[x]);
}

console.log('');

for(x in nums){
    if (x == 5) {
        continue
    }
    console.log('x = ' +x +' num = ' +nums[x]);
}

console.log('');

externo: for(a in nums){
    for(b in nums){
        if(a == 2 && b == 3) break externo
            console.log(`par = ${a},${b}`);
        
    }
}