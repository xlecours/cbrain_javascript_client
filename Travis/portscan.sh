#!/bin/bash

#Defining the variables
IP='cb_travis'
firstport=1
lastport=3100

function portscan

{
for ((counter=$firstport; counter<=$lastport; counter++))
do
(echo >/dev/tcp/$IP/$counter) > /dev/null 2>&1 && echo “$counter open”
done
}

echo "launching portscan"
portscan

