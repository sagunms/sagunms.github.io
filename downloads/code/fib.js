// Start Fibonacci Generator function
function fib(n) {
	if (n <= 1) {
		return 1;
	}
	return fib(n-2) + fib(n-1);
}
// End Fibonacci Generator function