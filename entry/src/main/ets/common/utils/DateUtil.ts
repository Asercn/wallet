class DateUtil {
  formatDate(num: number): string {
    let date = new Date(num)
    let year = date.getFullYear()
    let month = date.getMonth() + 1
    let day = date.getDate()
    let m = month < 10 ? '0' + month : month
    let d = day < 10 ? '0' + day : day
    return `${year}/${m}/${d}`
  }

  formatDateMonth(num: number): string {
    let date = new Date(num)
    let year = date.getFullYear()
    let month = date.getMonth() + 1
    let day = date.getDate()
    let m = month < 10 ? '0' + month : month
    let d = day < 10 ? '0' + day : day
    return `${year}/${m}`
  }

  formatDateMore(num: number): string {
    let date = new Date(num)
    let year = date.getFullYear()
    let month = date.getMonth() + 1
    let day = date.getDate()
    let hours = ('0' + date.getHours()).slice(-2);
    var minutes = ('0' + date.getMinutes()).slice(-2);
    var seconds = ('0' + date.getSeconds()).slice(-2);
    let m = month < 10 ? '0' + month : month
    let d = day < 10 ? '0' + day : day
    return `${year}/${m}/${d} ${hours}:${minutes}:${seconds}`
  }

  beginTimeOfDay(date: Date) {
    let d = new Date(date.getFullYear(), date.getMonth(), date.getDate())
    return d.getTime()
  }


  /**
   *
   * @param date
   * @returns 获取本周的第一天
   */
  getWeek(date: Date): number {
    let today: any = new Date(date)
    // 获取到本月的第一天
    let firstDayOfMonth: any = new Date(today.getFullYear(), today.getMonth(), 1);
    // 获取本月的第一周的第一天（如果本月的第一天不是周一，则向前推移直到找到周一）
    while (firstDayOfMonth.getDay() !== 1) {
      firstDayOfMonth.setDate(firstDayOfMonth.getDate() - 1);
    }

    // 计算今天距离本月第一周的天数
    let daysSinceFirstWeek: number = Math.floor((today - firstDayOfMonth) / (1000 * 60 * 60 * 24));
    // 计算今天是本月的第几周
    var weekNumber: number = Math.ceil((daysSinceFirstWeek + 1) / 7);
    return weekNumber;

  }

  getTodayRange(day?:Date): {
    start: number,
    end: number
  } {
    let today = null
    if (day) {
      today = day
    }else{
      today = new Date();
    }
    const start = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 0, 0, 0).getTime(); // 今日 0 点
    const end = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 23, 59, 59).getTime(); // 今日 23:59:59
    return {
      start,
      end
    };
  }

  // 获取本周的第一天和最后一天的时间戳
  getWeekStartAndEndTimestamps() {
    let today = new Date();
    let startOfCurrentWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - today.getDay());
    let endOfCurrentWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() + (7 - today.getDay()));
    return {
      startTimestamp: startOfCurrentWeek.getTime(),
      endTimestamp: endOfCurrentWeek.getTime()
    };
  }

  // 获取本月的第一天和最后一天的时间戳
  getMonthStartAndEndTimestamps() {
    let today = new Date();
    let startOfCurrentMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    let endOfCurrentMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);
    return {
      startTimestamp: startOfCurrentMonth.getTime(),
      endTimestamp: endOfCurrentMonth.getTime()
    };
  }


  // 获取本年的第一天和最后一天的时间戳
  getYearStartAndEndTimestamps() {
    let today = new Date();
    let startOfCurrentYear = new Date(today.getFullYear(), 0, 1);
    let endOfCurrentYear = new Date(today.getFullYear(), 11, 31);
    return {
      startTimestamp: startOfCurrentYear.getTime(),
      endTimestamp: endOfCurrentYear.getTime()
    };
  }

  //获取本月到指定日期为止还剩多少天
  getRestDayOfMonth(date: Date): number {
    let today = new Date(date)
    //获取本月第一天
    let firstDateOfMonth = new Date(today.getFullYear(), today.getMonth(), 1).getTime()
    //获取本月最后一天
    let LastDateOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 1).getTime()
    let yesterday: number
    if (today.getTime() < firstDateOfMonth + (1000 * 60 * 60 * 24)) { //表示今天是每月的一号
      yesterday = new Date(today.getFullYear(), today.getMonth(), 1).getTime()
    } else {
      yesterday = new Date(today.getFullYear(), today.getMonth(), today.getDate()).getTime()
    }
    //获取前一天到月末的时间
    let datesOfMonth: number = Math.ceil((LastDateOfMonth - yesterday) / (1000 * 60 * 60 * 24));

    return datesOfMonth
  }
}

let dateUtil = new DateUtil()

export default dateUtil as DateUtil

