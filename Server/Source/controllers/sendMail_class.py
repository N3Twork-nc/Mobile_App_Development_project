import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

class Maill:
    def __init__(self,smtp_host= 'smtp.gmail.com', smtp_port = 587,smpt_username = 'cloudkeeper4@gmail.com',smtp_password = 'pygr pjpa cxht wgel'):

        self.smtp_host=smtp_host
        self.smtp_port=smtp_port
        self.smpt_username=smpt_username
        self.smtp_password=smtp_password
    #Create MIMEMuiltipart object

    def sendOTP(self,toEmail,OTP):
        message= MIMEMultipart()
        message['from']=self.smpt_username
        message['to']=toEmail
        message['Subject'] = 'Tiêu đề email'
        body = f"""
            <p>Đây là nội dung mã xác thực:{OTP} </p>
        """
        html_content = MIMEText(body, 'html')
        message.attach(html_content)
        try:
            server = smtplib.SMTP(self.smtp_host,self.smtp_port)
            server.starttls()
            server.login(self.smpt_username,self.smtp_password)
            server.send_message(message)
            server.quit()
        except Exception as ex:
            print('Error sending forgot mail: ', str(ex))
