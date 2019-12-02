#! /bin/bash

echo -n "Enter any number:  "
read n

if [[ ( $n -eq 15 || $n -eq 45 ) ]]; then
	echo "You won the game"
else
	echo "You lost it"
fi
