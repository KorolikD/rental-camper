import { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

// !Підключення
// const [isOpenCalendar, setIsOpenCalendar] = useState(false);
// const toggleCalendar = () => {
//   setIsOpenCalendar(!isOpenCalendar);
// };

// <button onClick={toggleCalendar}>
//   <SvgCustom icon={'calendar'} stroke={theme.colors.main} />
// </button>
// <Calendar isOpen={isOpenCalendar} ooBackClick={setIsOpenCalendar} />

export const Calendar = ({ isOpen, ooBackClick }) => {
  const [startDate, setStartDate] = useState(new Date());

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        ooBackClick(false);
      }
    }; // перевіряємо чи було натиснуто клавішу Escape

    isOpen && document.addEventListener('keydown', handleKeyDown); // якщо календар відкритий, вішаємо слухач на натискання клавіш

    return () => {
      document.removeEventListener('keydown', handleKeyDown); // видаляємо слухач
    };
  }, [isOpen, ooBackClick]); // логіка закриття календаря по натисканні клавіші Escape

  const handleChange = (date) => setStartDate(date);

  const handleDateSelect = (date) => {
    console.log('🤬>>>  date:\n', date); //Дата яку ми вибрали
    ooBackClick(false);
  };
  return (
    <>
      {isOpen && (
        <DatePicker
          selected={startDate}
          onSelect={handleDateSelect}
          onChange={handleChange}
          inline
          onClickOutside={() => {
            ooBackClick(false);
          }}
        />
      )}
    </>
  );
};
