var nodemailer = require('nodemailer');

exports.sendEmail = function(){
    const params = {
        host: 'smtp.163.com', // 设置服务
        port: 465, // 端口
        sercure: true, // 是否使用TLS，true，端口为465，否则其他或者568
        auth: {
            user: 'bingdengtan@163.com', // 邮箱和密码
            pass: 'je123456'
        }
    }

    const mailOptions = {
        from: 'bingdengtan@163.com', // 发送邮箱
        to: 'bingdeng.tan@johnsonelectric.com', // 接受邮箱
        subject: 'Email Notification Testing', // 标题
        html: '<b>This is a schedule email</b>' // 内容
    }

    const transporter = nodemailer.createTransport(params)
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }
      console.log('Message %s sent: %s', info.messageId, info.response);
    })
}