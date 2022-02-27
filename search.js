function tosettings() {
    window.location = "Settings.html";
}

function bbb() {
    
    link = localStorage.getItem("ImageBackgroundLink");
    console.log(link);
    body=document.getElementsByTagName('body')[0];
    body.style.background = "url("+link+")";
    body.style.backgroundSize="cover";

}

function booksearch() {
    value = document.getElementById("search").value;
    svalue = value.toUpperCase();
   //Harry Potter and the Cursed Child(search)
    if (svalue == "HARRY POTTER AND THE CURSED CHILD"){
    localStorage.removeItem("Bookname");
    localStorage.removeItem("Img");
    localStorage.removeItem("Audio");
    localStorage.setItem("Bookname", "Harry Potter and the Cursed Child");
    localStorage.setItem("Img", "https://fulllengthaudiobooks.com/wp-content/uploads/2021/02/518VhA3dH9L._SX329_BO1204203200.jpg");

    a = "<audio controlsList='nodownload'class='wp-audio-shortcode' id='audio-15229-1' preload='none' style='width: 100%;' controls='controls'><source class='lazy lazy-hidden' type='audio/mpeg' src='https://ipaudio.club/wp-content/uploads/GOLN/Cursed%20child/01.mp3?_=1' /><a href='https://ipaudio.club/wp-content/uploads/GOLN/Cursed%20child/01.mp3'>https://ipaudio.club/wp-content/uploads/GOLN/Cursed%20child/01.mp3</a></audio>";
    b = "<audio controlsList='nodownload' class='wp-audio-shortcode' id='audio-15229-2' preload='none' style='width: 100%;' controls='controls'><source class='lazy lazy-hidden' type='audio/mpeg' src='https://ipaudio.club/wp-content/uploads/GOLN/Cursed%20child/02.mp3?_=2' /><a href='https://ipaudio.club/wp-content/uploads/GOLN/Cursed%20child/02.mp3'>https://ipaudio.club/wp-content/uploads/GOLN/Cursed%20child/02.mp3</a></audio>";
    c = "<audio controlsList='nodownload' class='wp-audio-shortcode' id='audio-15229-3' preload='none' style='width: 100%;' controls='controls'><source class='lazy lazy-hidden' type='audio/mpeg' src='https://ipaudio.club/wp-content/uploads/GOLN/Cursed%20child/03.mp3?_=3' /><a href='https://ipaudio.club/wp-content/uploads/GOLN/Cursed%20child/03.mp3'>https://ipaudio.club/wp-content/uploads/GOLN/Cursed%20child/03.mp3</a></audio>";
    d = "<audio controlsList='nodownload' class='wp-audio-shortcode' id='audio-15229-4' preload='none' style='width: 100%;' controls='controls'><source class='lazy lazy-hidden' type='audio/mpeg' src='https://ipaudio.club/wp-content/uploads/GOLN/Cursed%20child/04.mp3?_=4' /><a href='https://ipaudio.club/wp-content/uploads/GOLN/Cursed%20child/04.mp3'>https://ipaudio.club/wp-content/uploads/GOLN/Cursed%20child/04.mp3</a></audio>";
    e = "<audio controlsList='nodownload' class='wp-audio-shortcode' id='audio-15229-5' preload='none' style='width: 100%;' controls='controls'><source class='lazy lazy-hidden' type='audio/mpeg' src='https://ipaudio.club/wp-content/uploads/GOLN/Cursed%20child/05.mp3?_=5' /><a href='https://ipaudio.club/wp-content/uploads/GOLN/Cursed%20child/05.mp3'>https://ipaudio.club/wp-content/uploads/GOLN/Cursed%20child/05.mp3</a></audio>";
    f = a + b + c + d + e;
    localStorage.setItem("Audio", f);
    window.location = "abpage.html";
    }
    //Percy Jackson and the Lightning theif(search)
    else if (svalue == "PERCY JACKSON AND THE LIGHTNING THIEF"){
        localStorage.removeItem("Bookname");
        localStorage.removeItem("Img");
        localStorage.removeItem("Audio");
        localStorage.setItem("Bookname", "Percy Jackson and the Lightning Theif");
        localStorage.setItem("Img", "https://fulllengthaudiobooks.com/wp-content/uploads/2021/02/51BfYSYSfxL._SX336_BO1204203200.jpg");
        
    
        a='<audio controlsList="nodownload" class="wp-audio-shortcode" id="audio-2274-1" preload="none" style="width: 100%;" controls="controls"><source class="lazy lazy-hidden" type="audio/mpeg" src="https://ipaudio.club/wp-content/uploads/GOLN/Lightning%20Thief/01.mp3?_=1" /><a href="https://ipaudio.club/wp-content/uploads/GOLN/Lightning%20Thief/01.mp3">https://ipaudio.club/wp-content/uploads/GOLN/Lightning%20Thief/01.mp3</a></audio>'
        b='<audio controlsList="nodownload" class="wp-audio-shortcode" id="audio-2274-2" preload="none" style="width: 100%;" controls="controls"><source class="lazy lazy-hidden" type="audio/mpeg" src="https://ipaudio.club/wp-content/uploads/GOLN/Lightning%20Thief/02.mp3?_=2" /><a href="https://ipaudio.club/wp-content/uploads/GOLN/Lightning%20Thief/02.mp3">https://ipaudio.club/wp-content/uploads/GOLN/Lightning%20Thief/02.mp3</a></audio>'
        c='<audio controlsList="nodownload" class="wp-audio-shortcode" id="audio-2274-3" preload="none" style="width: 100%;" controls="controls"><source class="lazy lazy-hidden" type="audio/mpeg" src="https://ipaudio.club/wp-content/uploads/GOLN/Lightning%20Thief/03.mp3?_=3" /><a href="https://ipaudio.club/wp-content/uploads/GOLN/Lightning%20Thief/03.mp3">https://ipaudio.club/wp-content/uploads/GOLN/Lightning%20Thief/03.mp3</a></audio>'
        d='<audio controlsList="nodownload" class="wp-audio-shortcode" id="audio-2274-4" preload="none" style="width: 100%;" controls="controls"><source class="lazy lazy-hidden" type="audio/mpeg" src="https://ipaudio.club/wp-content/uploads/GOLN/Lightning%20Thief/04.mp3?_=4" /><a href="https://ipaudio.club/wp-content/uploads/GOLN/Lightning%20Thief/04.mp3">https://ipaudio.club/wp-content/uploads/GOLN/Lightning%20Thief/04.mp3</a></audio>'
        e='<audio controlsList="nodownload" class="wp-audio-shortcode" id="audio-2274-5" preload="none" style="width: 100%;" controls="controls"><source class="lazy lazy-hidden" type="audio/mpeg" src="https://ipaudio.club/wp-content/uploads/GOLN/Lightning%20Thief/05.mp3?_=5" /><a href="https://ipaudio.club/wp-content/uploads/GOLN/Lightning%20Thief/05.mp3">https://ipaudio.club/wp-content/uploads/GOLN/Lightning%20Thief/05.mp3</a></audio>' 
        f='<audio controlsList="nodownload" class="wp-audio-shortcode" id="audio-2274-6" preload="none" style="width: 100%;" controls="controls"><source class="lazy lazy-hidden" type="audio/mpeg" src="https://ipaudio.club/wp-content/uploads/GOLN/Lightning%20Thief/06.mp3?_=6" /><a href="https://ipaudio.club/wp-content/uploads/GOLN/Lightning%20Thief/06.mp3">https://ipaudio.club/wp-content/uploads/GOLN/Lightning%20Thief/06.mp3</a></audio>'
        g='<audio controlsList="nodownload" class="wp-audio-shortcode" id="audio-2274-7" preload="none" style="width: 100%;" controls="controls"><source class="lazy lazy-hidden" type="audio/mpeg" src="https://ipaudio.club/wp-content/uploads/GOLN/Lightning%20Thief/07.mp3?_=7" /><a href="https://ipaudio.club/wp-content/uploads/GOLN/Lightning%20Thief/07.mp3">https://ipaudio.club/wp-content/uploads/GOLN/Lightning%20Thief/07.mp3</a></audio>'
        h='<audio controlsList="nodownload" class="wp-audio-shortcode" id="audio-2274-8" preload="none" style="width: 100%;" controls="controls"><source class="lazy lazy-hidden" type="audio/mpeg" src="https://ipaudio.club/wp-content/uploads/GOLN/Lightning%20Thief/08.mp3?_=8" /><a href="https://ipaudio.club/wp-content/uploads/GOLN/Lightning%20Thief/08.mp3">https://ipaudio.club/wp-content/uploads/GOLN/Lightning%20Thief/08.mp3</a></audio>'
        i='<audio controlsList="nodownload" class="wp-audio-shortcode" id="audio-2274-9" preload="none" style="width: 100%;" controls="controls"><source class="lazy lazy-hidden" type="audio/mpeg" src="https://ipaudio.club/wp-content/uploads/GOLN/Lightning%20Thief/09.mp3?_=9" /><a href="https://ipaudio.club/wp-content/uploads/GOLN/Lightning%20Thief/09.mp3">https://ipaudio.club/wp-content/uploads/GOLN/Lightning%20Thief/09.mp3</a></audio>'
        j='<audio controlsList="nodownload" class="wp-audio-shortcode" id="audio-2274-10" preload="none" style="width: 100%;" controls="controls"><source class="lazy lazy-hidden" type="audio/mpeg" src="https://ipaudio.club/wp-content/uploads/GOLN/Lightning%20Thief/10.mp3?_=10" /><a href="https://ipaudio.club/wp-content/uploads/GOLN/Lightning%20Thief/10.mp3">https://ipaudio.club/wp-content/uploads/GOLN/Lightning%20Thief/10.mp3</a></audio>'
        k='<audio controlsList="nodownload" class="wp-audio-shortcode" id="audio-2274-11" preload="none" style="width: 100%;" controls="controls"><source class="lazy lazy-hidden" type="audio/mpeg" src="https://ipaudio.club/wp-content/uploads/GOLN/Lightning%20Thief/11.mp3?_=11" /><a href="https://ipaudio.club/wp-content/uploads/GOLN/Lightning%20Thief/11.mp3">https://ipaudio.club/wp-content/uploads/GOLN/Lightning%20Thief/11.mp3</a></audio>'
        l=a+b+c+d+e+f+g+h+i+j+k;  
        
         
        localStorage.setItem("Audio", l);
        window.location = "abpage.html";

            }        
        //Eragon
        else if(svalue=="ERAGON"){
            localStorage.removeItem("Bookname");
    localStorage.removeItem("Img");
    localStorage.removeItem("Audio");
    localStorage.setItem("Bookname", "Eragon");
    localStorage.setItem("Img", "https://fulllengthaudiobooks.com/wp-content/uploads/2021/02/51ZIDk0a8oL._SX330_BO1204203200.jpg");
    
    a='<audio controlsList="nodownload" class="wp-audio-shortcode" id="audio-20948-1" preload="none" style="width: 100%;" controls="controls"><source class="lazy lazy-hidden" type="audio/mpeg" src="https://ipaudio.club/wp-content/uploads/GOLN/Eragon/01.mp3?_=1" /><a href="https://ipaudio.club/wp-content/uploads/GOLN/Eragon/01.mp3">https://ipaudio.club/wp-content/uploads/GOLN/Eragon/01.mp3</a></audio>';
    b='<audio controlsList="nodownload" class="wp-audio-shortcode" id="audio-20948-2" preload="none" style="width: 100%;" controls="controls"><source class="lazy lazy-hidden" type="audio/mpeg" src="https://ipaudio.club/wp-content/uploads/GOLN/Eragon/02.mp3?_=2" /><a href="https://ipaudio.club/wp-content/uploads/GOLN/Eragon/02.mp3">https://ipaudio.club/wp-content/uploads/GOLN/Eragon/02.mp3</a></audio>';
    c='<audio controlsList="nodownload" class="wp-audio-shortcode" id="audio-20948-3" preload="none" style="width: 100%;" controls="controls"><source class="lazy lazy-hidden" type="audio/mpeg" src="https://ipaudio.club/wp-content/uploads/GOLN/Eragon/03.mp3?_=3" /><a href="https://ipaudio.club/wp-content/uploads/GOLN/Eragon/03.mp3">https://ipaudio.club/wp-content/uploads/GOLN/Eragon/03.mp3</a></audio>';
    d='<audio controlsList="nodownload" class="wp-audio-shortcode" id="audio-20948-4" preload="none" style="width: 100%;" controls="controls"><source class="lazy lazy-hidden" type="audio/mpeg" src="https://ipaudio.club/wp-content/uploads/GOLN/Eragon/04.mp3?_=4" /><a href="https://ipaudio.club/wp-content/uploads/GOLN/Eragon/04.mp3">https://ipaudio.club/wp-content/uploads/GOLN/Eragon/04.mp3</a></audio>';
    e='<audio controlsList="nodownload" class="wp-audio-shortcode" id="audio-20948-5" preload="none" style="width: 100%;" controls="controls"><source class="lazy lazy-hidden" type="audio/mpeg" src="https://ipaudio.club/wp-content/uploads/GOLN/Eragon/05.mp3?_=5" /><a href="https://ipaudio.club/wp-content/uploads/GOLN/Eragon/05.mp3">https://ipaudio.club/wp-content/uploads/GOLN/Eragon/05.mp3</a></audio>';
    f='<audio controlsList="nodownload" class="wp-audio-shortcode" id="audio-20948-6" preload="none" style="width: 100%;" controls="controls"><source class="lazy lazy-hidden" type="audio/mpeg" src="https://ipaudio.club/wp-content/uploads/GOLN/Eragon/06.mp3?_=6" /><a href="https://ipaudio.club/wp-content/uploads/GOLN/Eragon/06.mp3">https://ipaudio.club/wp-content/uploads/GOLN/Eragon/06.mp3</a></audio>';
    g='<audio controlsList="nodownload" class="wp-audio-shortcode" id="audio-20948-7" preload="none" style="width: 100%;" controls="controls"><source class="lazy lazy-hidden" type="audio/mpeg" src="https://ipaudio.club/wp-content/uploads/GOLN/Eragon/07.mp3?_=7" /><a href="https://ipaudio.club/wp-content/uploads/GOLN/Eragon/07.mp3">https://ipaudio.club/wp-content/uploads/GOLN/Eragon/07.mp3</a></audio>';
    h='<audio controlsList="nodownload" class="wp-audio-shortcode" id="audio-20948-8" preload="none" style="width: 100%;" controls="controls"><source class="lazy lazy-hidden" type="audio/mpeg" src="https://ipaudio.club/wp-content/uploads/GOLN/Eragon/08.mp3?_=8" /><a href="https://ipaudio.club/wp-content/uploads/GOLN/Eragon/08.mp3">https://ipaudio.club/wp-content/uploads/GOLN/Eragon/08.mp3</a></audio>';
    i='<audio controlsList="nodownload" class="wp-audio-shortcode" id="audio-20948-9" preload="none" style="width: 100%;" controls="controls"><source class="lazy lazy-hidden" type="audio/mpeg" src="https://ipaudio.club/wp-content/uploads/GOLN/Eragon/09.mp3?_=9" /><a href="https://ipaudio.club/wp-content/uploads/GOLN/Eragon/09.mp3">https://ipaudio.club/wp-content/uploads/GOLN/Eragon/09.mp3</a></audio>';
    j='<audio controlsList="nodownload" class="wp-audio-shortcode" id="audio-20948-10" preload="none" style="width: 100%;" controls="controls"><source class="lazy lazy-hidden" type="audio/mpeg" src="https://ipaudio.club/wp-content/uploads/GOLN/Eragon/10.mp3?_=10" /><a href="https://ipaudio.club/wp-content/uploads/GOLN/Eragon/10.mp3">https://ipaudio.club/wp-content/uploads/GOLN/Eragon/10.mp3</a></audio>';
    k='<audio controlsList="nodownload" class="wp-audio-shortcode" id="audio-20948-11" preload="none" style="width: 100%;" controls="controls"><source class="lazy lazy-hidden" type="audio/mpeg" src="https://ipaudio.club/wp-content/uploads/GOLN/Eragon/11.mp3?_=11" /><a href="https://ipaudio.club/wp-content/uploads/GOLN/Eragon/11.mp3">https://ipaudio.club/wp-content/uploads/GOLN/Eragon/11.mp3</a></audio>';
    l='<audio controlsList="nodownload" class="wp-audio-shortcode" id="audio-20948-12" preload="none" style="width: 100%;" controls="controls"><source class="lazy lazy-hidden" type="audio/mpeg" src="https://ipaudio.club/wp-content/uploads/GOLN/Eragon/12.mp3?_=12" /><a href="https://ipaudio.club/wp-content/uploads/GOLN/Eragon/12.mp3">https://ipaudio.club/wp-content/uploads/GOLN/Eragon/12.mp3</a></audio>';
    m='<audio controlsList="nodownload" class="wp-audio-shortcode" id="audio-20948-13" preload="none" style="width: 100%;" controls="controls"><source class="lazy lazy-hidden" type="audio/mpeg" src="https://ipaudio.club/wp-content/uploads/GOLN/Eragon/13.mp3?_=13" /><a href="https://ipaudio.club/wp-content/uploads/GOLN/Eragon/13.mp3">https://ipaudio.club/wp-content/uploads/GOLN/Eragon/13.mp3</a></audio>';
    n='<audio controlsList="nodownload" class="wp-audio-shortcode" id="audio-20948-14" preload="none" style="width: 100%;" controls="controls"><source class="lazy lazy-hidden" type="audio/mpeg" src="https://ipaudio.club/wp-content/uploads/GOLN/Eragon/14.mp3?_=14" /><a href="https://ipaudio.club/wp-content/uploads/GOLN/Eragon/14.mp3">https://ipaudio.club/wp-content/uploads/GOLN/Eragon/14.mp3</a></audio>';
    o='<audio controlsList="nodownload" class="wp-audio-shortcode" id="audio-20948-15" preload="none" style="width: 100%;" controls="controls"><source class="lazy lazy-hidden" type="audio/mpeg" src="https://ipaudio.club/wp-content/uploads/GOLN/Eragon/15.mp3?_=15" /><a href="https://ipaudio.club/wp-content/uploads/GOLN/Eragon/15.mp3">https://ipaudio.club/wp-content/uploads/GOLN/Eragon/15.mp3</a></audio>';
    p='<audio controlsList="nodownload" class="wp-audio-shortcode" id="audio-20948-16" preload="none" style="width: 100%;" controls="controls"><source class="lazy lazy-hidden" type="audio/mpeg" src="https://ipaudio.club/wp-content/uploads/GOLN/Eragon/16.mp3?_=16" /><a href="https://ipaudio.club/wp-content/uploads/GOLN/Eragon/16.mp3">https://ipaudio.club/wp-content/uploads/GOLN/Eragon/16.mp3</a></audio>';
    q='<audio controlsList="nodownload" class="wp-audio-shortcode" id="audio-20948-17" preload="none" style="width: 100%;" controls="controls"><source class="lazy lazy-hidden" type="audio/mpeg" src="https://ipaudio.club/wp-content/uploads/GOLN/Eragon/17.mp3?_=17" /><a href="https://ipaudio.club/wp-content/uploads/GOLN/Eragon/17.mp3">https://ipaudio.club/wp-content/uploads/GOLN/Eragon/17.mp3</a></audio>';
   r=a+b+c+d+e+f+g+h+i+j+k+l+m+n+o+p+q;
    localStorage.setItem("Audio", r);
    window.location = "abpage.html";
        }
    
    
}

// <-----Popular Choice Section----->
//Harry Potter and the Cursed Child
function hpcc() {
    localStorage.removeItem("Bookname");
    localStorage.removeItem("Img");
    localStorage.removeItem("Audio");
    localStorage.setItem("Bookname", "Harry Potter and the Cursed Child");
    localStorage.setItem("Img", "https://fulllengthaudiobooks.com/wp-content/uploads/2021/02/518VhA3dH9L._SX329_BO1204203200.jpg");

    a = "<audio controlsList='nodownload'class='wp-audio-shortcode' id='audio-15229-1' preload='none' style='width: 100%;' controls='controls'><source class='lazy lazy-hidden' type='audio/mpeg' src='https://ipaudio.club/wp-content/uploads/GOLN/Cursed%20child/01.mp3?_=1' /><a href='https://ipaudio.club/wp-content/uploads/GOLN/Cursed%20child/01.mp3'>https://ipaudio.club/wp-content/uploads/GOLN/Cursed%20child/01.mp3</a></audio>";
    b = "<audio controlsList='nodownload' class='wp-audio-shortcode' id='audio-15229-2' preload='none' style='width: 100%;' controls='controls'><source class='lazy lazy-hidden' type='audio/mpeg' src='https://ipaudio.club/wp-content/uploads/GOLN/Cursed%20child/02.mp3?_=2' /><a href='https://ipaudio.club/wp-content/uploads/GOLN/Cursed%20child/02.mp3'>https://ipaudio.club/wp-content/uploads/GOLN/Cursed%20child/02.mp3</a></audio>";
    c = "<audio controlsList='nodownload' class='wp-audio-shortcode' id='audio-15229-3' preload='none' style='width: 100%;' controls='controls'><source class='lazy lazy-hidden' type='audio/mpeg' src='https://ipaudio.club/wp-content/uploads/GOLN/Cursed%20child/03.mp3?_=3' /><a href='https://ipaudio.club/wp-content/uploads/GOLN/Cursed%20child/03.mp3'>https://ipaudio.club/wp-content/uploads/GOLN/Cursed%20child/03.mp3</a></audio>";
    d = "<audio controlsList='nodownload' class='wp-audio-shortcode' id='audio-15229-4' preload='none' style='width: 100%;' controls='controls'><source class='lazy lazy-hidden' type='audio/mpeg' src='https://ipaudio.club/wp-content/uploads/GOLN/Cursed%20child/04.mp3?_=4' /><a href='https://ipaudio.club/wp-content/uploads/GOLN/Cursed%20child/04.mp3'>https://ipaudio.club/wp-content/uploads/GOLN/Cursed%20child/04.mp3</a></audio>";
    e = "<audio controlsList='nodownload' class='wp-audio-shortcode' id='audio-15229-5' preload='none' style='width: 100%;' controls='controls'><source class='lazy lazy-hidden' type='audio/mpeg' src='https://ipaudio.club/wp-content/uploads/GOLN/Cursed%20child/05.mp3?_=5' /><a href='https://ipaudio.club/wp-content/uploads/GOLN/Cursed%20child/05.mp3'>https://ipaudio.club/wp-content/uploads/GOLN/Cursed%20child/05.mp3</a></audio>";
    f = a + b + c + d + e;
    localStorage.setItem("Audio", f);
    window.location = "abpage.html";
}
//Percy Jackson and the Lightning theif
function pjlt(){
    localStorage.removeItem("Bookname");
    localStorage.removeItem("Img");
    localStorage.removeItem("Audio");
    localStorage.setItem("Bookname", "Percy Jackson and the Lightning Theif");
    localStorage.setItem("Img", "https://fulllengthaudiobooks.com/wp-content/uploads/2021/02/51BfYSYSfxL._SX336_BO1204203200.jpg");
    

    a='<audio controlsList="nodownload" class="wp-audio-shortcode" id="audio-2274-1" preload="none" style="width: 100%;" controls="controls"><source class="lazy lazy-hidden" type="audio/mpeg" src="https://ipaudio.club/wp-content/uploads/GOLN/Lightning%20Thief/01.mp3?_=1" /><a href="https://ipaudio.club/wp-content/uploads/GOLN/Lightning%20Thief/01.mp3">https://ipaudio.club/wp-content/uploads/GOLN/Lightning%20Thief/01.mp3</a></audio>'
    b='<audio controlsList="nodownload" class="wp-audio-shortcode" id="audio-2274-2" preload="none" style="width: 100%;" controls="controls"><source class="lazy lazy-hidden" type="audio/mpeg" src="https://ipaudio.club/wp-content/uploads/GOLN/Lightning%20Thief/02.mp3?_=2" /><a href="https://ipaudio.club/wp-content/uploads/GOLN/Lightning%20Thief/02.mp3">https://ipaudio.club/wp-content/uploads/GOLN/Lightning%20Thief/02.mp3</a></audio>'
    c='<audio controlsList="nodownload" class="wp-audio-shortcode" id="audio-2274-3" preload="none" style="width: 100%;" controls="controls"><source class="lazy lazy-hidden" type="audio/mpeg" src="https://ipaudio.club/wp-content/uploads/GOLN/Lightning%20Thief/03.mp3?_=3" /><a href="https://ipaudio.club/wp-content/uploads/GOLN/Lightning%20Thief/03.mp3">https://ipaudio.club/wp-content/uploads/GOLN/Lightning%20Thief/03.mp3</a></audio>'
    d='<audio controlsList="nodownload" class="wp-audio-shortcode" id="audio-2274-4" preload="none" style="width: 100%;" controls="controls"><source class="lazy lazy-hidden" type="audio/mpeg" src="https://ipaudio.club/wp-content/uploads/GOLN/Lightning%20Thief/04.mp3?_=4" /><a href="https://ipaudio.club/wp-content/uploads/GOLN/Lightning%20Thief/04.mp3">https://ipaudio.club/wp-content/uploads/GOLN/Lightning%20Thief/04.mp3</a></audio>'
    e='<audio controlsList="nodownload" class="wp-audio-shortcode" id="audio-2274-5" preload="none" style="width: 100%;" controls="controls"><source class="lazy lazy-hidden" type="audio/mpeg" src="https://ipaudio.club/wp-content/uploads/GOLN/Lightning%20Thief/05.mp3?_=5" /><a href="https://ipaudio.club/wp-content/uploads/GOLN/Lightning%20Thief/05.mp3">https://ipaudio.club/wp-content/uploads/GOLN/Lightning%20Thief/05.mp3</a></audio>' 
    f='<audio controlsList="nodownload" class="wp-audio-shortcode" id="audio-2274-6" preload="none" style="width: 100%;" controls="controls"><source class="lazy lazy-hidden" type="audio/mpeg" src="https://ipaudio.club/wp-content/uploads/GOLN/Lightning%20Thief/06.mp3?_=6" /><a href="https://ipaudio.club/wp-content/uploads/GOLN/Lightning%20Thief/06.mp3">https://ipaudio.club/wp-content/uploads/GOLN/Lightning%20Thief/06.mp3</a></audio>'
    g='<audio controlsList="nodownload" class="wp-audio-shortcode" id="audio-2274-7" preload="none" style="width: 100%;" controls="controls"><source class="lazy lazy-hidden" type="audio/mpeg" src="https://ipaudio.club/wp-content/uploads/GOLN/Lightning%20Thief/07.mp3?_=7" /><a href="https://ipaudio.club/wp-content/uploads/GOLN/Lightning%20Thief/07.mp3">https://ipaudio.club/wp-content/uploads/GOLN/Lightning%20Thief/07.mp3</a></audio>'
    h='<audio controlsList="nodownload" class="wp-audio-shortcode" id="audio-2274-8" preload="none" style="width: 100%;" controls="controls"><source class="lazy lazy-hidden" type="audio/mpeg" src="https://ipaudio.club/wp-content/uploads/GOLN/Lightning%20Thief/08.mp3?_=8" /><a href="https://ipaudio.club/wp-content/uploads/GOLN/Lightning%20Thief/08.mp3">https://ipaudio.club/wp-content/uploads/GOLN/Lightning%20Thief/08.mp3</a></audio>'
    i='<audio controlsList="nodownload" class="wp-audio-shortcode" id="audio-2274-9" preload="none" style="width: 100%;" controls="controls"><source class="lazy lazy-hidden" type="audio/mpeg" src="https://ipaudio.club/wp-content/uploads/GOLN/Lightning%20Thief/09.mp3?_=9" /><a href="https://ipaudio.club/wp-content/uploads/GOLN/Lightning%20Thief/09.mp3">https://ipaudio.club/wp-content/uploads/GOLN/Lightning%20Thief/09.mp3</a></audio>'
    j='<audio controlsList="nodownload" class="wp-audio-shortcode" id="audio-2274-10" preload="none" style="width: 100%;" controls="controls"><source class="lazy lazy-hidden" type="audio/mpeg" src="https://ipaudio.club/wp-content/uploads/GOLN/Lightning%20Thief/10.mp3?_=10" /><a href="https://ipaudio.club/wp-content/uploads/GOLN/Lightning%20Thief/10.mp3">https://ipaudio.club/wp-content/uploads/GOLN/Lightning%20Thief/10.mp3</a></audio>'
    k='<audio controlsList="nodownload" class="wp-audio-shortcode" id="audio-2274-11" preload="none" style="width: 100%;" controls="controls"><source class="lazy lazy-hidden" type="audio/mpeg" src="https://ipaudio.club/wp-content/uploads/GOLN/Lightning%20Thief/11.mp3?_=11" /><a href="https://ipaudio.club/wp-content/uploads/GOLN/Lightning%20Thief/11.mp3">https://ipaudio.club/wp-content/uploads/GOLN/Lightning%20Thief/11.mp3</a></audio>'
    l=a+b+c+d+e+f+g+h+i+j+k;  
    
     
    localStorage.setItem("Audio", l);
    window.location = "abpage.html";
}
//Eragon
function eragon1(){
    localStorage.removeItem("Bookname");
    localStorage.removeItem("Img");
    localStorage.removeItem("Audio");
    localStorage.setItem("Bookname", "Eragon");
    localStorage.setItem("Img", "https://fulllengthaudiobooks.com/wp-content/uploads/2021/02/51ZIDk0a8oL._SX330_BO1204203200.jpg");
    
    a='<audio controlsList="nodownload" class="wp-audio-shortcode" id="audio-20948-1" preload="none" style="width: 100%;" controls="controls"><source class="lazy lazy-hidden" type="audio/mpeg" src="https://ipaudio.club/wp-content/uploads/GOLN/Eragon/01.mp3?_=1" /><a href="https://ipaudio.club/wp-content/uploads/GOLN/Eragon/01.mp3">https://ipaudio.club/wp-content/uploads/GOLN/Eragon/01.mp3</a></audio>';
    b='<audio controlsList="nodownload" class="wp-audio-shortcode" id="audio-20948-2" preload="none" style="width: 100%;" controls="controls"><source class="lazy lazy-hidden" type="audio/mpeg" src="https://ipaudio.club/wp-content/uploads/GOLN/Eragon/02.mp3?_=2" /><a href="https://ipaudio.club/wp-content/uploads/GOLN/Eragon/02.mp3">https://ipaudio.club/wp-content/uploads/GOLN/Eragon/02.mp3</a></audio>';
    c='<audio controlsList="nodownload" class="wp-audio-shortcode" id="audio-20948-3" preload="none" style="width: 100%;" controls="controls"><source class="lazy lazy-hidden" type="audio/mpeg" src="https://ipaudio.club/wp-content/uploads/GOLN/Eragon/03.mp3?_=3" /><a href="https://ipaudio.club/wp-content/uploads/GOLN/Eragon/03.mp3">https://ipaudio.club/wp-content/uploads/GOLN/Eragon/03.mp3</a></audio>';
    d='<audio controlsList="nodownload" class="wp-audio-shortcode" id="audio-20948-4" preload="none" style="width: 100%;" controls="controls"><source class="lazy lazy-hidden" type="audio/mpeg" src="https://ipaudio.club/wp-content/uploads/GOLN/Eragon/04.mp3?_=4" /><a href="https://ipaudio.club/wp-content/uploads/GOLN/Eragon/04.mp3">https://ipaudio.club/wp-content/uploads/GOLN/Eragon/04.mp3</a></audio>';
    e='<audio controlsList="nodownload" class="wp-audio-shortcode" id="audio-20948-5" preload="none" style="width: 100%;" controls="controls"><source class="lazy lazy-hidden" type="audio/mpeg" src="https://ipaudio.club/wp-content/uploads/GOLN/Eragon/05.mp3?_=5" /><a href="https://ipaudio.club/wp-content/uploads/GOLN/Eragon/05.mp3">https://ipaudio.club/wp-content/uploads/GOLN/Eragon/05.mp3</a></audio>';
    f='<audio controlsList="nodownload" class="wp-audio-shortcode" id="audio-20948-6" preload="none" style="width: 100%;" controls="controls"><source class="lazy lazy-hidden" type="audio/mpeg" src="https://ipaudio.club/wp-content/uploads/GOLN/Eragon/06.mp3?_=6" /><a href="https://ipaudio.club/wp-content/uploads/GOLN/Eragon/06.mp3">https://ipaudio.club/wp-content/uploads/GOLN/Eragon/06.mp3</a></audio>';
    g='<audio controlsList="nodownload" class="wp-audio-shortcode" id="audio-20948-7" preload="none" style="width: 100%;" controls="controls"><source class="lazy lazy-hidden" type="audio/mpeg" src="https://ipaudio.club/wp-content/uploads/GOLN/Eragon/07.mp3?_=7" /><a href="https://ipaudio.club/wp-content/uploads/GOLN/Eragon/07.mp3">https://ipaudio.club/wp-content/uploads/GOLN/Eragon/07.mp3</a></audio>';
    h='<audio controlsList="nodownload" class="wp-audio-shortcode" id="audio-20948-8" preload="none" style="width: 100%;" controls="controls"><source class="lazy lazy-hidden" type="audio/mpeg" src="https://ipaudio.club/wp-content/uploads/GOLN/Eragon/08.mp3?_=8" /><a href="https://ipaudio.club/wp-content/uploads/GOLN/Eragon/08.mp3">https://ipaudio.club/wp-content/uploads/GOLN/Eragon/08.mp3</a></audio>';
    i='<audio controlsList="nodownload" class="wp-audio-shortcode" id="audio-20948-9" preload="none" style="width: 100%;" controls="controls"><source class="lazy lazy-hidden" type="audio/mpeg" src="https://ipaudio.club/wp-content/uploads/GOLN/Eragon/09.mp3?_=9" /><a href="https://ipaudio.club/wp-content/uploads/GOLN/Eragon/09.mp3">https://ipaudio.club/wp-content/uploads/GOLN/Eragon/09.mp3</a></audio>';
    j='<audio controlsList="nodownload" class="wp-audio-shortcode" id="audio-20948-10" preload="none" style="width: 100%;" controls="controls"><source class="lazy lazy-hidden" type="audio/mpeg" src="https://ipaudio.club/wp-content/uploads/GOLN/Eragon/10.mp3?_=10" /><a href="https://ipaudio.club/wp-content/uploads/GOLN/Eragon/10.mp3">https://ipaudio.club/wp-content/uploads/GOLN/Eragon/10.mp3</a></audio>';
    k='<audio controlsList="nodownload" class="wp-audio-shortcode" id="audio-20948-11" preload="none" style="width: 100%;" controls="controls"><source class="lazy lazy-hidden" type="audio/mpeg" src="https://ipaudio.club/wp-content/uploads/GOLN/Eragon/11.mp3?_=11" /><a href="https://ipaudio.club/wp-content/uploads/GOLN/Eragon/11.mp3">https://ipaudio.club/wp-content/uploads/GOLN/Eragon/11.mp3</a></audio>';
    l='<audio controlsList="nodownload" class="wp-audio-shortcode" id="audio-20948-12" preload="none" style="width: 100%;" controls="controls"><source class="lazy lazy-hidden" type="audio/mpeg" src="https://ipaudio.club/wp-content/uploads/GOLN/Eragon/12.mp3?_=12" /><a href="https://ipaudio.club/wp-content/uploads/GOLN/Eragon/12.mp3">https://ipaudio.club/wp-content/uploads/GOLN/Eragon/12.mp3</a></audio>';
    m='<audio controlsList="nodownload" class="wp-audio-shortcode" id="audio-20948-13" preload="none" style="width: 100%;" controls="controls"><source class="lazy lazy-hidden" type="audio/mpeg" src="https://ipaudio.club/wp-content/uploads/GOLN/Eragon/13.mp3?_=13" /><a href="https://ipaudio.club/wp-content/uploads/GOLN/Eragon/13.mp3">https://ipaudio.club/wp-content/uploads/GOLN/Eragon/13.mp3</a></audio>';
    n='<audio controlsList="nodownload" class="wp-audio-shortcode" id="audio-20948-14" preload="none" style="width: 100%;" controls="controls"><source class="lazy lazy-hidden" type="audio/mpeg" src="https://ipaudio.club/wp-content/uploads/GOLN/Eragon/14.mp3?_=14" /><a href="https://ipaudio.club/wp-content/uploads/GOLN/Eragon/14.mp3">https://ipaudio.club/wp-content/uploads/GOLN/Eragon/14.mp3</a></audio>';
    o='<audio controlsList="nodownload" class="wp-audio-shortcode" id="audio-20948-15" preload="none" style="width: 100%;" controls="controls"><source class="lazy lazy-hidden" type="audio/mpeg" src="https://ipaudio.club/wp-content/uploads/GOLN/Eragon/15.mp3?_=15" /><a href="https://ipaudio.club/wp-content/uploads/GOLN/Eragon/15.mp3">https://ipaudio.club/wp-content/uploads/GOLN/Eragon/15.mp3</a></audio>';
    p='<audio controlsList="nodownload" class="wp-audio-shortcode" id="audio-20948-16" preload="none" style="width: 100%;" controls="controls"><source class="lazy lazy-hidden" type="audio/mpeg" src="https://ipaudio.club/wp-content/uploads/GOLN/Eragon/16.mp3?_=16" /><a href="https://ipaudio.club/wp-content/uploads/GOLN/Eragon/16.mp3">https://ipaudio.club/wp-content/uploads/GOLN/Eragon/16.mp3</a></audio>';
    q='<audio controlsList="nodownload" class="wp-audio-shortcode" id="audio-20948-17" preload="none" style="width: 100%;" controls="controls"><source class="lazy lazy-hidden" type="audio/mpeg" src="https://ipaudio.club/wp-content/uploads/GOLN/Eragon/17.mp3?_=17" /><a href="https://ipaudio.club/wp-content/uploads/GOLN/Eragon/17.mp3">https://ipaudio.club/wp-content/uploads/GOLN/Eragon/17.mp3</a></audio>';
   r=a+b+c+d+e+f+g+h+i+j+k+l+m+n+o+p+q;
    localStorage.setItem("Audio", r);
    window.location = "abpage.html";
}

function next(){
    
     window.location="Email.html"
}

