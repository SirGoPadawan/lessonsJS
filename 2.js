function pod(x, n) {
  for (let i = 1; i <= n; i++) {
    x = x + i;
  }
  return x;
}
console.log(pod(0, 6));
