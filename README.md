# pharan-lazynezumi
Some customization and scripts I made for Lazy Nezumi Pro (LNP)


# Scripts
### How to download individual scripts

If you want to download individual xml files from Github, open the link to the specific file, then choose "Download raw file" option:
![Alt text](docimg/download-raw-file-github.png)

## How to install scripts in LNP
As of **Lazy Nezumi Pro Version 24.10.03.xxxx**:

Each script is an `.xml` file.
The name of the script you select in the LNP interface comes from the filename.

**Put the scripts (.xml files) in a folder, copy the folder, and paste the folder into LNP's user scripts folder.**

1. Put the scripts (.xml files) in a folder. Copy the folder. Then paste that folder into LNP's user scripts folder.

2. To find the user scripts folder, enter this path into the File explorer address bar:  
`%LocalAppData%\Lazy Nezumi Pro\scripts`

3. In the end, the path where you can find your scripts should look something like:  
`...\Lazy Nezumi Pro\scripts\Pharan` where `Pharan` is the name of your folder with your scripts in it.

![](/docimg/localappdata_lnp_scripts_folder.png)

Once you close and open LNP again, it should list the scripts under the **Scripting** section.

![](/docimg/pharan_scripts_lnp_ui.png)

## Pharan's LNP Scripts
### dotted line
![](docimg/scripts-dotted-line.gif)  
Use **dotted line** to make dotted lines.  
> This requires your brush to respond to pen pressure. If the brush still draws at near-zero pressure, lines will be drawn in the gaps accordingly.  
> LNP or your drawing program may apply some pressure smoothing so drawing too quickly may yield incorrect results.


### unstraighten - slight wobble
![](docimg/scripts-unstraighten-slightwobble.gif)  
Use **unstraighten** to add a slight wobble to lines and shapes.


### unstraighten - rocky surface
![](docimg/scripts-wobble-jagged.gif)  
Also try **rocky surface** for a more jagged look.


### pressure - pressure multiplier
![](docimg/scripts-pressure-pressuremultiplier.gif)  
If your pen pressure settings don't agree with the calibration of a certain brush for what you need it to do, use **pressure multiplier** to temporarily harden or soften your pressure.  


### pressure - wobble
![](docimg/scripts-pressure-wobble.png) 
![](docimg/scripts-pressure-wobble.gif)  
Use this script to achieve a loose-ink/melty-crayon/Flash brush look. This works well for brushes that only affect the size based on pressure and not the opacity.

 The "size" parameter gives you more flexibility vs the noise provided by most painting software.



---
# Icon Set
## How to install an icon set to LNP
As of **Lazy Nezumi Pro Version 22.10.05.2045**:

Each icon set is a folder containing png files for each icon.

Copy the folder containing the icon pngs into the folder named `icons` inside the LNP install folder.

By default, this is `C:\Program Files (x86)\Lazy Nezumi Pro\icons\` .

In the main window of Lazy Nezumi Pro, choose `Settings > Toolbar Settings > Edit toolbar.xml`. This will open the settings file in your text editor. 

Change the value inside the `<iconfolder>` tag to the folder you want.

For example: `<iconfolder>icons/yournewiconpackfolder</iconfolder>` .

Save the file. You may need to close and open LNP again for it to fully take effect.

## Pharan's LNP Icon Set
![](docimg/iconset-pharan.png)  
It looks like this.  

---
# PharanOrange theme
Lower-contrast orange theme for the main window.  
![](docimg/theme-pharanorange.png)  

## How to install and use a theme in LNP
As of **Lazy Nezumi Pro Version 24.07.20.1418**:
Each theme is a folder containing png and qss files. These files define the styling of the theme and the images it uses.  

1. Copy the folder containing the theme files (eg, the PharanOrange folder).
2. Navigate to `%localappdata%\Lazy Nezumi Pro\themes` (paste that into the address bar of File Explorer).
3. Paste the folder (eg, PharanOrange) into this themes folder.
4. Open Lazy Nezumi Pro. Or restart LNP if it was already open.
5. Go to Settings > Theme > choose your theme (eg, PharanOrange)


---
# Macro Pad Button Image Set
Button images for a macropad that has key displays.  

![](docimg/macropad-preview.png)  
Sample of button images shown on a Mountain DisplayPad.




---

If you're a digital artist on Windows and you don't have Lazy Nezumi Pro yet, go check it out!
Use my affiliate link so they know I sent you: https://lazynezumi.com/?ai=pharan
(I don't get a kickback but if the numbers are nice, maybe I get to pester them about it. 🥳)