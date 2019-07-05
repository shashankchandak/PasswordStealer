# PasswordStealer
This repositry contains 2 parts

1. Chrome Saved Passwords extractor

2. SSID and Passwords extractor

# 1.Extract Chrome saved Passwords

### How does it work ?
When you request Google Chrome to save your password on a given website by pressing REMEMBER ME, it stores it in a "Login Data" file (sqlite database file).
 
The file is present at the location Appdata\Local\Google\Chrome\User Data\Default\Login Data .
 
In order to securely store the password, the password is encrypted Windows CryptProtectData function.
 
The python script chromepass.py locates the Login Data file, Access the Sqlite Database and then decrypts the passwords using the CryptUnprotectData function from the win32crpyt package in python.
 
The passwords are then sent to a node server using a post request.

The python script chromepass.py is converted into a standalone exe using [pyinstaller](https://www.pyinstaller.org/), so if the executable is plugged into any computer running windows and Google Chrome, running this program will extract all the Chrome saved passwords.
 
 
 
 
 
 PS: Dont misuse the program, It is only for educational purposes.
