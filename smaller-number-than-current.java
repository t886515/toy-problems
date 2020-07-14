class Solution {
    public int[] smallerNumbersThanCurrent(int[] nums) {
        int[] sortedNums = Arrays.copyOf(nums, nums.length);
        Arrays.sort(sortedNums);
        for (int i = 0; i < nums.length; i++) {
            int currNum = nums[i];
            int value = Arrays.stream(sortedNums).boxed().collect(Collectors.toList()).indexOf(currNum);
            nums[i] = value;
        }
        return nums;
    
    }
}