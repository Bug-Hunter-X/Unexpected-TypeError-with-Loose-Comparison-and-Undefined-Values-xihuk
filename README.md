# JavaScript Loose Comparison Bug

This repository demonstrates a common JavaScript bug related to loose comparison (==) and the handling of undefined values.  The `bug.js` file contains a function that fails when an undefined value is passed as an argument.  The `bugSolution.js` file provides a corrected version that explicitly handles undefined values.

## Bug Description
The original function uses loose comparison (==) to check for null and then performs other conditional checks.  However, it fails when undefined is passed as an argument because the comparison `x > 10` throws a TypeError.

## Solution
The solution explicitly checks for undefined before making any other comparisons and adds an additional branch to handle that case appropriately.