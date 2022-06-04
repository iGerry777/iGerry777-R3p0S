What command would you use to clear the screen? clear

What is the shortcut command to open a new tab in your terminal? Shift+Ctrl+T OR Press Command-T

What key would you use to scroll through previous commands you’ve typed before?CTRL-R OR 

You have a three txt files and an empty folder on your desktop. Write a single line command that will move all three txt files into the folder. mv ~/Desktop/*.txt /Volumes/Backup/MyFolder

You want to inspect the differences between two txt files myfile1.txt and myfile2.txt. Write a command that would display the differences in content between these two files. diff myfile1.txt myfile2.txt

Write a command that would delete this folder and all of the contents inside. rm -r

What is the command to list all files, including hidden files? Write a command that displays all .css files in a folder. ls -al

What is the command to find a file by name on your disk (or some other storage medium)? find / -name abc.dmg

What is the command to find a file by content

in your folder
on the disk?
That is, how do you search for a word or phrase in the file contents? SPOT

Use a bash command to create a file named YourName.txt with no content in it. Look at the permissions.

AirdeGerardo7:iGerry777-R3p0S iGerry$ touch YourName.txt
AirdeGerardo7:iGerry777-R3p0S iGerry$ ls -l
total 8
-rw-r--r--  1 iGerry  staff  128 Jun  2 16:10 README.md
drwxr-xr-x  2 iGerry  staff   64 Jun  2 20:48 Smoothies
-rw-r--r--  1 iGerry  staff    0 Jun  2 23:09 YourName.txt
-rw-r--r--  1 iGerry  staff    0 Jun  2 22:38 commands3.md
drwxr-xr-x  6 iGerry  staff  192 Jun  2 22:12 drinks
drwxr-xr-x  6 iGerry  staff  192 Jun  2 16:13 soups

Now change the permissions so everyone can read it and execute it.

chmod ugo+rwx

Now change the permissions so only you can read it.

chmod g="YourName.txt"

