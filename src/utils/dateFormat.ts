export const formatDateForURL = (dateStr: string) => dateStr.replace(/ /g, "-");
export const formatDateFromURL = (dateStr: string) =>
  dateStr.replace(/-/g, " ");
