export const sleep = (seg: number) => {
  return new Promise((resolve) => setTimeout(resolve, seg * 1000))
}
