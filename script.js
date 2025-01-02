// let result = {
    
//   "email": "support@emailvalidation.io",
//   "user": "support",
//   "tag": "",
//   "domain": "emailvalidation.io",
//   "smtp_check": true,
//   "mx_found": true,
//   "did_you_mean": "",
//   "role": true,
//   "disposable": false,
//   "score": 0.64,
//   "state": "deliverable",
//   "reason": "valid_mailbox",
//   "free": false,
//   "format_valid": true,
//   "catch_all": null

// };

btn.addEventListener("click", async(e) => {
    e.preventDefault()
  let email = document.getElementById("input");
  let value = email.value;
  results.innerHTML = `<div class="loader"></div>`
  let str = ``;
  const key = `ema_live_kZcoxrKZX69TU7rStcmeXvyjfwk7Kpq4MO0xmpVy`;
  let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${value}`;
  
  let res = await fetch(url)
  let result = await res.json()
  for (const key of Object.keys(result)) {
    if(result[key] !== " " && result[key] !== " " )
    str += `<div>${key} : ${result[key]}</div>`;
  }
  
  results.innerHTML = str;
});
