const getEventTarget = e => {
    e = e || window.event;
    return e.target || e.srcElement;
};
const navBar = document.querySelector('.navbar');
const dropDown = document.querySelectorAll('.dropdown');
//const dropBtn = document.querySelectorAll('.dropbtn');
const dropMenu = document.querySelectorAll('.dropdown-content');
const noState = () => {
    dropMenu.forEach(el => {
        el.setAttribute('data-state', 'closed');
        el.style.display = "none";
    });

}
const dropDownMenu = (e) => {
    let $this = getEventTarget(e);
    if ($this.className === 'dropbtn') {
        let $that = $this.nextElementSibling;
        $that.setAttribute('data-state', $that.getAttribute('data-state') === 'open' ?
            'closed' : 'open'
        );
        $that.style.display = {
            'open': 'block',
            'closed': 'none'
        }[$that.getAttribute('data-state')];
    }
};
navBar.addEventListener('click', dropDownMenu);
dropDown.forEach(el => {el.addEventListener('mouseleave', noState);});
dropMenu.forEach(el => {el.addEventListener('click', noState);});
noState();


/////////////////////////
var xhr = new XMLHttpRequest();
xhr.open('GET','http://webwork.s3.amazonaws.com/interview-tests/MOCK_DATA.json',false);
xhr.send();
if(xhr.status != 200) {
    alert( xhr.status + ': ' + xhr.statusText );
} else {
   console.log(xhr.response);

    document.querySelector('.js-content').innerHTML=xhr.response;
}
