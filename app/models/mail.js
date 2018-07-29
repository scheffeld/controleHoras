module.exports = function(){
    
    this.cadFuncionario = function(funcionario){
        var nodemailer = require("nodemailer");
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'rscheffeld@gmail.com',
                pass: 'cannabis420'
            },
            tls: {
                rejectUnauthorized: false
            },
            dkim: {
                domainName: '@controledehoras.com.br',
                keySelector: '2018'
            }
        });
        
        var mailOptions = {
            from: {
                name: 'Controle de Horas - Adm',
                address: 'controle@teste.com.br'
            },
            to: funcionario.email,
            subject: 'CADASTRO DE USUARIO',
            html: '<p>Olá, seu supervisor já lhe cadastrou no sistema de ponto. Confira os dados inseridos.<br><br><b>Nome: </b>'+funcionario.nome+'<br><b>Cargo: </b>'+funcionario.cargo+'<br><b>Setor: </b>'+funcionario.setor+'<br><b>Supervisor: </b>'+funcionario.superv+'<br><b>Carga Horária: </b>'+funcionario.carga+'<br><b>Email: </b><i>'+funcionario.email+'</i><br></p>'
        }
        
        transporter.sendMail(mailOptions);
    }

    this.updateFuncionario = function(funcionario){
        var nodemailer = require("nodemailer");
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'rscheffeld@gmail.com',
                pass: 'cannabis420'
            },
            tls: {
                rejectUnauthorized: false
            },
            dkim: {
                domainName: '@controledehoras.com.br',
                keySelector: '2018'
            }
        });
        
        var mailOptions = {
            from: {
                name: 'Controle de Horas - Adm',
                address: 'controle@teste.com.br'
            },
            to: funcionario.email,
            subject: 'CADASTRO DE USUARIO',
            html: '<p>Olá, seu supervisor fez alterações no seu cadastro. Confira os novos dados.<br><br><b>Nome: </b>'+funcionario.nome+'<br><b>Cargo: </b>'+funcionario.cargo+'<br><b>Setor: </b>'+funcionario.setor+'<br><b>Supervisor: </b>'+funcionario.superv+'<br><b>Carga Horária: </b>'+funcionario.carga+'<br><b>Email: </b><i>'+funcionario.email+'</i><br></p>'
        }
        
        transporter.sendMail(mailOptions);
    }

    return this;

}