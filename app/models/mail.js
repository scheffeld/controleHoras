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

    this.relatorioFuncionarios = function(email){
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
                name: 'Controle de Horas - ADM ',
                address: 'controle@teste.com.br'
            },
            to: email,
            subject: 'RELATORIOS',
            html: '<p>  Olá, este email contem o anexo com todos os funcionarios salvos no sistema.<br>   Este arquivo esta no formato <b>.CSV</b> e deve ser importado através do seu gerenciador de planilhas preferido.<br>  Qualquer dúvida, envie um email para <i>rscheffeld@gmail.com</i></p>',
            attachments: {
                filename: 'funcionarios.csv',
                path: 'C:/Users/ro_scheffeld/Downloads/controleHoras/funcionarios.csv'
            }
        }
        
        transporter.sendMail(mailOptions);
    }

    this.relatorioPontos = function(email){
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
                name: 'Controle de Horas - ADM ',
                address: 'controle@teste.com.br'
            },
            to: email,
            subject: 'RELATORIOS',
            html: '<p>  Olá, este email contem o anexo com todos os pontos registrados no sistema.<br><br>   Este arquivo esta no formato <b>.CSV</b> e deve ser importado através do seu gerenciador de planilhas preferido.<br><br>  Qualquer dúvida, envie um email para <i>rscheffeld@gmail.com</i></p>',
            attachments: {
                filename: 'pontos.csv',
                path: 'C:/Users/ro_scheffeld/Downloads/controleHoras/pontos.csv'
            }
        }
        
        transporter.sendMail(mailOptions);
    }



    return this;

}