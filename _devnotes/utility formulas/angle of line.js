angleOffset = 0.5;

// divide by 2 pi to convert radians to normalized pen tilt angle output.
// add 1 because atan2 can output negative values which are invalid pen tilt values.
// alternatively, only use angle = 1 + (negative angle) when the angle is negative, to confine it to 0..1
angleOfLine = angleOffset + (atan2(dy, dx) / (2 * pi)) + 1.0;

// ota is output pen tilt angle.
ota = angleOfLine;