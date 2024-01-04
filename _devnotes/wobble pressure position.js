seed = (seed == 0) ? srand() * 100 : seed;
progress = seed + d;
t = progress/(pressure_wobble_size * zoom_scale);

secondLayerWeight = 0.4;
secondLayerScale = 0.73;
firstPressureScale = noise(t);
secondPressureScale = noise(t / secondLayerScale);
firstLayerWeight = 1 - secondLayerWeight;
combinedNoise = (secondPressureScale * secondLayerWeight) + (firstPressureScale * firstLayerWeight);

pressureScale = 1 - (pressure_wobble_percent * combinedNoise);

op = p == 0 ? 0 : p * pressureScale;

period1 = 70;
period2 = 170;
period3 = 200;

sz = scale_with_pressure == 1 ? p : 1;
twopid = 2 * pi * d;
noiseNumerator = twopid / zoom_scale;
s1 = noise(noiseNumerator/period1);
s2 = noise(noiseNumerator/period2);
s3 = noise(noiseNumerator/period3);
offset = sz * (position_wobble_amplitude * (s1 + s2 + s3));
ox = x + nx * offset;
oy = y + ny * offset;







        <param>
            <name>zoom_scale</name>
            <value>1</value>
            <defaultVal>1</defaultVal>
            <minVal>0.00999999978</minVal>
            <maxVal>4</maxVal>
            <decimals>2</decimals>
            <color/>
            <toolTip>Adjustment factor for the wobble pixel size in case you need to zoom into your canvas.</toolTip>
        </param>
		<param>
            <name>pressure_wobble_size</name>
            <defaultVal>80</defaultVal>
            <minVal>1</minVal>
            <maxVal>600</maxVal>
            <decimals>0</decimals>
            <color/>
            <toolTip>The spatial interval used by the pressure noise in pixels. Smaller values cause more jittery or blobby noise. Larger values look more inky.</toolTip>
        </param>
        <param>
            <name>pressure_wobble_percent</name>
            <defaultVal>0.85</defaultVal>
            <minVal>0.00999999978</minVal>
            <maxVal>1.5</maxVal>
            <decimals>2</decimals>
            <color/>
            <toolTip>The maximum percent the pressure can be scaled down by.</toolTip>
        </param>
        <param>
            <name>position_wobble_amplitude</name>
            <defaultVal>0.35</defaultVal>
            <minVal>-1.70000005</minVal>
            <maxVal>1.70000005</maxVal>
            <decimals>2</decimals>
            <color/>
            <toolTip>The maximum amount of position wobble in pixels.</toolTip>
        </param>
        <param>
            <name>scale_with_pressure</name>
            <defaultVal>0</defaultVal>
            <minVal>0</minVal>
            <maxVal>1</maxVal>
            <decimals>0</decimals>
            <color/>
            <toolTip>If 1, the position wobble will scale based on pressure.</toolTip>
        </param>