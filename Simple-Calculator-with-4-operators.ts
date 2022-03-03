#!/bin/bash
#***********************
#Description: Writing a simple script for addition, subtraction, multiplication and division.
#Date: 03.03.2022
#Author: nsromma
#*************************

echo "Enter two numbers: "
read a
read b
echo "Select your operator"
echo "1. Addition"
echo "2. Substraction"
echo "3. Multiplication"
echo "4. Division"
read ch

case $ch in

     1) res=`echo $a + $b | bc`
     ;;
     2) res=`echo $a - $b | bc`
     ;;
     3) res=`echo $a \* $b | bc`
     ;;
     4) res=`echo "scale=2; $a / $b" | bc`
     ;;
esac


echo "result: $res"
-- INSERT --                                                                                                                                           1,1           Top
