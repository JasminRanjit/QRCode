# qrcode
QRCode Scanner application that shows a product page when the user uses their camera phone to scan the QRCode in any product.

To view the page follow the instructions below
Copy the folder qrcode to the xampp folder. This is in C: by default. The folder qrcode needs to be inside the htdocs folder which is inside the xampp folder.
Then, Run Xampp Server and start Apache and MySQL.
In the browser url box type "localhost/phpmyadmin"
Import the database named qrcode.sql in the folder qrcode.
To start the page, in the url box type "http://localhost/qrcode/index.php?id=" and enter the id which is the item id. For instance if you want to access the page of Original Blue Cheese whose database id is "0" you have to type http://localhost/qrcode/index.php?id=0. For now only 0 and 1 have data. Then after typing the full url with the id, hit enter to access the product page.
The customer can rate a product and provide their feedbacks as well. They can also view feedbacks from other users when they scroll down further.
