$(document).ready(function() {
	// PARA CADA ELEMENTO COM COM A CLASSE 'banner' ISTO SERÁ APLICADO
	$('.banner').each(function(){
		// ARMAZENO A INSTÂNCIA DO ELEMENTO NA VARIÁVEL $obj
		var $obj = $(this);
		// EVENTO DISPARADO QUANDO SE ROLA A PÁGINA
		$(window).scroll(function() {
			// CONTRUO A POSIÇÃO DINÁMICO DO BG, QUE É DADO PELA RELAÇÃO DO QUANTO O SCROLL ESTÁ DISTANTE DO TOP DA PÁGINA PELO ATRIBUTO 'data-speed' QUE FOI INSERIDO NO ELEMENTO HTML, ESTE PODE SER ALTERADO PARA MUDAR A VELOCIDADE DO EFEITO
			var yPos = -($(window).scrollTop() / $obj.data('speed')); 
	 		// ARMAZENO EM UMA VARIAVEL A POSIÇÃO DO BACKGROUND QUE SERÁ SEMPRE 0 PARA POSIÇÃO HORIZONTAL, E A POSIÇÃO VERTICAL É DADA PELO RESULTADO ACIMA OBTIDO
			var bgpos = '0 '+ yPos + 'px';
	 		// SETO O BG POSITION DO ELEMENTO COM A FUNÇÃO css
			$obj.css('background-position', bgpos );
	 
		}); 
	}); //clicar no menu do celular //
    $(".btn-menu").click(function(){
      $(".menu").show();
    });
    $(".btn-close").click(function(){
      $(".menu").hide();
    });
    
    // AÇÃO QUANDO CLICAR EM UM ITEM DO MENU
    $(".menu a").click(function(e){
    	// DESATIVO AS CALLBACKS PADRÕES DA ANCORA
    	e.preventDefault();
    	// 'this.hash' é o atributo 'href' da ancora, assim armazeno na variável para onde deve-se ir
    	var target = this.hash;
    	// USO A FUNÇÃO ANIMATE DO JQUERY PARA O EFEITO, NO BODY DA PÁGINA
    	$("body").animate({
    		// O BODY IRÁ TER UM scrollTop, OU SEJA, DISTANCIA DO TOPO, DA MESMA DISTANCIA DO NOSSO ALVO ESTÁ
    		// TIREI 80 PORCAUSA DA ALTURA DO MENU, PARA Q ELE NAO FIQUE NA FRENTE DE UM POUCO DA PARTE DE CIMA DA SECTION
    		scrollTop:$(target).position().top - 80
    	},
    	// TEMPO DA ANIMAÇÃO EM MS, /1000 = S
    	1000);
    })

    // AÇÃO QUANDO CLICAR EM UM ITEM DO MENU DO RODAPÉ
    $(".menu-rodape a").click(function(e){
        // DESATIVO AS CALLBACKS PADRÕES DA ANCORA
        e.preventDefault();
        // 'this.hash' é o atributo 'href' da ancora, assim armazeno na variável para onde deve-se ir
        var target = this.hash;
        // USO A FUNÇÃO ANIMATE DO JQUERY PARA O EFEITO, NO BODY DA PÁGINA
        $("body").animate({
            // O BODY IRÁ TER UM scrollTop, OU SEJA, DISTANCIA DO TOPO, DA MESMA DISTANCIA DO NOSSO ALVO ESTÁ
            // TIREI 80 PORCAUSA DA ALTURA DO MENU, PARA Q ELE NAO FIQUE NA FRENTE DE UM POUCO DA PARTE DE CIMA DA SECTION
            scrollTop:$(target).position().top - 80
        },
        // TEMPO DA ssANIMAÇÃO EM MS, /1000 = S
        1000);
    })

    // AÇÃO QUANDO CLICAR NA SETA
    $(".seta2 a").click(function(e){
        // DESATIVO AS CALLBACKS PADRÕES DA ANCORA
        e.preventDefault();
        // 'this.hash' é o atributo 'href' da ancora, assim armazeno na variável para onde deve-se ir
        var target = this.hash;
        // USO A FUNÇÃO ANIMATE DO JQUERY PARA O EFEITO, NO BODY DA PÁGINA
        $("body").animate({
            // O BODY IRÁ TER UM scrollTop, OU SEJA, DISTANCIA DO TOPO, DA MESMA DISTANCIA DO NOSSO ALVO ESTÁ
            // TIREI 80 POR CAUSA DA ALTURA DO MENU, PARA Q ELE NAO FIQUE NA FRENTE DE UM POUCO DA PARTE DE CIMA DA SECTION
            scrollTop:$(target).position().top - 80
        },
        // TEMPO DA ANIMAÇÃO EM MS, /1000 = S
        1000);
    })

})