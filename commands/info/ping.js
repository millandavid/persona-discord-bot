module.exports = {
  name: 'ping',
  category: 'info',
  permissions: [],
  devOnly: false,
  run: async ({ client, message, args }) => {
    message.reply('Pong');
    // channel = client.channels.cache.get('790327781103239171');
    // channel.send('Pong');
  },
};
