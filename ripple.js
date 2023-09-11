function addRippleEffectToElements(selector) {
    const elements = document.querySelectorAll(selector);
    
    elements.forEach(element => {
      element.addEventListener('mouseover', function(e) {
        let target = e.target.tagName === 'IMG' ? e.target : this;
        let { left, top } = target.getBoundingClientRect();
        let x = e.clientX - left;
        let y = e.clientY - top;
        let ripples = document.createElement('span');
  
        ripples.style.left = x + 'px';
        ripples.style.top = y + 'px';
        ripples.classList.add("ripple-span");
  
        this.appendChild(ripples);
  
        setTimeout(() => ripples.remove(), 1000);
      });
    });
  }
  