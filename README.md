# Naoris Auto Bot

Naoris Auto Bot is an automated bot designed to interact with the Naoris Protocol network. It sends periodic heartbeats, toggles device states, and fetches wallet details for multiple accounts. This bot supports proxy usage for secure and reliable connections.

## Features

- **Heartbeat Automation**: Sends heartbeats to the Naoris Protocol server every 1 minute.
- **Device Toggle**: Automatically toggles device states (ON/OFF).
- **Wallet Details**: Fetches user wallet details, including total earnings, today's earnings, and rank.
- **Proxy Support**: Supports HTTP, SOCKS4, and SOCKS5 proxies for secure connections.
- **Multi-Account Support**: Handles multiple accounts simultaneously.

## Requirements

- Node.js (version 16 or newer)
- NPM or Yarn
- `accounts.json` file containing user account details.
- `proxy.txt` file (optional) containing a list of proxies.

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/airdropinsiders/Naoris-Auto-Bot.git
   cd Naoris-Auto-Bot
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Create an accounts.json file in the root directory with the following format:
   ```
   [
    {
        "walletAddress": "0xYourWalletAddress1",
        "token": "YourToken1"
    },
    {
        "walletAddress": "0xYourWalletAddress2",
        "token": "YourToken2"
    }
   ]
   ```
4. (Optional) Create a proxy.txt file in the root directory with the following format:
   ```
   http://proxy1:port
   socks5://proxy2:port
   ```
5. Start the bot:
   ```
   npm run start
   ```

## Contributing
Contributions are welcome! If you'd like to contribute, please follow these steps:

Fork the repository.

Create a new branch for your feature or bugfix.

Commit your changes.

Push your branch and open a pull request.



## `new` How to run with PM2
before run with PM2 make sure your bots run well, so we can try this PM2

install PM2 as global, so you won't install again if you use new bots
```bash
npm install pm2 -g
```

once installed you can run with
```bash
npm run pm2
```


<hr>

## __cheatsheet about PM2__

- *Check how many bots running*
```bash
pm2 list
```
- *Check logs with specific running bots*
```bash
pm2 logs [id]
```
- *Stopping bots from pm2*
```bash
pm2 stop [id]
```
- *Restarting bots*
```bash
pm2 reload [id]
```
- *Delete running bots*
```bash
pm2 detele [id]
```
