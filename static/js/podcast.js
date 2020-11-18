 AOS.init({
 	duration: 800,
 	easing: 'slide',
 	once: true
 });

jQuery(document).ready(function($) {

	"use strict";
	$(document).ready(function($){
		//Podcast list page stuffs
		$("#beon_podcast_list_data").ready(function($) {
			$('#beon_podcast_list_data').html("carregando...");
			$.get("/api/podcast", function(data) {
				$("#beon_podcast_list_data").html('');
				$.each(data, function(i, obj) {
					$("#beon_podcast_list_data").append('<a href="/podcast/'+ obj.id + '">'+obj.title + '</a><br>')
				});
			});
		});		

		//Podcast content page stuffs
		$("#beon-podcast-content").ready(function($) {
			$.get("/api/podcast", function(data) {
				var content_found = -1
				$.each(data, function(i, v) {
					if (content_found == -1){					
						if (v.id == id) {
							content_found = i;
							$('#podcast_date').html(v.date);
							$('#podcast_desc').html(v.desc);
							$('#podcast_content').html('<iframe id="podcast_content" frameborder="0" height="200" scrolling="no" src="'+v.content_link+'" width="100%"></iframe>');

							if(data.length==1){
								$('#podcast_conteudo_anterior').remove();
								$('#podcast_conteudo_proximo').remove();
							}
							else if(i==0){
								$('#podcast_conteudo_anterior').attr("href","/podcast/"+data[data.length-1].id+'#podcast_title');
								$('#podcast_conteudo_proximo').attr("href","/podcast/"+data[i+1].id+'#podcast_title');
							}
							else if(i==data.length-1){
								$('#podcast_conteudo_anterior').attr("href","/podcast/"+data[i-1].id+'#podcast_title');
								$('#podcast_conteudo_proximo').attr("href","/podcast/"+data[0].id+'#podcast_title');								
							}
							else{
								$('#podcast_conteudo_anterior').attr("href","/podcast/"+data[i-1].id+'#podcast_title');
								$('#podcast_conteudo_proximo').attr("href","/podcast/"+data[i+1].id+'#podcast_title');									
							}							
						}
					}

				});			
			});
		});		
	});

});