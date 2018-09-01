#!/bin/bash
#
#restarts the daemon every hour
#
cat <<EOF > /etc/cron.hourly/restart-mn.sh
#!/bin/bash
/usr/local/bin/anodos-cli clearbanned 
/usr/local/bin/anodos-cli stop 
sleep 2
/usr/local/bin/anodosd -reindex
EOF

#make it +x
/bin/chmod +x /etc/cron.hourly/restart-mn.sh
