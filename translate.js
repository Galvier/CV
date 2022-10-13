$(function(){
    $(".br").click(function(){
        //Cabeçalho
        $(".menu").children().eq(0).children().text("Início");
        $(".menu").children().eq(1).children().text("Sobre");
        $(".menu").children().eq(2).children().text("Skills");
        $(".menu").children().eq(3).children().text("Qualificações");
        $(".menu").children().eq(4).children().text("Portfólio");
        $(".menu").children().eq(5).children().text("Contato");
        $(".language-selected").text("PT-BR");
        $(".language-selected").removeClass('change-en').addClass("change-br");        
        $(".about .title").removeClass("change-en");
        $(".skills .title").removeClass("change-en");
        $(".qualification .title").removeClass("change-en");
        $(".portfolio .title").removeClass("change-en");
        $(".contact .title").removeClass("change-en");
        //Seção
        $(".text-1").text("Olá, bem vindo ao meu site!");
        $(".text-3").text("").append("<span>" + "Desenvolvedor" +'</span>'+ ' web');
        //Sobre 
        $(".about .title").text("Sobre mim");
        $(".about .text").text("").append("Olá, me chamo Jonathan e sou" + "<span>" + " Desenvolvedor" +'</span>'+ ' web');
        $(".typing-2").text("Desenvolvedor");
        $(".about .right").children().eq(1).text("Atualmente estou em transição para a carreira de DEV, mas sempre tive contato como fuçador de tecnologia desde o Windows 98. Finalmente consegui um tempo para me especializar e dedicar e aqui estou aprendendo a ser um desenvolvedor completo! Esse é meu primeiro grande projeto que consegui consolidar as principais linguagens que aprendi até agora. Espero que goste do meu humilde portifolio.");
        $(".about .right").children().eq(3).text("Considere isso uma pequena introdução breve sobre mim e dos meus projetos, você pode conferir um pouco mais clicando no meu currículo completo abaixo, ou veja um pouco mais na aba “Qualificações”!");
        $(".about .right a").text("Currículo");
        $(".about .right a").eq(1).text("Certificados");
        //Skills
        $(".skills .title").text("Skills");
        $(".skills .text").text("Minhas habilidades");
        $(".skills .left").children().eq(1).text("Alinhei aqui, as linguagens e tecnologias que tenho mais experiência. Sou fascinado pelo resultado imediato, então escolhi inicialmente começar com a web e linguagens relacionadas (como JavaScript, por ser uma linguagem full stack) e depois me aventurar em linguagens Back-end. Além de grande potência, essas tecnologias permitiram mensurar meu aprendizado com mais velocidade além de fomentar mais a criatividade e liberdade nos projetos.");
        // console.log(document.body.childNodes);
        //Qualificações
        $(".qualification .title").text("Experiência e educação");
            //seção 1
        $(".education-1 .qualification__title").text("").append("<i class='fas fa-graduation-cap'>" + "</i>" + " Emprego e Educação");
        $('#edu1_area_1').text('Graduado em Ciência e Tecnologia')
        $('#edu1_year_1').text("").append("<i class='far fa-calendar-alt'>" + "</i>" + " Dez 2017 - Completo");
        $('#edu1_area_2').text('Desenvolvedor Front End')
        $('#edu1_year_2').text("").append("<i class='far fa-calendar-alt'>" + "</i>" + " Jun 2022 - Atualmente");
        $('#edu1_area_3').text('Desenvolvedor Back End')
        $('#edu1_year_3').text("").append("<i class='far fa-calendar-alt'>" + "</i>" + " Out 2022 - Atualmente");
            //seção 2
        $(".education-2 .qualification__title").text("").append("<i class='fas fa-rocket'>" + "</i>" + " Certificados");
        $('#edu2_area_1').text('JavaScript')
        $('#edu2_year_1').text("").append("<i class='far fa-calendar-alt'>" + "</i>" + " Abr 2022");
        $('#edu2_area_4').text('React')
        $('#edu2_year_4').text("").append("<i class='far fa-calendar-alt'>" + "</i>" + " Ago 2022");
        $('#edu2_area_2').text('Gestão e Governança TI')
        $('#edu2_year_2').text("").append("<i class='far fa-calendar-alt'>" + "</i>" + " Mar 2022");
        $('#edu2_area_3').text('Arquiteto de Soluções')
        $('#mattersXP').text("").append("<i class='fas fa-book'>" + "</i>" + " XP Educação");
        $('#edu2_year_3').text("").append("<i class='far fa-calendar-alt'>" + "</i>" + " Out 2021");
        $('#edu2_area_5').text('Java')
        $('#edu2_year_5').text("").append("<i class='far fa-calendar-alt'>" + "</i>" + " Out 2022");
        //Portfólio
        $(".portfolio .title").text("Meu portfólio");
        $('.portfolio-space .info-type').text("").append("<i class='fa-solid fa-gears'>" + "</i>" + " Trabalhando");
        $('.portfolio-space .info-data').text("Em breve..");
        $('.portfolio-space #nft-lang').text("").append("<i class='fa-brands fa-react'>" + "</i>" + " React");
        $('.portfolio-space #nft').text("Minte sua NFT");
        $('.portfolio-space #dao-lang').text("").append("<i class='fab fa-js-square'>" + "</i>" + " JavaScript");
        $('.portfolio-space #dao').text("Dev DAO");
        $('.portfolio-space #imc-lang').text("").append("<i class='fab fa-js-square'>" + "</i>" + " JavaScript");
        $('.portfolio-space #imc').text("calculadora de IMC");
        //Contato
        $(".contact .title").text("Contato");
        //seção 1
        $(".contact .left .text").text("Quer conversar comigo?");
        $(".contact .left p").children().text("Se quiser conversar ou discutir algo pode mandar um e-mail ao lado ou ir nas minhas redes sociais abaixo.");
        $("#nomeCont").text("Nome");
        $("#endCont").text("Endereço");
        $("#emailCont").text("E-mail");
        //seção 2
        $(".contact .right .text").text("Me envie uma mensagem");
        //form
        $(".contact .right .name").text("").append("<input name='name' type='text' placeholder='Nome' required>")
        $(".contact .right .email").text("").append("<input name='email' type='hidden' placeholder='Seu e-mail' required>")
        $(".contact .right .assunto").text("").append("<input name='subject' type='text' placeholder='Assunto' required>")
        $(".contact .right .textarea").text("").append("<textarea name='message' cols='30' rows='10' placeholder='Mensagem..' required></textarea>")
        $(".contact .right .button-area").text("").append("<button type='submit'>Enviar</button>");
        //footer
        $("#footer").text("").append('<span>| Feito por <a href="https://github.com/galvier" target="_blank">Jonathan Galvier</a> | <a href="https://github.com/galvier" target="blank"><i class="fab fa-github"></i></a> | <a href="https://www.linkedin.com/in/jonathangalvier" target="blank"><i class="fab fa-linkedin"></i></a>');

    });
});

$(function(){
    $(".en").click(function(){
        //Cabeçalho
        $(".menu").children().eq(0).children().text("Home"); //solução
        $(".menu").children().eq(1).children().text("About");
        $(".menu").children().eq(2).children().text("Skills");
        $(".menu").children().eq(3).children().text("Qualifications");
        $(".menu").children().eq(4).children().text("Portfolio");
        $(".menu").children().eq(5).children().text("Contact");
        $(".language-selected").text("EN-US");
        $(".language-selected").removeClass("change-br").addClass("change-en");
        $(".about .title").addClass("change-en");
        $(".skills .title").addClass("change-en");
        $(".qualification .title").addClass("change-en");
        $(".portfolio .title").addClass("change-en");
        $(".contact .title").addClass("change-en");
        //Seção
        $(".text-1").text("Hello, welcome to my website!");
        $(".text-3").text("Web ");
        $(".text-3").append("<span>" + "Developer" +'</span>');
        //Sobre 
        $(".about .title").text("About me");
        $(".about .text").text("").append("Hi, my name is Jonathan and I'm a web" + "<span>" + " Developer" +'</span>');
        $(".typing-2").text("Developer");
        $(".about .right").children().eq(1).text("I'm currently transitioning to a DEV career, but I've always been in touch with technology since Windows 98. I finally got some time to specialize and dedicate myself and here I am, learning to be a complete developer! This is my first big project that I managed to consolidate the main languages I've learned so far. I hope you like my humble portfolio.");
        $(".about .right").children().eq(3).text("Consider this a short introduction to me and my projects, you can check out a little more by clicking on my full resume below, or see a little more under the “Qualifications” tab!");
        $(".about .right a").text("Curriculum");
        $(".about .right a").eq(1).text("Certificates");
        //Skills
        $(".skills .title").text("Skills");
        $(".skills .text").text("My skills");
        $(".skills .left").children().eq(1).text("I have lined up here, the languages and technologies that I have the most experience with. I'm fascinated by the immediate result, so I initially chose to start with the web and related languages (like JavaScript, as it's a full stack language) and then venture into Back-end languages. In addition to great power, these technologies allowed me to measure my learning more quickly, in addition to fostering more creativity and freedom in projects.");
        // console.log(document.body.childNodes);
        //Qualificações
        $(".qualification .title").text("Experience and education");
            //seção 1
        $(".education-1 .qualification__title").text("").append("<i class='fas fa-graduation-cap'>" + "</i>" + " Job and Education");
        $('#edu1_area_1').text('Graduate in Science and Technology')
        $('#edu1_year_1').text("").append("<i class='far fa-calendar-alt'>" + "</i>" + " Dec 2017 - Complete");
        $('#edu1_area_2').text('Front End Developer')
        $('#edu1_year_2').text("").append("<i class='far fa-calendar-alt'>" + "</i>" + " Jun 2022 - At the moment");
        $('#edu1_area_3').text('Back End Developer')
        $('#edu1_year_3').text("").append("<i class='far fa-calendar-alt'>" + "</i>" + " Oct 2022 - At the moment");
            //seção 2
        $(".education-2 .qualification__title").text("").append("<i class='fas fa-rocket'>" + "</i>" + " Certificates");
        $('#edu2_area_1').text('JavaScript')
        $('#edu2_year_1').text("").append("<i class='far fa-calendar-alt'>" + "</i>" + " Apr 2022");
        $('#edu2_area_4').text('React')
        $('#edu2_year_4').text("").append("<i class='far fa-calendar-alt'>" + "</i>" + " Aug 2022");
        $('#edu2_area_2').text('IT Management and Governance')
        $('#edu2_year_2').text("").append("<i class='far fa-calendar-alt'>" + "</i>" + " Mar 2022");
        $('#edu2_area_3').text('Solutions architect')
        $('#mattersXP').text("").append("<i class='fas fa-book'>" + "</i>" + " XP Education");
        $('#edu2_year_3').text("").append("<i class='far fa-calendar-alt'>" + "</i>" + " Oct 2021");
        $('#edu2_area_5').text('Java')
        $('#edu2_year_5').text("").append("<i class='far fa-calendar-alt'>" + "</i>" + " Oct 2022");
        //Portfólio
        $(".portfolio .title").text("Meu portfólio");
        $('.portfolio-space .info-type').text("").append("<i class='fa-solid fa-gears'>" + "</i>" + " Working");
        $('.portfolio-space .info-data').text("Coming soon..");
        $('.portfolio-space #nft-lang').text("").append("<i class='fa-brands fa-react'>" + "</i>" + " React");
        $('.portfolio-space #nft').text("NFT collection");
        $('.portfolio-space #dao-lang').text("").append("<i class='fab fa-js-square'>" + "</i>" + " JavaScript");
        $('.portfolio-space #dao').text("Dev DAO");
        $('.portfolio-space #imc-lang').text("").append("<i class='fab fa-js-square'>" + "</i>" + " JavaScript");
        $('.portfolio-space #imc').text("IMC calculator");
        //Contato
        $(".contact .title").text("Contato");
        //seção 1
        $(".contact .left .text").text("Do you want to talk with me?");
        $(".contact .left p").text("If you want to talk or discuss something you can send an email to the side or go to my social networks below.");
        $("#nomeCont").text("Name");
        $("#endCont").text("Address");
        $("#emailCont").text("E-mail");
        //seção 2
        $(".contact .right .text").text("Send me a message");
        //form
        $(".contact .right .name").text("").append("<input name='name' type='text' placeholder='Name' required>")
        $(".contact .right .email").text("").append("<input name='email' type='text' placeholder='Your e-mail' required>")
        $(".contact .right .assunto").text("").append("<input name='subject' type='text' placeholder='Subject' required>")
        $(".contact .right .textarea").text("").append("<textarea name='message' cols='30' rows='10' placeholder='Message..' required></textarea>")
        $(".contact .right .button-area").text("").append("<button type='submit'>Send</button>");
        //footer
        $("#footer").text("").append('<span>| Created by <a href="https://github.com/galvier" target="_blank">Jonathan Galvier</a> | <a href="https://github.com/galvier" target="blank"><i class="fab fa-github"></i></a> | <a href="https://www.linkedin.com/in/jonathangalvier" target="blank"><i class="fab fa-linkedin"></i></a>');

    });
});