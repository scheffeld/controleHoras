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

    this.cadPonto = function(ponto, email){
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
            to: email,
            subject: 'CADASTRO DE PONTO',
            html: '<p>Olá '+ ponto.nome +', seu supervisor cadastrou um registro de ponto para você. Confira os dados inseridos.<br><br><b>Data: </b>'+ponto.data_ponto+'<br><b>Feriado: </b>'+ponto.feriado+'<br><b>Entrada 1: </b>'+ponto.entPri+'<br><b>Saida 1: </b>'+ponto.saiPri+'<br><b>Entrada 2: </b>'+ponto.entSeg+'<br><b>Saida 2: </b>'+ponto.saiSeg+'</p>'
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
            subject: 'ALTERAÇÃO DE FUNCIONARIO',
            html: '<p>Olá, seu supervisor fez alterações no seu cadastro. Confira os novos dados.<br><br><b>Nome: </b>'+funcionario.nome+'<br><b>Cargo: </b>'+funcionario.cargo+'<br><b>Setor: </b>'+funcionario.setor+'<br><b>Supervisor: </b>'+funcionario.superv+'<br><b>Carga Horária: </b>'+funcionario.carga+'<br><b>Email: </b><i>'+funcionario.email+'</i><br></p>'
        }
        
        transporter.sendMail(mailOptions);
    }

    this.updatePonto = function(ponto, email){
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
            to: email,
            subject: 'ALTERAÇÃO DE PONTO',
            html: '<p>Olá '+ ponto.nome +', seu supervisor alterou um registro de ponto para você. Confira os dados atualizados.<br><br><b>Nome: </b>'+ponto.nome+'<br><b>Data: </b>'+ponto.data_ponto+'<br><b>Feriado: </b>'+ponto.feriado+'<br><b>Entrada 1</b>'+ponto.entPri+'<br><b>Saida 1</b>'+ponto.saiPri+'<br><b>Entrada 2</b>'+ponto.entSeg+'<br><b>Saida 2</b>'+ponto.saiSeg+'</p>'
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
            subject: 'RELATORIO DE FUNCIONARIO',
            html: '<p>  Olá, este email contem o anexo com todos os funcionarios salvos no sistema.<br>   Este arquivo esta no formato <b>.CSV</b> e deve ser importado através do seu gerenciador de planilhas preferido.<br>  Qualquer dúvida, envie um email para <i>rscheffeld@gmail.com</i></p>',
            attachments: {
                filename: 'funcionarios.csv',
                path: 'C:/Users/ro_scheffeld/Downloads/controleHoras/app/public/csv/funcionarios.csv'
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
            subject: 'RELATORIO DE PONTO',
            html: '<p>  Olá, este email contem o anexo com todos os pontos registrados no sistema.<br><br>   Este arquivo esta no formato <b>.CSV</b> e deve ser importado através do seu gerenciador de planilhas preferido.<br><br>  Qualquer dúvida, envie um email para <i>rscheffeld@gmail.com</i></p>',
            attachments: {
                filename: 'pontos.csv',
                path: 'C:/Users/ro_scheffeld/Downloads/controleHoras/app/public/csv/pontos.csv'
            }
        }
        
        transporter.sendMail(mailOptions);
    }

    this.deleteFuncionario = function(funcionario){
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
            to: funcionario.email,
            subject: 'EXCLUSÃO DE FUNCIONARIO',
            html: '<p>  Olá <b>'+funcionario.nome+'</b>, seu supervisou exclui seu cadastro do nosso sistema.<br><br>Apartir de hoje, você não recebera mais emails com informações sobre pontos ou alterações de cadastros, a menos que seu supervisor te cadastre novamente.<br><br>Até mais, foi bom te-lo(a) conosco.'
        }
        
        transporter.sendMail(mailOptions);
    }

    this.deletePonto = function(ponto, email){
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
            subject: 'EXCLUSÃO DE PONTO',
            html: '<p>  Olá <b>'+ponto.nome+'</b>, seu supervisou exclui um dos seus registros de ponto do nosso sistema. Segue os dados exluidos:<br><br><b>Data: </b>'+ponto.data_ponto+'<br><b>Feriado: </b>'+ponto.feriado+'<br><b>Entrada 1: </b>'+ponto.entPri+'<br><b>Saida 1: </b>'+ponto.saiPri+'<br><b>Entrada 2: </b>'+ponto.entSeg+'<br><b>Saida 2: </b>'+ponto.saiSeg+'</p>'
        }
        
        transporter.sendMail(mailOptions);
    }

    return this;

}