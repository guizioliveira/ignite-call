import { useState } from 'react'
import Calendar from '@/components/Calendar'
import {
  Container,
  TimePicker,
  TimePickerHeader,
  TimePickerItem,
  TimePickerList,
} from './styles'

export function CalendarStep() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const isDateSelected = !!selectedDate

  return (
    <Container isTimePickerOpen={isDateSelected}>
      <Calendar selectedDate={selectedDate} onDateSelected={setSelectedDate} />

      {isDateSelected && (
        <TimePicker>
          <TimePickerHeader>
            Terça-feira <span>20 de julho</span>
            <TimePickerList>
              <TimePickerItem>08:00h</TimePickerItem>
              <TimePickerItem>08:00h</TimePickerItem>
              <TimePickerItem>08:00h</TimePickerItem>
              <TimePickerItem>08:00h</TimePickerItem>
              <TimePickerItem>08:00h</TimePickerItem>
              <TimePickerItem>08:00h</TimePickerItem>
              <TimePickerItem>08:00h</TimePickerItem>
              <TimePickerItem>08:00h</TimePickerItem>
              <TimePickerItem>08:00h</TimePickerItem>
              <TimePickerItem>08:00h</TimePickerItem>
              <TimePickerItem>08:00h</TimePickerItem>
              <TimePickerItem>08:00h</TimePickerItem>
              <TimePickerItem>08:00h</TimePickerItem>
              <TimePickerItem>08:00h</TimePickerItem>
              <TimePickerItem>08:00h</TimePickerItem>
            </TimePickerList>
          </TimePickerHeader>
        </TimePicker>
      )}
    </Container>
  )
}
