/**
 * Created by pengqian on 16/7/5.
 */

import moment from 'moment';

var DateTimeTransform = {
    //时间戳转换成日期
    timestampToDatetime(timestamp, formatString){
        return moment(timestamp).format(formatString);
    },
    //日期转换为时间戳
    datetimeToTimestamp(datetime, formatString){
        return moment(datetime, formatString).format('x');
    },
    //获取当前的时间
    getNowDatetime(formatString){
        return moment().format(formatString).toString();
    },
    //获取当前的时间戳
    getNowTimestamp(){
        return moment().format('x');
    },
    //获取到目前为止的时间
    getDateFromNow(){
        return moment().fromNow();
    },
    //获取这一段时间的时间戳
    getDurationFromTimestamp(timestamp){
        let dur = moment.duration(timestamp);
        let durString = '';

        //年月日的转换
        if (dur.years() == 0) {
            if (dur.months() == 0) {
                if (dur.days() != 0) {
                    durString = durString + dur.days() + '天';
                }
            } else {
                durString = durString + dur.months() + '个月';

                if (dur.days() != 0) {
                    durString = durString + '零';
                    durString = durString + dur.days() + '天';
                }
            }
        } else {
            durString = durString + dur.years() + '年';

            if (dur.months() == 0) {
                if (dur.days() != 0) {
                    durString = durString + '零';
                    durString = durString + dur.days() + '天';
                }
            } else {
                durString = durString + dur.months() + '个月';
                if (dur.days() != 0) {
                    durString = durString + '零';
                    durString = durString + dur.days() + '天';
                }
            }
        }

        //时分秒的转换
        if (dur.hours() != 0) {
            durString = durString + dur.hours() + '个小时';
        }

        if (dur.minutes() != 0) {
            durString = durString + dur.minutes() + '分钟';
        }

        if (dur.seconds() != 0) {
            durString = durString + dur.seconds() + '秒';
        }

        return durString;
    },

    timeArea(timestamp){

        let timeArea = {};

        if (!timestamp) {

            timeArea.isDayStateChanged = false;
            return timeArea;
        }

        let currentDayState = sessionStorage.currentDayState;
        let needDateMillisecond = timestamp - (timestamp%(1000*60*60*24));

        if (currentDayState === undefined){
            timeArea.isDayStateChanged = true;
            sessionStorage.currentDayState = needDateMillisecond;

        }else {
            if(needDateMillisecond == parseInt(currentDayState)){
                timeArea.isDayStateChanged = false;
                return timeArea;
            }else {
                timeArea.isDayStateChanged = true;
                sessionStorage.currentDayState = needDateMillisecond;
            }
        }


        let currentDate = new Date();
        let todayMillisecond = currentDate.getTime() - (currentDate.getTime()%(1000*60*60*24));
        let yestodayMilliscond = todayMillisecond - 1000*60*60*24;
        if( needDateMillisecond>= todayMillisecond){
            timeArea.day = "今天";

        }else if(needDateMillisecond >= yestodayMilliscond){
            timeArea.day = "昨天";
        }else {
            let activityDay = new Date(timestamp);
            // timeArea.day = (activityDay.getMonth() + 1)+'月'+activityDay.getDate()+'日';
            timeArea.day = this.getMonthForDate(activityDay)+'月'+this.getDayForDate(activityDay)+'日';

        }

        return timeArea;
    },

    getMonthForDate(date){
        let month = date.getMonth() + 1;
        return this.getFormtTime(month);;
    },
    getDayForDate(date){
        let  strDate = date.getDate();

        return this.getFormtTime(strDate);
    },

    getHoursForDate(date){
        let  hours = date.getHours();
        return this.getFormtTime(hours);
    },

    getMinutesForDate(date){
        let  minutes = date.getMinutes();
        return this.getFormtTime(minutes);
    },

    getFormtTime(time){
        let timeStr = time.toString();
        if (time >= 0 && time <= 9) {
            timeStr = "0" + time;
        }
        return timeStr;
    },


    getNowTime() {
    var date = new Date();
    var seperator1 = "-";
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = year + seperator1 + month + seperator1 + strDate;
    return currentdate;
    },

    timeToString(time){
        var d = new Date(time);    //根据时间戳生成的时间对象
        let month = d.getMonth() + 1
        if (month < 10){
            month = '0' + month
        }
        let day = d.getDate()
        if (day < 10){
            day = '0' + day
        }
        var date = d.getFullYear() + "-" +
            month + "-" + day
        return date
    }


};

export default DateTimeTransform;