// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract RewardSystem {
    struct Acc{
         string MSSV;   
         string HoTen;
         int Tuoi;
         string TienDu;
   }

   Acc public acc = Acc('21520895', 'Nguyen Hoang Hung', 20, '219');    

   function getAcc() public view returns (Acc memory) {
      return acc;
   }

    int count = 0;

    function changeAcc(string memory _mssv, string memory _HoTen, int _Tuoi, string memory _TienDu) public {
      acc.MSSV = _mssv;
      acc.HoTen = _HoTen;
      acc.Tuoi = _Tuoi;
      acc.TienDu = _TienDu;
    }

    function changeBalance(string memory _balance) public{
        acc.TienDu = _balance;
    }

    function min(int x, int y) public pure returns(int){
        if (x < y)
            return x;
        else 
            return y;
    }


    // count steps
    function binarySearch(int left, int right, int ranNumber, int __count) public view returns (int){
        __count++;
        int mid = (left + right) / 2;
        if (mid == ranNumber)
            return __count;
        
        else if (ranNumber < mid)
            return binarySearch(left, mid, ranNumber, __count);
        
        else
            return binarySearch(mid, right, ranNumber, __count);
    }

    // linear search
    function countStepUser1(int ranNumber) public returns (int){
        count = ranNumber;
        return count;
    }
    
    // binary search
    function countStepUser2(int ranNumber) public returns (int){
        int left = 1;
        int right = 100;
        count = 0;
        return binarySearch(left, right, ranNumber, count);
    }

    // ternary Search
    function countStepUser3(int ranNumber) public returns (int){
        count = 1;
        if (ranNumber == 1) 
            return count; 

        int i = 1; 
        while (i <= ranNumber) 
            i = i*2;
        
        return binarySearch(i/2, min(i, 100), ranNumber, count);
    }

    // exponential Search
    function countStepUser4(int ranNumber) public returns (int){
        int l = 1;
        int r = 100;
        count = 0;
        while(r-l >= 0) {
            count++;
            int partiton = (r-l)/3;
            int mid1 = l + partiton;
            int mid2 = r - partiton;

            if (ranNumber == mid1)
                return count;

            else if (ranNumber == mid2) 
                return count;

            else if (ranNumber < mid1) 
                r = mid1-1;

            else if ( ranNumber > mid2)
                l = mid2+1;

            else {
                l = mid1+1;
                r = mid2-1;
            } 
        }

        return -1;
    }
}