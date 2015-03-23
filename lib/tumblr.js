/*
*
* Date Created : 21.03.2015
* Date Modified: 22.03.2015
* Author       : N. Alperen Pulur
*
*/

{
  search:[
    {
      type:'contact',
      query:'https://www.tumblr.com/search/{{term}}',
      translate:'parseHTML(response)',
      name:{
        selector:'.title',
        expression:'element.textContent'
      },
      // Eliminated description part because not all of query results have description
      // therefore it may cause shifted description items within the array
	  /*description:{
	    selector:'.description_inner',
        expression:'element.textContent'
	  },*/
      link:{
        selector:'.full_url',
        expression:'element.textContent'
      }
	  ,
      image:{
        selector:'.search_blogs_row .square a img',
        expression:'element.getAttribute("src")'
      }
    },
    
    {
      type:'post',
      query:'https://www.tumblr.com/search/{{term}}',
      translate:'parseHTML(response)',
      
      // name : author of the post
      name:{
        selector:'.post_info_tumblelog',
        expression:'element.textContent'
      },
      // Again eliminated since there may or may not existing descriptions per post
      // So it is better not to include them in query
      /*
	  description:{
	    selector:'.post_body',
        expression:'element.textContent.substring(0, $(element).text().length - 14)'
	  },

	  // also added hashtag segment in case of requirement later
	  // returns list of hashtags
	  // at each index it is able to be reached hashtag by 'element.textContent'
	  hashtag:{
	    selector:'.draggable .post_tags_inner a',
        expression:'element'
	  },*/

	  // the link for the post
      link:{
        selector:'.post_info_tumblelog',
        expression:'element.getAttribute("href");'
      }
    }
  ]
}