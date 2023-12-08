import moment from "moment"
const dateAndTime = () => {
    const currentDateWithTime = moment();
    return currentDateWithTime.format('dddd, MMMM Do YYYY, h:mm:ss A')
}

export { dateAndTime }