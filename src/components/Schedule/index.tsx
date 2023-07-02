import { useState } from "react";

import { AgendaContainer, AgendaInput, AgendaTitle } from "./styles";

export const Schedule: React.FC = () => {

  type AgendaProps = {
    day: number,
    month: string,
    year: string
  }

  type monthProps = {
      1: string,
      2: string,
      3: string,
      4: string,
      5: string,
      6: string,
      7: string,
      8: string,
      9: string,
      10: string,
      11: string,
      12: string
  }

  const initialValues = {
    day: 1,
    month: 'January',
    year: '2000'
  }

  const [agendaDate, setAgendaDate] = useState<AgendaProps>(initialValues)

  const handleMonth = (month: string): string => {

    const monthObj: monthProps = {
      1: "January",
      2: "February",
      3: "March",
      4: "April",
      5: "May",
      6: "June",
      7: "July",
      8: "August",
      9: "September",
      10: "October",
      11: "November",
      12: "December"
    }
    // @ts-ignore
     return monthObj[+month]
  }

  const handleAgendaDate = (date: string) => {

    const dateDay = date.split("-")[2]
    const dateMonth = date.split("-")[1]
    const dateYear = date.split("-")[0]

    setAgendaDate({
      day: +dateDay,
      month: handleMonth(dateMonth),
      year: dateYear
    })

  }

  return (
    <AgendaContainer>
      <AgendaTitle>{ agendaDate.day } { agendaDate.month } { agendaDate.year }</AgendaTitle>
      <AgendaInput type="date" onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleAgendaDate(event.target.value)} />
    </AgendaContainer>
  );
};
