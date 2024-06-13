"use client";
import { DateInput } from "@nextui-org/date-input";
import { CalendarDate } from "@internationalized/date";
import { I18nProvider } from "@react-aria/i18n";

export default function Home() {
  const handleDateChange = (date) => {
    console.log(date);
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <I18nProvider locale="pt-br">
        <DateInput
          label={"Birth date"}
          placeholderValue={new CalendarDate(1995, 11, 6)}
          className="max-w-sm"
          onChange={handleDateChange}
        />
      </I18nProvider>
    </main>
  );
}
