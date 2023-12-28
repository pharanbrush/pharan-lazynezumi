
startingAngle = init ? startingAngle : ta;
init = true;
ota = startingAngle;

averageAngle = init ? averageAngle : ta;
init = true;

// normalizedAngleOffset = angleOffset / 360.0;
// lineAngle = frac(normalizedAngleOffset + (atan2(dy, dx) / (2 * pi)));
// stiffness = mix(minStiffness, maxStiffness, p);
// stiffness = frac(stiffness * clamp(0, 1, (1 - (s / speedScale))));
// a = lineAngle;
// b = ta;
// w = stiffness;
// diff = a - b;
// targetAngle = diff > 0.5 ? frac(mix(a, b+1.0, w)) : diff < -0.5 ? frac(mix(a+1.0, b, w)) : mix(a, b, w);
targetAngle = ta;

a = averageAngle;
b = targetAngle;
w = turnProportion;
diff = a - b;
averageAngle = diff > 0.5 ? frac(mix(a, b+1.0, w)) : diff < -0.5 ? frac(mix(a+1.0, b, w)) : mix(a, b, w);

ota = averageAngle;