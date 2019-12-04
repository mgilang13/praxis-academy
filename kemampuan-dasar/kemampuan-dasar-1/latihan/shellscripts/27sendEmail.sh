#! /bin/bash

Recipient="muhammad.gilang.n.k@gmail.com"
Subject="Greeting"
Message="Welcome to Gilang"
`sendmail -s $Subject $Recipient <<< $Message`
