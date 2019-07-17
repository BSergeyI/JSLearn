 function subValid() {
        	let name_pat = /[a-z]/;
        	let str_name = document.jsform.jsname.this.value;
        	console.log(str_name);
        	if (!name_pat.test(str_name)){
        		console.log('error');
        		this.border.color = "red";
        		this.innerText = "Имя введено с ошибкой";
        	}
        }
        // this is new comment
        	