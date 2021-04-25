const fetch = require('node-fetch')

const wrapper = {}

class compiler {
  constructor(code = String, compiler = String, callback = Function) {
    this.code = code
    this.compiler = compiler
    this.clbk = callback
    this.avaible = true
  }
  run() {
    if (!this.avaible) {
      console.log('uncomplete input.')
      return
    }
    const req = {
      'code': this.code,
      'compiler': this.compiler
    }
    fetch("https://wandbox.org/api/compile.json", {
      method: 'POST',
      body: JSON.stringify(req),
      headers: { 'Content-Type': 'application/json' }
    }).then(res => res.json()).then(this.clbk ? this.clbk : console.log).catch(err => {
      console.log('invalid input')
    })
  }
}

class loadstring {
  constructor(jscode = String, clbk = Function) {
    this.code = jscode
    this.clbk = clbk
    this.ready = true
  }
  run() {
    if (!this.ready) {
      console.log('uncomplete eval input.')
      return
    }
    try {
      eval(this.code)
    } catch(err) {
      if (this.clbk) {
        this.clbk(err)
      } else {
        console.log(err)
      }
    }
  }
}

wrapper.compile = compiler
wrapper.eval = loadstring

module.exports = wrapper
