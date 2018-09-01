cat <<EOF > /etc/cron.hourly/anodosrestart
#!/bin/bash
/usr/local/binnodos-cli clearbanned 
/usr/local/bin/anodos-cli stop 
/usr/local/bin/anodosd -reindex
EOF
