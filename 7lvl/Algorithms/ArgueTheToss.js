function anArgument(...args) {
  
if (args.length===0) return "You didn't give me any arguments."
  else if (args.length===1) return `You gave me 1 argument and it is "${args}".`
  else if (args.length===2) return `You gave me 2 arguments and they are "${args[0]}" and "${args[1]}".`
  else
    {
       const quoted=args.map(a => `"${a}"`);
      let len=args.length
      let newArgs=quoted.slice(0, len-2).join(', ')
      let endArgs=quoted.slice(len-2, len).join(' and ')
      return `You gave me ${len} arguments and they are ${newArgs}, ${endArgs}.`
    }
}