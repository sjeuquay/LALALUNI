// chuyen banner
var index = 0;
change = function() {
   var imgs = [
    'https://cdn.chonongsanonline.com/uploads/all/mp2SS36dCwokCFa8rWdlP7mxUKqc63cAxehcBeTn.jpg?fbclid=IwAR3XQS-EzwDQrDCGIj4r4mXDhuKRJFdugma1omSmOpxp5HlW7FQFYUYxVeI',
    'https://scontent.fsgn13-4.fna.fbcdn.net/v/t39.30808-6/337677484_529431772596344_5936914561083834330_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=POgWzgRA5dsAX83fBh9&_nc_ht=scontent.fsgn13-4.fna&oh=00_AfCG3SlKQmnY7vr6U59mFEzlon710arioIc6qU8MkUDqSg&oe=642CDF38',
    'https://scontent.fsgn3-1.fna.fbcdn.net/v/t39.30808-6/337284987_730217212096508_3338023056088811219_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=mNQ2hSxJzlwAX_jUgoF&_nc_ht=scontent.fsgn3-1.fna&oh=00_AfDCcLOYlueqABsscUFj-CjlUYI6JvNy17xrN49t1i0uFg&oe=642D01C4',
    'https://scontent.fsgn13-4.fna.fbcdn.net/v/t39.30808-6/337656209_1886722885012041_7544636564838007196_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=e3f864&_nc_ohc=72FtvsrsBlkAX9QZ5XY&_nc_ht=scontent.fsgn13-4.fna&oh=00_AfCsz_4fScYBYcQ5UEamW7Cm0xInadtkCmRrttitlqxnxg&oe=642CC85A'
   ];

    document.getElementById('banner-img').src = imgs[index];
    index++;
    if(index == 4){
        index = 0;
    }
}
setInterval(change,2000);