import React, { useState } from 'react'
import { enGB } from 'date-fns/locale'
import { DateRangePicker, START_DATE, END_DATE } from 'react-nice-dates'
import 'react-nice-dates/build/style.css'
import classes from './DatePickerCom.module.css'
function DatePickerCom() {
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState()
  return (
    <DateRangePicker
      startDate={startDate}
      endDate={endDate}
      onStartDateChange={setStartDate}
      onEndDateChange={setEndDate}
      minimumDate={new Date()}
      minimumLength={1}
      format='dd MMM yyyy'
      locale={enGB}
    >
      {({ startDateInputProps, endDateInputProps, focus }) => (
        <div className={classes.DateRange}>
          <input
            className={classes.DateRangeInput  + " " + classes.StartInput + " " +'input' + (focus === START_DATE ? ' -focused' : '')}
            {...startDateInputProps}
            placeholder='Start date'
          />
          <span className={classes.Divider}><i class="fas fa-minus"></i></span>
          <input
            className={classes.DateRangeInput + " "+ classes.EndInput + " " +'input' + (focus === END_DATE ? ' -focused' : '')}
            {...endDateInputProps}
            placeholder='End date'
          />
        </div>
      )}
    </DateRangePicker>
  )
}
export default DatePickerCom