# Micro-frontends demo


## Install & build
In the root folder, run:

```
make
```

## Run all micro-frontends:

Install pm2:
```
npm install pm2@latest -g
```

Start all the services (listed in ./ecosystem.config.js):
```
pm2 start
```

Then hit http://localhost:3000 (it will take a few seconds to start up)

Not working? You can see logs for all of the services with:

```
pm2 logs
```

or any individual service with:

```
pm2 logs <id>
```

Where <id> is the id of the service (run `pm2 ls` to list all services).
