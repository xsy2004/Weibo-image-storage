function upweibo(elementn){
	backurl='';
	console.log("Uploading");
            var fd = new FormData(document.getElementById(elementn));
			var flength=fd.length;
			if(flength<=0){
				return 'error';
			}
            fd.append("label", "WEBUPLOAD");
            $.ajax({
              url: "https://api.imbottle.com/wup.php",
              type: "POST",
              data: fd,
			  async:false,
              enctype: 'multipart/form-data',
              processData: false,  // tell jQuery not to process the data
              contentType: false   // tell jQuery not to set contentType
            })
			.done(function( data ) {
				mains=eval(data);
				if(mains.data.url!=='undefined'){
				backurl=mains.data.url;
				}
				msg=mains.msg;
				//document.getElementById('mainc').value=document.getElementById('mainc').value+'\r ![';
            });
			 if(msg=='Empty post.'){
				 return 'error';
			 }else{
			return backurl;
			 }
}
function upweibodt(elementn){
	backurl='';
	console.log("Uploading");
            var fd = new FormData(document.getElementById(elementn));
			var flength=fd.length;
			if(flength<=0){
				return 'error';
			}
            fd.append("label", "WEBUPLOAD");
            $.ajax({
              url: "https://api.imbottle.com/wup.php",
              type: "POST",
              data: fd,
			  async:false,
              enctype: 'multipart/form-data',
              processData: false,  // tell jQuery not to process the data
              contentType: false   // tell jQuery not to set contentType
            })
			.done(function( data ) {
				mains=eval(data);
				msg=mains.msg;
				if(mains.data!=='undefined'){
				backurl=mains.data;
				}
				//document.getElementById('mainc').value=document.getElementById('mainc').value+'\r ![';
            });
			if(msg=='Empty post.'){
				 return 'error';
			 }else{
			return backurl;
			 }
}