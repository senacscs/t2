<?php

    $nome = addslashes($_POST['nome']);
    $email = addslashes($_POST['email']);
    $telefone = addslashes($_POST['telefone']);

    $para = "wesleydasilveira27@gmail.com";
    $assunto = "Coleta de Dados - Portifólio"

    $corpo = "Nome: ".$nome."\n"."E-mail ".$email."\n"."Telefone "$telefone;
    
    $cabeca = "From 03089168081@senacrs.edu.br"."\n"."Reply-to: ".$email."\n"."X-Mailer:PHP/".phpversion();

    if(mail($para,$assunto,$corpo,$cabeca)){
        echo("E-mail enviado com sucesso!");
    }else{
        echo("Houve um erro ao enviar o E-mail!");
    }
?>