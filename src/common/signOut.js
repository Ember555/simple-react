export default () => {
  sessionStorage.clear()
  window.location.href = `${window.location.origin}/${process.env.BASE_PATH}`
}
