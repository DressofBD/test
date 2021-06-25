let inp = $('[type=text]'),
    btn = $('[type=submit]')
btn.prop('disabled', true)

inp.on('input', () => {
  let empty = []
  inp.map(v => empty.push(inp.eq(v).val()))
  btn.prop('disabled', empty.includes(''))
})


