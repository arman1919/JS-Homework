
function arrayIntersection(nums1,nums2){
    let Intersection = [];
    nums1.forEach(element => {
        if (nums2.includes(element)){
            Intersection.push(element);
        }
    });

    return Intersection;
}









const nums1 = [1, 2, 3, 4];
const nums2 = [3, 4, 5, 6];
console.log(arrayIntersection(nums1, nums2));
