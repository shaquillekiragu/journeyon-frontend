export function getTodaysDate(): string {
  const today: Date = new Date();

  const day: string = `${
    today.getDate() < 10 ? `0${today.getDate()}` : `${today.getDate()}`
  }`;
  const month: string = `${
    today.getMonth() + 1 < 10
      ? `0${today.getMonth() + 1}`
      : `${today.getMonth() + 1}`
  }`;
  const year: string = `${today.getFullYear()}`;

  return `${day}-${month}-${year}`;
}
