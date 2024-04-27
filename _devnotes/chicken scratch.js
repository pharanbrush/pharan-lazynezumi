//
seed = (seed == 0) ? srand() * 100 : seed;
progress = seed + d;
t = progress / (wobble_size *  zoom_scale);

backwardOffsetPressureScale = 0.2;

forwardLength = length(dx, dy);

angleThreshold = 0.5;


okAngle = abs(dAngle) < angleThreshold ? 1 : 0;
okDistance = forwardLength > speed_threshold ? 1 : 0;
okOffset = okAngle * okDistance;


noiseT = noise(t);
sinT = sin(t);
forwardOffset = (sinT) * segment_size * zoom_scale;
//sidewaysOffset = noiseT * sideways_inaccuracy * zoom_scale;
sidewaysOffset = forwardOffset;

forwardAngle = atan2(dy, dx);

forwardOffset = forwardOffset < 0 ? forwardOffset * 2 : forwardOffset;
rotRad(forwardOffset, sidewaysOffset, forwardAngle);
xOffset = res0 * okOffset;
yOffset = res1 * okOffset;


ox = x + xOffset;
oy = y + yOffset;

//op = (okOffset == 0) ? p : (dForward < -0.5) ? (p * backwardOffsetPressureScale) : mix(p, p * ((noiseT + 1) * 0.5), 0.1);
op = (okOffset == 0) ? p : (dForward < -0.5) ? (p * backwardOffsetPressureScale) : p;


dForward = forwardOffset - lastForwardOffset;
lastForwardOffset = forwardOffset;

dAngle = minArcRad(forwardAngle, lastForwardAngle);
lastForwardAngle = forwardAngle;
//