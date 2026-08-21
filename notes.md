## Note 1

So I was reading through the code claude gave me and it set up nodemailer for me.

Nodemailer is great for making your website send emails FROM your email address on your behalf but it isn't so good for RECEIVING emails.

While using Jasmine to write tests for this backend emailing infrastructure, I realized that using nodemailer this way was a mistake.

So, what I decided to do is to switch from using nodemailer to using [FormSubmit](https://formsubmit.co/) which is far better suited for making forms send their information as an email to a specified email address. 

It is very easy and straightforward to use and doesn't actually need backend code to work.

This might actually render my backend code useless but I'll refactor what I have right now to make it work well with this new configuration.
I'm really learning a lot while using claude code. PLUS, now I'm actually writing test cases for my code which is great!!!


## Note 2
While working on the test code, I realised that claude has no idea how to even set up the transporter with a Gmail SMTP anyway. Bro actualy just guessed everything and got most of it wrong.