const conflictingData = {
  to: 'recipient@example.org',
  from: 'sender@example.org',
  subject: 'Hello world',
  text: 'Hello plain world!',
  dynamicTemplateData: 'Some fancy template data'
}

function dynamicTemplateUnitTest(email){
  const message = 'This email can be sent';
try {
  if ('text' in email && 'dynamicTemplateData' in email) 
  throw 'text and dynamicTemplateData fields cannot both have values';
  if ('html' in email && 'dynamicTemplateData' in email)
  throw 'html and dynamicTemplateData fields cannot both have values';
  }
finally {c
  return message;
  }
}

console.log(test(conflictingData))

function adder(a, b){
  c = a + b ;
  return c
}