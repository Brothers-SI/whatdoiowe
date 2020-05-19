if [ $NODE_ENV = "dev" ]; then
  yarn install --production=false
  yarn dev
fi
# We need the following line in order to keep the container running.
while [ 1 -eq 1 ];do sleep 1 ;done
