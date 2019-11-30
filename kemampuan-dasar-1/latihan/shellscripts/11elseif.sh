#! /bin/bash

echo -n "Enter your lucky number: "
read n

if [ $n -eq 101 ]; then
	echo "You won it"
elif [ $n -eq 510 ]; then
	echo "You got second prize"
else
	echo "Sorry, try again later"
fi
