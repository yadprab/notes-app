//get add  button
const addButton = document.querySelector('#add-button');
console.log(addButton);

//create a generate html-fn
function generateHtml(){
    return `
    
          
    <div class="text-area ">
    <div class=" button-area button-area-1">
        <button class="close"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512">
            <!--
            Font Awesome Free 5.15.0 by @fontawesome - https://fontawesome.com
            License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
            -->
            <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"/></svg> </button>
        <button id='check-1'><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 13L9 17L19 7" stroke="#4A5568" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            
            </button>
            <button id="trash-1"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 7L18.1327 19.1425C18.0579 20.1891 17.187 21 16.1378 21H7.86224C6.81296 21 5.94208 20.1891 5.86732 19.1425L5 7M10 11V17M14 11V17M15 7V4C15 3.44772 14.5523 3 14 3H10C9.44772 3 9 3.44772 9 4V7M4 7H20" stroke="#4A5568" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                </button>
    </div>
    <input type="text" name="title" id="title" placeholder="title" disabled>
    <textarea name="notes" id="notes" disabled></textarea>


    <div class="button-area   button-area-2">
        <button id='check-2'><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 13L9 17L19 7" stroke="#4A5568" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            
            </button>
            <button id="trash-2"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 7L18.1327 19.1425C18.0579 20.1891 17.187 21 16.1378 21H7.86224C6.81296 21 5.94208 20.1891 5.86732 19.1425L5 7M10 11V17M14 11V17M15 7V4C15 3.44772 14.5523 3 14 3H10C9.44772 3 9 3.44772 9 4V7M4 7H20" stroke="#4A5568" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                </button>
    </div>
</div>


    
    
    
    
    
    
    
    
    
    
    
    `
}

//overlay-function
function overlay(){
      //get check and trash button
      const check = document.querySelectorAll('#check-2');
      const trash = document.querySelectorAll('#trash-2');
      const textarea = document.querySelectorAll('.text-area');

      //overlayFn
      function addOverlayFn(e){
            //preventDefault
             e.preventDefault();

             //get parent-element
             const parent = e.target.parentElement.parentElement;
            //  console.log(parent);

             //now add class to the parent 
             const input = parent.querySelector('input');
             const txt = parent.querySelector('textarea');
             input.removeAttribute('disabled');
             txt.removeAttribute('disabled');
             parent.classList.add('overlay');

            //get close button
            const close = parent.querySelector('.close');
            const check2 = parent.querySelector('#check-1');
            const trash2 = parent.querySelector('#trash-1');

           function checkFn(e){
                //preventDefault
            e.preventDefault();
            txt.textContent = txt.value;
            input.textContent = input.value;

            //get saved
            const saved = document.querySelector('.saved');
            console.log(saved);
           
            saved.classList.add('saved-show');
            setTimeout(()=>{
               
              saved.classList.remove('saved-show');
               
            }, 1000)

           }
            //add-events-to remove overlay-class

            //check event
            check2.addEventListener('click', checkFn);
            trash2.addEventListener('click', removeFn)
            close.addEventListener('click', function(e){
                e.preventDefault();
                parent.classList.remove('overlay')
            })
            

             
             

      }
      //removeFn
      function removeFn(e){
           //preventDefault
           e.preventDefault();

           //get parent-element
           const parent = e.target.parentElement.parentElement;
           console.log(parent);
           parent.remove();



      }
      
      
      
      
      
      //add-event
      check.forEach(check1=>check1.addEventListener('click', addOverlayFn));
      trash.forEach(trash1=>trash1.addEventListener('click', removeFn))
      
}

//adding notes
function addNote(e){
    //preventDefault
    e.preventDefault();

    const container = document.querySelector('.container');
    //adding html to container child
    container.insertAdjacentHTML('beforeend', generateHtml());

  overlay();
  

}

//event-listener
addButton.addEventListener('click', addNote)

