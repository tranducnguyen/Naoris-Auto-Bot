import chalk from 'chalk';

const banner = () => {
  const text = `
                   NAORIS AUTO - BOT                
     📢  Telegram Channel: https://t.me/AirdropInsiderID`;
  
  const separator = "═".repeat(60);
  return `${chalk.cyan(text)}\n${chalk.white(separator)}`;
};

export default banner;