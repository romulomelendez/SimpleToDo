import { useState } from "react";

import { AgendaContainer, AgendaInput, AgendaTitle } from "./styles";

export const Schedule: React.FC = () => {

  type AgendaProps = {
    day: string,
    month: string,
    year: string
  }

  const [agendaDate, setAgendaDate] = useState<AgendaProps>();

  const handleMonth = (month: string): string => {

    const monthObj = {
      "01": "January",
      "02": "February",
      "03": "March",
      "04": "April",
      "05": "May",
      "06": "June",
      "07": "July",
      "08": "August",
      "09": "September",
      "10": "October",
      "11": "November",
      "12": "December",
    }
      return monthObj[month]
  }

  const handleAgendaDate = (date: string) => {

    const dateDay = date.split("-")[2]
    const dateMonth = date.split("-")[1]
    const dateYear = date.split("-")[0]

    setAgendaDate({
      day: dateDay,
      month: handleMonth(dateMonth),
      year: dateYear
    })

  }

  return (
    <AgendaContainer>
      <AgendaTitle>{ agendaDate.day } { agendaDate.month } { agendaDate.year }</AgendaTitle>
      <AgendaInput type="date" onChange={(event: any) => handleAgendaDate(event.target.value)} />
    </AgendaContainer>
  );
};
