// Calendar.tsx

import { Scheduler } from "../lib";
import { EVENTS, RESOURCES } from "./events";
import { useRef } from "react";
import { SchedulerRef } from "../lib/types";
import { ru } from "date-fns/locale";
import React from "react";

function App() {
  const calendarRef = useRef<SchedulerRef>(null);

  return (
    <Scheduler
      ref={calendarRef}
      resources={RESOURCES}
      events={EVENTS}
      locale={ru}
      hourFormat="24"
      day={{
        startHour: 7,
        endHour: 23,
        step: 60,
        navigation: true,
      }}
      week={{
        weekDays: [0, 1, 2, 3, 4, 5],
        weekStartOn: 6,
        startHour: 7,
        endHour: 23,
        step: 60,
        navigation: true,
        disableGoToDay: false,
      }}
      translations={{
        navigation: {
          month: "Месяц",
          week: "Неделя",
          day: "День",
          today: "Сегодня",
          agenda: "Список",
        },
        form: {
          addTitle: "Добавить событие",
          editTitle: "Редактировать событие",
          confirm: "Подтвердить",
          delete: "Удалить",
          cancel: "Отмена",
        },
        event: {
          title: "Событие",
          start: "Начало",
          end: "Конец",
          allDay: "Весь день",
        },
        validation: {
          required: "*Обязательно для заполнения",
          invalidEmail: "Неверный Email",
          onlyNumbers: "Использовать только цифры",
          min: "Минимум 3 символа",
          max: "Максимум {{max}} символов",
        },
        moreEvents: "Еще...",
        noDataToDisplay: "Нет событий",
        loading: "Загрузка",
      }}
    />
  );
}

export default App;
