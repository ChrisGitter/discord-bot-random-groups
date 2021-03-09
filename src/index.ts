import Discord from 'discord.js';
import { token } from './config';
import randomGroups from './randomGroups';
import parseArgs from 'yargs-parser';

const client = new Discord.Client();

if (!token) {
    console.error('Token not set, aborting ...');
    process.kill(2);
}

client.login(token);

const COMMAND = '!rgroups';

client.on('message', (message) => {
    if (message.author.bot) {
        return;
    }
    if (message.content.startsWith(COMMAND)) {
        const argv = parseArgs(message.content.slice(COMMAND.length).trim(), {
            number: ['size'],
            array: ['except'],
            alias: {
                size: ['s'],
                except: ['e'],
                help: ['h'],
            },
            default: {
                size: 2,
            },
        });

        console.log(argv);

        if (argv.help) {
            const out =
                `${COMMAND} [-h] [-e <s1 s2 ... sn>] [-s <num>]\n` +
                '-h --help                Show help\n' +
                '-e --except   string[]   Omit persons from being teamed' +
                '-s --size     number     Number of persons per team (default: 2)';
            message.channel.send(out);
            return;
        }

        const teamSize: number = argv.size;
        const omitPersons: string[] =
            argv.except?.map((x: any) => String(x)) || [];

        const { channel } = message;

        if (channel.type !== 'text') {
            return;
        }

        // Group all current channel users randomly together
        const humans = Array.from(channel.members.values()).filter((member) => {
            if (member.user.bot) {
                return false;
            }
            console.log(member.displayName, omitPersons);
            if (omitPersons.includes(member.displayName)) {
                return false;
            }
            return true;
        });

        if (humans.length <= teamSize) {
            return message.channel.send(
                `You need at least ${teamSize} persons in this channel to create teams.`
            );
        }

        const groups = randomGroups(
            humans.map((h) => h.displayName),
            teamSize
        );

        return message.channel.send(
            'Teams:\n' +
                groups
                    .map((group, i) => `Group ${i + 1}: ${group.join(', ')}`)
                    .join('\n')
        );
    }
});

client.on('ready', () => {
    console.log('Bot is ready');
});

client.on('disconnect', () => {
    client.destroy();
    console.log('Bot disconnected');
});
