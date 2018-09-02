#!/bin/bash


cat << EOF > /usr/local/bin/restart-ands.sh
#!/bin/bash
#set -x
MNVIN="mywallet"

# Check if MASTERNODE is in state enabled

if [  `/usr/local/bin/anodos-cli  masternode list full |grep $MNVIN|grep -vw ENABLED|wc -l` -gt 0 ]
then


        /bin/systemctl disable Anodos.service
        /bin/systemctl daemon-reload
        /usr/local/bin/anodos-cli clearbanned
        /usr/local/bin/anodos-cli stop
        /usr/local/bin/anodosd -reindex
        /bin/systemctl enable Anodos.service
        /bin/systemctl daemon-reload
fi
EOF

#make it  executable
/bin/chmod +x /usr/local/bin/restart-ands.sh 

#add cronjob 
crontab -l > mycron
echo "*/15 * * * * /usr/local/bin/restart-ands.sh" >> mycron
crontab mycron
rm mycron 
sed -i "s/mywallet/$1/" /usr/local/bin/restart-ands.sh
