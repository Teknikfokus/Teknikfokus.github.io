<template>
    <div id="calendar">
        <div class="headers">
            <div class="weekday d-none d-md-block" v-for="weekday in weekdays.slice(0,5)" :key="weekday">
                {{weekday}}
            </div>
            <div class="weekday d-block d-md-none" v-for="weekday in abbreviatedWeekdays.slice(0,5)" :key="weekday">
                {{weekday}}
            </div>
        </div>
        <div class="calendar">
            <div class="week" v-for="week in weeks" :key="week.weekIndex">
                <Day :info="day" v-for="day in week.days.slice(0,5)" :key="day.date.day+'/'+day.date.month" @select="handleSelect"/>
            </div>
        </div>
    </div>
</template>

<script>
import Day from './Day';

export default {
    name: "Calendar",
    props: {
        events: Array
    },
    components: {
        Day
    },
    data() {
        return {
            weekdays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            abbreviatedWeekdays: ["Mon", "Tue", "Wen", "Thu", "Fri", "Sat", "Sun"],
            daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
            fairDate: {
                day: 17,
                month: 2
            },
            defaultStartingDate: new Date(2021, 1, 1)
        }
    },
    methods: {
        handleSelect(event) {
            this.$emit('select', event)
        },
    },
    computed: {
        weeks() {
            const weeks = [];

            const millisecondsInDay = 86400000 //24*60*60*1000
            let startDate = new Date(this.defaultStartingDate.getTime() - (this.defaultStartingDate.getDay()-1)*millisecondsInDay)
            let numberOfWeeks = 3;
            if (this.events.length > 0 ) {
                let firstEventDate = new Date(this.events[0].startTime)
                startDate = new Date(firstEventDate.getTime() - (firstEventDate.getDay()-1)*millisecondsInDay)
                let lastEventDate = new Date(this.events[this.events.length-1].endTime)
                let endDate = new Date(lastEventDate.getTime() + (7-lastEventDate.getDay()+1)*millisecondsInDay)
                numberOfWeeks = Math.round((endDate.getTime()-startDate.getTime())/(7*millisecondsInDay))
            } 

            let date = {
                day: startDate.getDate(),
                month: startDate.getMonth()+1,
                year: startDate.getFullYear(),
            }
            let incrementDate = () => {
                date.day++;
                if (date.day > this.daysInMonth[date.month-1]) {
                    date.day = 1;
                    date.month = (date.month+1)%12
                    if (date.month === 0) date.year++;
                }
            }

            for (let weekIndex = 0; weekIndex < numberOfWeeks; weekIndex++) {
                const week = {
                    days: [],
                    index: weekIndex
                };
                for (let dayIndex = 0; dayIndex < this.weekdays.length; dayIndex++) {
                    const events = this.events.filter(e => (e.date.day == date.day && e.date.month == date.month))
                    events.sort((a,b) => a.startTime-b.startTime)
                    week.days.push({
                        events: events,
                        date: {...date}
                    })
                    incrementDate()
                }
                weeks.push(week)
            }
            return weeks;
        },
    }
}
</script>


<style scoped>
#calendar {
    border: 3px solid var(--footer-color);
}
.headers {
    display: flex;
    background: var(--primary);
    padding: 15px 0;
    text-align: center;
    color: white;
    font-weight: 600;
    font-size: 1.5rem;
}
.weekday {
    flex-grow: 1;
    width: 0;
    /* display: inline-block; */
}
.week {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
}

.week:first-child #day {
    border-top: none;
}

</style>