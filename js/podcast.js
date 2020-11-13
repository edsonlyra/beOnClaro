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
			$.get("podcast_list.json", function(data) {
				$("#beon_podcast_list_data").html('');
				$.each(data, function(i, obj) {
					$("#beon_podcast_list_data").append('<a href="beon-podcast.html?id='+ obj.id + '">'+obj.name + '</a><br>')
				});
			});
		});		

		//Podcast content page stuffs
		$("#beon-podcast-content").ready(function($) {
			let searchParams = new URLSearchParams(window.location.search);
			var content_found = -1;
			var next_content = -1
			var before_content = -1
			var last_iterator = -1
			if (searchParams.get('id') != null) 
				var id = searchParams.get('id');

			$.get("podcast_list.json", function(data) {
				$.each(data, function(i, v) {
					
					if (content_found == -1){					
						if (v.id == id) {
							content_found = i;

							$('#podcast_date').html(v.date);
							$('#podcast_desc').html(v.description);
							$('#podcast_content').html('<iframe id="podcast_content" frameborder="0" height="200" scrolling="no" src="'+v.content_link+'" width="100%"></iframe>');

							if(data.length==1){
								$('#podcast_conteudo_anterior').remove();
								$('#podcast_conteudo_proximo').remove();
							}
							else if(i==0){
								$('#podcast_conteudo_anterior').attr("href","beon-podcast.html?id="+data[data.length-1].id);
								$('#podcast_conteudo_proximo').attr("href","beon-podcast.html?id="+data[i+1].id);
							}
							else if(i==data.length-1){
								$('#podcast_conteudo_anterior').attr("href","beon-podcast.html?id="+data[i-1].id);
								$('#podcast_conteudo_proximo').attr("href","beon-podcast.html?id="+data[0].id);								
							}
							else{
								$('#podcast_conteudo_anterior').attr("href","beon-podcast.html?id="+data[i-1].id);
								$('#podcast_conteudo_proximo').attr("href","beon-podcast.html?id="+data[i+1].id);									
							}							
						}
					}

				});

			});
		});		
	});

});