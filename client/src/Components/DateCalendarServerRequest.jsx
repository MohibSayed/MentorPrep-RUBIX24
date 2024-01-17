import * as React from 'react';
import dayjs from 'dayjs';
import Badge from '@mui/material/Badge';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { PickersDay } from '@mui/x-date-pickers/PickersDay';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { DayCalendarSkeleton } from '@mui/x-date-pickers/DayCalendarSkeleton';
import slotData from './slotsData'; // Import your slot data

function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

/**
 * Mimic fetch with abort controller https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort
 * ⚠️ No IE11 support
 */
function fakeFetch(date, { signal }) {
  return new Promise((resolve, reject) => {
    const timeout = setTimeout(() => {
      const daysInMonth = date.daysInMonth();
      const daysToHighlight = [1, 2, 3].map(() => getRandomNumber(1, daysInMonth));

      resolve({ daysToHighlight });
    }, 500);

    signal.onabort = () => {
      clearTimeout(timeout);
      reject(new DOMException('aborted', 'AbortError'));
    };
  });
}

const initialValue = dayjs('2022-04-17');

function ServerDay(props) {
  const { day, outsideCurrentMonth, ...other } = props;

  // Find slots for the given date from the slotData
  const slotsForDate = slotData.find((slot) => dayjs(slot.date).isSame(day, 'day'));
  const availableSlots = slotsForDate ? slotsForDate.slots : [];

  const slotCount = availableSlots.length;

  return (
    <div>
      <PickersDay {...other} outsideCurrentMonth={outsideCurrentMonth} day={day} />
      {slotCount > 0 && (
        <div style={{ textAlign: 'center', color: 'blue', fontSize:'10px' }}>
          {slotCount} {slotCount !== 1 ? 's' : ''}
        </div>
      )}
    </div>
  );
}



export default function DateCalendarServerRequest() {
  const requestAbortController = React.useRef(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [highlightedDays, setHighlightedDays] = React.useState([1, 2, 15]);

  const fetchHighlightedDays = (date) => {
    const controller = new AbortController();
    
    // Find slots for the given date from the slotData
    const slotsForDate = slotData.find((slot) => dayjs(slot.date).isSame(date, 'day'));

    if (slotsForDate) {
      const { slots } = slotsForDate;
      setHighlightedDays(slots);
      setIsLoading(false);
    } else {
      // If no slots found for the date, clear the highlighted days
      setHighlightedDays([]);
      setIsLoading(false);
    }
    console.log(slotData);
    requestAbortController.current = controller;
  };

  React.useEffect(() => {
    fetchHighlightedDays(initialValue);
    // abort request on unmount
    return () => requestAbortController.current?.abort();
  }, []);

  const handleMonthChange = (date) => {
    if (requestAbortController.current) {
      // make sure that you are aborting useless requests
      // because it is possible to switch between months pretty quickly
      requestAbortController.current.abort();
    }

    setIsLoading(true);
    setHighlightedDays([]);
    fetchHighlightedDays(date);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar
        defaultValue={initialValue}
        loading={isLoading}
        onMonthChange={handleMonthChange}
        renderLoading={() => <DayCalendarSkeleton />}
        slots={{
          day: ServerDay,
        }}
        slotProps={{
          day: {
            highlightedDays,
          },
        }}
        
        
      />
    </LocalizationProvider>
  );
}