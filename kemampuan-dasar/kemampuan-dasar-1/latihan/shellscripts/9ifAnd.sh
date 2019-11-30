#! /bin/bash

echo -n "Enter username: "
read username

echo -n "Enter password: "
read password

if [[ ( $username == "admin" && $password == "password") ]]; then
	echo "Valid user"
else 
	echo "Invalid user"
fi
