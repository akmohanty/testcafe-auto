rsync -avr -e "ssh -l vagrant" --exclude 'node_modules' * 192.168.0.24:./docker
