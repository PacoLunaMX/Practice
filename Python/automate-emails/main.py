import smtplib
from email.message import EmailMessage



from_addr = "learningnotes.email@gmail.com"
password="kuoaesqitpyozgim"
to_addrs="f.hinojosa9@hotmail.com"
msg= EmailMessage()

body= """
This Email has been sent with Python.

"""

msg['From']= from_addr
msg['To'] = to_addrs
msg['Subject'] = "Trying emails with Python"
msg.set_content(body)


with smtplib.SMTP('smtp.gmail.com', 587) as smtp:
     
     smtp.starttls()
     smtp.login(from_addr, password)
     smtp.send_message(msg)
