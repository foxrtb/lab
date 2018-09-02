#!/bin/bash



#set -x

MN="MN1"
MNVIN="AHqP98ptdukpDM1jbWUShH5Hh42XpxQm8z"

##
## Check if MASTERNODE is in state enabled
##
if [  `/usr/local/bin/anodos-cli  masternode list full |grep $MNVIN|grep -vw ENABLED|wc -l` -gt 0 ]
then
#        /usr/local/bin/pb push "MN not in status ENABLED on $MN Restating" 

        /bin/systemctl disable Anodos.service
        /bin/systemctl daemon-reload
        /usr/local/bin/anodos-cli clearbanned
        /usr/local/bin/anodos-cli stop
        /usr/local/bin/anodosd -reindex
        /bin/systemctl enable Anodos.service
        /bin/systemctl daemon-reload
fi


#save to /usr/local/bin/restart-ands.sh
# chmod +x /usr/local/bin/restart-ands.sh
#crontab -e
#*/15 * * * * /usr/local/bin/restart-ands.sh
