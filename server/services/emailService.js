var nodemailer = require('nodemailer');

exports.sendEmail = function(from, sendTo, subject, content){
    const params = {
        host: 'notes853DEV.johnsonelectric.com', // 设置服务
        port: 25, // 端口
        // sercure: true, // 是否使用TLS，true，端口为465，否则其他或者568
        // auth: {
        //     user: 'bingdeng.tan@johnsonelectric.com', // 邮箱和密码
        //     pass: 'password1008'
        // }
    }

    const mailOptions = {
        from: 'bingdeng.tan@gmail.com', // 发送邮箱
        to: sendTo, // 接受邮箱
        subject: subject, // 标题
        html: content // 内容
    }
    console.log(JSON.stringify(mailOptions))
    const transporter = nodemailer.createTransport(params)
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }
      console.log('Message %s sent: %s', info.messageId, info.response);
    })
}