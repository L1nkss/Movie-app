const getRatingClass = (vote: number): string => {
  let result;

  if (vote > 0 && vote <= 5) {
    result = "low";
  }

  if (vote > 5 && vote <= 8) {
    result = "medium";
  }

  if (vote > 8) {
    result = "high";
  }

  return `film-card__rating--${result}-rate`;
};

const compareDates = (first: string, second: string) => {
  return new Date(second) > new Date(first);
};

export { getRatingClass, compareDates };
