import { DateTimeFormatOptions } from "intl";
import { useEffect, useState } from "react";
import { SContainer } from "./styles";

const TimerDaily = () => {
  const [date, setDate] = useState<string>();

  const dateNow = () => {
    const options: DateTimeFormatOptions = {
      weekday: "short",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const getDate = new Date();

    const formattedDate = getDate.toLocaleDateString("pt-BR", options);

    const capitalizedDate = formattedDate.replace(/^\w/, (c) =>
      c.toUpperCase()
    );
    const finalDate = capitalizedDate.replace(".", "");
    setDate(finalDate);
  };

  useEffect(() => {
    dateNow();
  }, []);

  return (
    <SContainer>
      <p>{date}</p>
    </SContainer>
  );
};

export default TimerDaily;
