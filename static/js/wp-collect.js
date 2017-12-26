function wpcollect(post_id, user_id){
	var id = "#wp-collect-" + post_id,
		$collect = jQuery(id);

	if(post_id){
		$collect.addClass('collect-loader');
    	jQuery.post(wpcollect_ajax_url, {
    		"action": "wpcollect",
        	"post_id": post_id,
        	"user_id": user_id
    	}, function(result) { //console.log(result);
    		if( result.status == 200 ){
    			var $count = $collect.find('span');
    			$collect.addClass('collected is-favorite').removeClass('collect-loader');
    			$count.text(result.count);
    		}else if( result.status == 300 ){
    			var $count = $collect.find('span');
    			$collect.removeClass('collected is-favorite').removeClass('collect-loader');
    			$count.text(result.count);
    		}else{
    			alert('系统超时，请稍后重试');
    		}
    	}, 'json');		
	}
}

function wpcollect2(post_id, user_id){
	var id = "#wp-collect-" + post_id,
		$collect = jQuery(id);

	if(post_id){
		$collect.addClass('collect-loader');
    	jQuery.post(wpcollect_ajax_url, {
    		"action": "wpcollect",
        	"post_id": post_id,
        	"user_id": user_id
    	}, function(result) { //console.log(result);
    		if( result.status == 200 ){
    			location.reload();     
    		}else if( result.status == 300 ){
    			location.reload();     
    		}else{
    			alert('系统超时，请稍后重试');
    		}
    	}, 'json');		
	}
}