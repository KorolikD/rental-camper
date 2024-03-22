// import { Container } from './FirstPage.styled';
import { Button } from '../../components/Button';
import { ButtonLoadMore } from '../../components/ButtonLoadMore';
import { LocationInput } from '../../components/LocationInput';
import { Input } from '../../components/Input';
import { Categories } from '../../components/Categories';
import data from '../../campers.json';
// import { CalendarInputWrap, CalendarWrap } from './FirstPage.styled';
import { useState } from 'react';
import { theme } from '../../styles';
import SvgCustom from '../../components/SvgCustom/SvgCustom';
// import Calendar from '../../components/Calendar/Calendar';
import { ExampleCalendar } from '../../components/Calendar copy';
// import { Calendar } from '../../components/Calendar/Calendar';
console.log('🤬>>>  data:\n', data);

const FirstPage = () => {
  const [isOpenCalendar, setIsOpenCalendar] = useState(false);

  // const [date, setDate] = useState(`10/10/2016`);

  return (
    <div>
      <Button>Custom Btn</Button>
      <ButtonLoadMore />
      <br />
      <Input
        type={'text'}
        name={'name'}
        placeholder={'Name'}
        $width={'400px'}
        $height={'56px'}
      />
      <LocationInput />
      <Categories camper={data[0]} />

      {/* // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}

      <button onClick={() => setIsOpenCalendar(!isOpenCalendar)}>
        <SvgCustom icon={'calendar'} stroke={theme.colors.main} />
      </button>

      <ExampleCalendar
        isOpen={isOpenCalendar}
        ooBackClick={setIsOpenCalendar}
      />

      {/* 
      <CalendarInputWrap>
        <button onClick={() => setIsOpenCalendar(true)}>
          <SvgCustom icon={'calendar'} stroke={theme.colors.main} />
        </button>

        <CalendarWrap>
          <Calendar
            date={date}
            setDate={setDate}
            // maxDate={getMaxDate()}
            isOpen={isOpenCalendar}
            // setIsOpen={setIsOpenCalendar}
          />
        </CalendarWrap>
      </CalendarInputWrap> */}
    </div>
  );
};

export default FirstPage;
