cat <<EOF > /etc/cron.hourly/restart-mn.sh
#!/bin/bash
/usr/local/binnodos-cli clearbanned 
/usr/local/bin/anodos-cli stop 
/usr/local/bin/anodosd -reindex
EOF
/bin/chmod +x /etc/cron.hourly/restart-mn.sh
