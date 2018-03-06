function temParam(param) {
  return process.argv.indexOf(param) !== -1
}

if (temParam('--producao')) {
  console.log("Parametro passado")
} else {
  console.log('Parametr nao passado')
}
