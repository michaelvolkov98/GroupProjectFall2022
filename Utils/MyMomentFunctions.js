const moment = require("moment");

class MyMomentFunctions {


    static async getCurrentDate() {
        return moment().format('D');
    }

    // static addInCurrentDate() {
        
    // }

    static async yesterdayDateNumber() {
        const tdate = await this.getCurrentDate();
        const dateNumber = parseInt(tdate);
        return dateNumber-1;
    };
    static async fullDateMMMDYYYY() {
        return moment().format('MMM D, YYYY');
    };
    static async fullDateMMMM_YYYY() {
        return moment().format('MMMM YYYY');
    };
    static async fullDateTomorrowMMMDYYYY() {
        return moment().add(1,'days').format('MMM D, YYYY');
    };
    static async dateTomorrowMMM_D() {
        return moment().add(1,'days').format('MMM D');
    };
    static async fullDateFiveDaysMMMDYYYY() {
        return moment().add(5,'days').format('MMM D, YYYY');
    };
    static async dateFiveDaysMMM_D() {
        return moment().add(5,'days').format('MMM D');
    };
    static async fullDateMinusDays(number) {
        return moment().subtract(number, 'days').format('MMM D, YYYY');
    };
    static async monthMMMYesterday() {
        return moment().subtract(1, 'days').format('MMM');
    };
    // static async monthMinusDaysAndDisabled(number) {
    //     return moment().subtract(number, 'days').format('"MMM") and @disabled]');
    // };

    static async currentHourh() {
        return moment().format('h')
    };

    static async currentHourhaPlus(hours) {
        return moment().add(hours, 'hours').format('ha')
    };
    static async arrayofhourshaPlus(length, increment) {
        let arrayOfHours = [];
        for (let index = increment; index < length*increment; index+increment) {
            const hour = this.currentHourhaPlus(increment)
            arrayOfHours.push(hour)
        }
        return arrayOfHours
    }

    static async dayNumberToday () {
        let dayNumber = moment().format('D');
        return parseInt(dayNumber);
    }
    static async dayNumberYesterday () {
        let dayNumber = moment().subtract(1, 'days').format('D');
        return parseInt(dayNumber);
    }

    static async monthMMMToday () {
        return moment().format('MMM');
    }

    static mmmFromMMMM (MMMM) {
        return MMMM.slice(0,3);
    }
}
module.exports = MyMomentFunctions;