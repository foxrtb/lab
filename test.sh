#!/bin/bash

#add reindex to systemd service and reload
sed -i "s/-daemon/-daemon -reindex/" /etc/systemd/system/Anodos.service 
systemctl daemon-reload

cat << 'EOF' > /usr/local/bin/restart-ands.sh
#!/bin/bash
#set -x
MNVIN="mywallet"

# Check if MASTERNODE is in state enabled

if [  `/usr/local/bin/anodos-cli  masternode list full |grep $MNVIN|grep -vw ENABLED|wc -l` -gt 0 ]
then
        /usr/local/bin/anodos-cli clearbanned
        /bin/systemctl stop Anodos.service
        /bin/systemctl start Anodos.service
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
