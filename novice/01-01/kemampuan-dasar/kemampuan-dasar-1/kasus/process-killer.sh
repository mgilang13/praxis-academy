#! /bin/bash

echo -n "Masukkan nama aplikasi: "
read app

check=`pidof $app`

if [ -z "$check" ]
then
	echo "Application is not running"
else
	killall -i $app
fi
