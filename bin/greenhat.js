#!/usr/bin/env node

/**
 * Module dependencies.
 */
var program = require('commander');
var childProcess = require('child_process');
var colors = require('colors');
var moment = require('moment');
var updateNotifier = require('update-notifier');

var logger = require('../modules/logger');

var pkg = require('../package.json');

program
    .version(pkg.version)
    .usage('[options] | <n>')
    .option('-d, --day <n>', 'an integer specifying n number of days before today to generate commits.', parseInt)
    .option('-D, --date <YYYY-MM-DD>', 'a date string in the form yyyy-mm-dd (e.g. 2015-11-13).')
    .option('-l, --log', 'log the details.')
    .option('-H, --humanize', 'random git commit message by whatthecommit. Careful, the speed will becomes slower.')
    .parse(process.argv);

colors.setTheme({
    silly: 'rainbow',
    input: 'grey',
    verbose: 'cyan',
    prompt: 'grey',
    info: 'green',
    data: 'grey',
    help: 'cyan',
    warn: 'yellow',
    debug: 'blue',
    error: 'red'
});

var getDateString = function(n, startDate) {
    return moment(startDate).subtract(n, 'days').format('YYYY-MM-DD');
};

var timer = (function() {
    var timer = {};

    var start = function(name) {
        var startTime = moment();

        name = name || 'default';

        timer[name] = {
            startTime: startTime
        };

        return startTime;
    };

    var diff = function(start, end) {
        if (!moment.isMoment(start)) {
            start = moment(start);
        }
        
        if (!moment.isMoment(end)) {
            end = moment(end);
        }

        return end.diff(start);
    }

    var difference = function() {
        var name, startTime, endTime;

        if (arguments.length === 1) {
            name = arguments[0];
        } else {
            startTime = arguments[0];
            endTime = arguments[1];
        }

        if (name) {
            if (timer[name] && timer[name].startTime && timer[name].endTime) {
                return diff(timer[name].startTime, timer[name].endTime);
            }
        } else if (startTime && endTime){
            return diff(startTime, endTime);
        }

        return false;
    }

    var end = function(name) {
        var endTime = moment();

        name = name || 'default';

        if (timer[name] && timer[name].startTime) {
            timer[name].endTime = endTime;

            return difference(name);
        }
    };

    return {
        start: start,
        end: end,
        difference: difference
    }
})();

/**
 * Main program.
 */
var main = function() {
    var startDate, currentDate, currentGitDate, day, commitNum, commitMessage, content, cli, stdout, difference;

    var log = ''//program.log;

    timer.start();



    if (program.args.length === 1 && !isNaN(Number(program.args[0]))) {
        day = parseInt(program.args[0]);
    } else if (program.day) {
        day = parseInt(program.day);
    } else {
        console.error('Error: Invalid value.'.error);
        console.log();
        console.log('See "greenhat --help" for more.');
        process.exit(1);
    }


    if (program.date) {
        if (moment(program.date).diff(moment()) >= 0) {
            console.log('参数设置错误, 目标时间必须为今天之前的某一天.');
            return;
        } else {
            startDate = moment(program.date).format('YYYY-MM-DD');
        }
    } else {
        startDate = moment().format('YYYY-MM-DD');
    }

    if (program.humanize) {
        commitMessage = '`curl http://whatthecommit.com/index.txt`';
    } else {
        commitMessage = 'update';
    }

    console.log(('程序开始执行, 截止日期为: ' + startDate + ', 目标天数为: ' + day + ' 天'));

    while(day--) {
        currentDate = getDateString(day, startDate);
        currentGitDate = moment(currentDate).format();

        commitNum = (Math.random() >.3) ? Math.floor(Math.random()*10):0;
        //commitNum = Math.floor(Math.random()*10);
        console.log( '目标日期: ' , currentDate , '  目标次数: ', commitNum);

        //console.log('bbbb')

        for (var i = 0; i < commitNum; i++) {
            //console.log( '进行第 ' + (i+1) + ' 次提交', 'prompt');

            if(commitNum == 0) break;
            content = moment(currentDate).format('ll') + ' ' + parseInt(Math.random()*10000).toString();

            cli = 'echo "' + content + '" > realwork.txt && git add realwork.txt && SET GIT_AUTHOR_DATE="' + currentGitDate + '";SET GIT_COMMITTER_DATE="' + currentGitDate + '" git commit -m "' + commitMessage + '" && git push;';
            //console.log(currentGitDate+': '+cli);
            stdout = childProcess.execSync(cli, {
                encoding: 'UTF-8'
            });

            console.log(currentGitDate+': '+stdout);
        }
    }

    console.log( '我们正在处理一些事情.', 'prompt');

    cli = 'git rm realwork.txt && git commit -m "delete" && git push;';

    stdout = childProcess.execSync(cli, {
        encoding: 'UTF-8'
    });

    console.log(stdout);

    difference = timer.end();

    console.log('任务完成, 总耗时: %s ms (%s).', difference, moment.duration(difference).locale('zh-cn').humanize(true));
}

updateNotifier({pkg: pkg}).notify();

main();
