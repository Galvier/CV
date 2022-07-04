$(function() {
    $(".br").click(function(){
        //Cabeçalho
        // $(".menu").children().eq(0).text("Início");
        $(".menu").children().eq(0).children().text("Início");
        $(".menu").children().eq(1).children().text("Sobre");
        $(".menu").children().eq(2).children().text("Skills");
        $(".menu").children().eq(3).children().text("Qualificações");
        $(".menu").children().eq(4).children().text("Portfólio");
        $(".menu").children().eq(5).children().text("Contato");
        $(".language-selected").text("PT-BR");
        $(".language-selected").removeClass('change-en').addClass("change-br");
        //Seção
        $(".text-1").text("Olá, bem vindo ao meu site!");
        $(".text-3").text("").append("<span>" + "Desenvolvedor" +'</span>'+ ' web');
        //Sobre 
        $(".about .title").text("Sobre mim");
        $(".about .text").text("").append("Olá, me chamo Jonathan e sou" + "<span>" + " Desenvolvedor" +'</span>'+ ' web');
        $(".typing-2").text("Desenvolvedor");
        $(".about .right").children().eq(1).text("Atualmente estou em transição para a carreira de DEV, mas sempre tive contato como fuçador de tecnologia desde o Windows 98. Finalmente consegui um tempo para me especializar e dedicar e aqui estou aprendendo a ser um desenvolvedor completo! Esse é meu primeiro grande projeto que consegui consolidar as principais linguagens que aprendi até agora. Espero que goste do meu humilde portifolio.");
        $(".about .right").children().eq(2).text("Considere isso uma pequena introdução breve sobre mim e dos meus projetos, você pode conferir um pouco mais clicando no meu currículo completo abaixo, ou veja um pouco mais na aba “Qualificações”!");
        $(".about .right a:nth-child(1)").text("Currículo");
        $(".right a:nth-child(2)").text("Certificados");
        //Skills
        $(".skills .title").text("Skills");
        $(".skills .text").text("Minhas habilidades");
        $(".skills .left").children().eq(1).text("Alinhei aqui, em ordem decrescente, as linguagens e tecnologias que tenho mais experiência. Sou fascinado pelo resultado imediato, então é esperado que eu seja mais adepto da web e linguagens relacionadas (como JavaScript). Além de grande potência, essas tecnologias permitiram mensurar meu aprendizado com mais velocidade além de fomentar mais a criatividade e liberdade nos projetos.");
        // console.log(document.body.childNodes);
        //Qualificações
        $(".qualification .title").text("Experiência e educação");
            //seção 1
        $(".education-1 .qualification__title").text("").append("<i class='fas fa-graduation-cap'>" + "</i>" + " Educação");
        $('#edu1_area_1').text('Graduado em Ciência e Tecnologia')
        $('#edu1_year_1').text("").append("<i class='far fa-calendar-alt'>" + "</i>" + " Dez 2017 - Completo");
        $('#edu1_area_2').text('Desenvolvedor Front End')
        $('#edu1_year_2').text("").append("<i class='far fa-calendar-alt'>" + "</i>" + " Jun 2022 - Atualmente");
            //seção 2
        $(".education-1 .qualification__title").text("").append("<i class='fas fa-rocket'>" + "</i>" + " Certificados");
        $('#edu2_area_1').text('JavaScript')
        $('#edu2_year_1').text("").append("<i class='far fa-calendar-alt'>" + "</i>" + " Abr 2022");
        $('#edu2_area_2').text('Gestão e Governança TI')
        $('#edu2_year_2').text("").append("<i class='far fa-calendar-alt'>" + "</i>" + " Mar 2022");
        $('#edu2_area_3').text('Arquiteto de Soluções')
        $('#edu2_year_3').text("").append("<i class='far fa-calendar-alt'>" + "</i>" + " Out 2021");
        //Portfólio
        $(".portfolio .title").text("Meu portfólio");
        $('portfolio-space .info-type').text("").append("<i class='fa-solid fa-gears'>" + "</i>" + " Trabalhando");
        $('portfolio-space .info-data').text("Em breve..");
        
    });
});

$(function() {
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
        //Seção
        $(".text-1").text("Hello, welcome to my website!");
        // $("span#developer.dev").text(val);
        // console.log($("span.dev").text());
        $(".text-3").text("Web ");
        $(".text-3").append("<span>" + "Developer" +'</span>');
        //Sobre 
        $(".about .title").text("Sobre mim");
        $(".about .text").text("Olá, me chamo Jonathan e sou web");
        $(".typing-2").text("Desenvolvedor");
        $(".about .right p").text("Atualmente estou em transição para a carreira de DEV, mas sempre tive contato como fuçador de tecnologia desde o Windows 98. Finalmente consegui um tempo para me especializar e dedicar e aqui estou aprendendo a ser um desenvolvedor completo! Esse é meu primeiro grande projeto que consegui consolidar as principais linguagens que aprendi até agora. Espero que goste do meu humilde portifolio.");
        $(".about .right p").text("Considere isso uma pequena introdução breve sobre mim e dos meus projetos, você pode conferir um pouco mais clicando no meu currículo completo abaixo, ou veja um pouco mais na aba “Qualificações”!");
        $(".about .right a:nth-child(1)").text("Currículo");
        $(".right a:nth-child(2)").text("Certificados");
        //Skills
        $(".skills .title").text("Skills");
        $(".skills .text").text("Minhas habilidades");
        console.log(document.body.childNodes);
    });
});


