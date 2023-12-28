diff = a - b;
mixedAngle = diff > 0.5 ? frac(mix(a, b+1, w)) : diff < -0.5 ? frac(mix(a+1, b, w)) : mix(a, b, mix);