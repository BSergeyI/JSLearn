
 // Здесь надо заменить одинарные кавычки двойными, без нарушения грамматики.
//    Задание 1. и Задание 2. тут же.
    const str = "One: 'Hi Mary.' Two: 'Oh, hi.'\n" +
    "One: 'How are you doing?'\n " +
    "  Two: 'I'm doing alright. How about you?'\n" +
    "    One: 'Not too bad. The weather is great isn't it?'\n" +
    "    Two: 'Yes. It's absolutely beautiful today.'\n" +
    "    One: 'I wish it was like this more frequently.'\n" +
    "    Two: 'Me too.'\n" +
    "    One: 'So where are you going now?'\n" +
    "    Two: 'I'm going to meet a friend of mine at the department store.'\n" +
    "    One: 'Going to do a little shopping?'\n" +
    "    Two: 'Yeah, I have to buy some presents for my parents.'\n" +
    "    One: 'What's the occasion?'\n" +
    "    Two: 'It's their anniversary.'\n" +
    "    One: 'That's great. Well, you better get going. You don't want to be late.'\n" +
    "    Two: 'I'll see you next time.'\n" +
    "    One: 'Sure. Bye.'";

    
    let strWcommas = str.replace(/([^a-z])'/ig, function (substr,p1) {
    	let instr = `${p1}\"`;
	return instr;
    });
    console.log(strWcommas);
  