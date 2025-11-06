function vaporcode(string) {
  return string.toUpperCase().split('').filter(str=>str!==' ').join('  ')
}