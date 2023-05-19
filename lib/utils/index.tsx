export function formatDate(datestring: string, options: any) {
  const { format } = new Intl.DateTimeFormat('en-US', options)
  return format(new Date(datestring))
}
